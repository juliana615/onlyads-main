const fs = require("fs");

// Function to log individual data entries to a file
const logData = (data) => {
    data.forEach((item) => {
        fs.appendFileSync("data.log", JSON.stringify(item) + "\n", "utf8");
    });
};

// Function to format time in hh:mm:ss
const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Function to get the list with status updates
const getList = async () => {
    const limit = 12;
    const offset = 93264;
    const list = [];
    const startTime = Date.now();
    let hasMore = false;
    let searchId = "";

    const initialResponse = await fetch("https://library.tiktok.com/api/v1/search?region=all&type=1&start_time=1664553600&end_time=1733770342", {
        headers: {
            accept: "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/json",
        },
        body: JSON.stringify({
            query: "",
            query_type: "",
            adv_biz_ids: "",
            order: "create_time,asc",
            offset: 0,
            search_id: "",
            limit
        }),
        method: "POST",
    });
    const initialData = await initialResponse.json();
    searchId = initialData.search_id;
    do {
        try {
            const response = await fetch("https://library.tiktok.com/api/v1/search?region=all&type=1&start_time=1664553600&end_time=1733770342", {
                headers: {
                    accept: "application/json, text/plain, */*",
                    "accept-language": "en-US,en;q=0.9",
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    query: "",
                    query_type: "",
                    adv_biz_ids: "",
                    order: "create_time,asc",
                    offset: offset + list.length,
                    search_id: searchId,
                    limit
                }),
                method: "POST",
            });
            const jsonData = await response.json();
            console.log(jsonData);
            const { data, has_more, search_id } = jsonData;
            // Determine if more data exists
            hasMore = has_more;
            searchId = search_id;

            // Log individual items to a file
            logData(data);

            // Add fetched items to the list
            list.push(...data);

            // Update status
            const elapsedTime = Date.now() - startTime;
            console.log(`Fetched ${list.length} items so far. Time spent: ${formatTime(elapsedTime)}`);
        } catch (e) {
            console.error("An error occurred:", e);
            console.log("Retrying in 60 seconds...");
            await sleep(60000); // Wait for 10 seconds before retrying
            hasMore = true;
        }
    } while (hasMore);

    return list;
};

// Main function
const run = async () => {
    try {
        console.log("Starting data fetch...");
        const list = await getList();

        // Write the complete list to a file
        fs.writeFileSync("complete_list.json", JSON.stringify(list, null, 2), "utf8");
        console.log("Data fetching and saving completed.");
    } catch (error) {
        console.error("An error occurred:", error);
    }
};

run();


// fetch("https://library.tiktok.com/api/v1/search?region=all&type=1&start_time=1664553600&end_time=1733770342", {
//   "headers": {
//     "accept": "application/json, text/plain, */*",
//     "accept-language": "en-US,en;q=0.9",
//     "content-type": "application/json",
//     "priority": "u=1, i",
//     "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"Windows\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "cookie": "_ga=GA1.1.1021530646.1733765987; FPID=FPID2.2.Lz42KxT%2FCnFN9vNwKyFO093Vi5%2F3TPURWPwitiwhIME%3D.1733765987; FPAU=1.2.1048713091.1733765989; FPLC=qLGwl4aXaibuEVv68N3PorLOHKp64XZXnD6U2dc%2BnT%2BC0WYYMF6wHScrIbTCL%2BS1dpV9N5egodDe%2FXumEirMQcwMkwAW7ALDlkByp7iH4rE0jMLcFwkbTfHQd8ZafQ%3D%3D; _ga_TEQXTT9FE4=GS1.1.1733770269.2.1.1733770371.0.0.391268308",
//     "Referer": "https://library.tiktok.com/ads?region=all&start_time=1664553600000&end_time=1733770342112&adv_name=Computers&adv_biz_ids=&query_type=3&sort_type=last_shown_date,desc",
//     "Referrer-Policy": "strict-origin-when-cross-origin"
//   },
//   "body": "{\"query\":\"Computers\",\"query_type\":\"3\",\"adv_biz_ids\":\"\",\"order\":\"last_shown_date,desc\",\"offset\":0,\"search_id\":\"\",\"limit\":12}",
//   "method": "POST"
// });

// fetch("https://library.tiktok.com/api/v1/support-regions?lang=en-US", {
//   "headers": {
//     "accept": "application/json, text/plain, */*",
//     "accept-language": "en-US,en;q=0.9",
//     "priority": "u=1, i",
//     "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"Windows\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "cookie": "_ga=GA1.1.1021530646.1733765987; FPID=FPID2.2.Lz42KxT%2FCnFN9vNwKyFO093Vi5%2F3TPURWPwitiwhIME%3D.1733765987; FPAU=1.2.1048713091.1733765989; FPLC=qLGwl4aXaibuEVv68N3PorLOHKp64XZXnD6U2dc%2BnT%2BC0WYYMF6wHScrIbTCL%2BS1dpV9N5egodDe%2FXumEirMQcwMkwAW7ALDlkByp7iH4rE0jMLcFwkbTfHQd8ZafQ%3D%3D; _ga_TEQXTT9FE4=GS1.1.1733765986.1.1.1733766221.0.0.99013229",
//     "Referer": "https://library.tiktok.com/ads/detail/?ad_id=1817336022373457",
//     "Referrer-Policy": "strict-origin-when-cross-origin"
//   },
//   "body": null,
//   "method": "GET"
// });


// fetch("https://library.tiktok.com/api/v1/items/1817336022373457/details?lang=en-US", {
//   "headers": {
//     "accept": "application/json, text/plain, */*",
//     "accept-language": "en-US,en;q=0.9",
//     "priority": "u=1, i",
//     "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"Windows\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "cookie": "_ga=GA1.1.1021530646.1733765987; FPID=FPID2.2.Lz42KxT%2FCnFN9vNwKyFO093Vi5%2F3TPURWPwitiwhIME%3D.1733765987; FPAU=1.2.1048713091.1733765989; FPLC=qLGwl4aXaibuEVv68N3PorLOHKp64XZXnD6U2dc%2BnT%2BC0WYYMF6wHScrIbTCL%2BS1dpV9N5egodDe%2FXumEirMQcwMkwAW7ALDlkByp7iH4rE0jMLcFwkbTfHQd8ZafQ%3D%3D; _ga_TEQXTT9FE4=GS1.1.1733765986.1.1.1733766221.0.0.99013229",
//     "Referer": "https://library.tiktok.com/ads/detail/?ad_id=1817336022373457",
//     "Referrer-Policy": "strict-origin-when-cross-origin"
//   },
//   "body": null,
//   "method": "GET"
// });
