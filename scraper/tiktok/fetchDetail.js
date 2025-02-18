const fs = require("fs");
const readline = require("readline");
const path = require("path");
const { MongoClient } = require("mongodb");

// MongoDB configuration
const MONGO_URI = "mongodb://seo_cromom_user:SOh3TbYhx8ypJPxmt1oOfLUjkoipuy88999978Gty@127.0.0.1:27017/seo_cromom_db"; // Replace with your MongoDB URI
const DATABASE_NAME = "seo_cromom_db";
const COLLECTION_NAME = "tiktok";

// Function to format time in hh:mm:ss
const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

// Helper function to download a stream
async function downloadStream(url, outputPath) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        // Read the response as a Buffer
        const buffer = await response.arrayBuffer();

        // Write the buffer to a file
        fs.writeFileSync(outputPath, Buffer.from(buffer));
    } catch (error) {
        console.error("Error downloading the file:", error.message);
        throw error;
    }
}

// Function to get details and download associated files
const getDetail = async (id, mongoCollection) => {
    const startTime = Date.now();
    console.log(`[${new Date().toISOString()}] Processing ID: ${id}...`);

    try {
        const response = await fetch(`https://library.tiktok.com/api/v1/items/${id}/details?lang=en-US`, {
            headers: {
                accept: "application/json, text/plain, */*",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json",
            },
            body: null,
            method: "GET",
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch details for ID ${id}: ${response.statusText}`);
        }

        const jsonData = await response.json();
        const { data } = jsonData;
        const { ad: { videos } } = data;

        // Download videos and covers
        for (let i = 0; i < videos.length; i++) {
            const { video_url, cover_img } = videos[i];
            const videoPath = path.join(__dirname, "downloads", `${id}_${i}.mp4`);
            const coverPath = path.join(__dirname, "downloads", `${id}_cover_${i}.jpg`);

            await downloadStream(video_url, videoPath);
            await downloadStream(cover_img, coverPath);
        }

        // Insert data into MongoDB
        await mongoCollection.insertOne(data);

        const elapsedTime = Date.now() - startTime;
        console.log(`[${new Date().toISOString()}] Finished ID: ${id}. Time spent: ${formatTime(elapsedTime)}`);
    } catch (error) {
        console.error(`[${new Date().toISOString()}] Error processing ID ${id}:`, error.message);
    }
};

// Main function
const run = async () => {
    try {
        console.log(`[${new Date().toISOString()}] Starting data fetch...`);

        // Connect to MongoDB
        const client = new MongoClient(MONGO_URI);
        await client.connect();
        console.log(`[${new Date().toISOString()}] Connected to MongoDB.`);
        const db = client.db(DATABASE_NAME);
        const collection = db.collection(COLLECTION_NAME);

        // Create downloads directory if it doesn't exist
        const downloadsDir = path.join(__dirname, "downloads");
        if (!fs.existsSync(downloadsDir)) {
            fs.mkdirSync(downloadsDir);
        }

        const startTime = Date.now();

        // Read IDs from a file
        const fileStream = fs.createReadStream('data.log');
        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity,
        });
        let lineNo = 0;
        for await (const line of rl) {
            const item = JSON.parse(line.trim())
            await getDetail(item.id, collection);
            fs.writeFileSync("lastid.txt", '' + (lineNo++));
        }
        const totalElapsedTime = Date.now() - startTime;
        console.log(`[${new Date().toISOString()}] Data fetching completed. Total time spent: ${formatTime(totalElapsedTime)}`);
        await client.close();
    } catch (error) {
        console.error(`[${new Date().toISOString()}] An error occurred:`, error);
    }
};

run();
