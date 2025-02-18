export default function ReportsIcon({
  stroke,
  width = 16,
  height = 16,
}: {
  stroke: string
  width?: number
  height?: number
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.00203 2.66699C4.98947 2.41933 5.03457 2.22803 5.1572 2.06699C5.46178 1.66699 6.08224 1.66699 7.32314 1.66699H8.67686C9.91777 1.66699 10.5382 1.66699 10.8428 2.06699C10.9654 2.22803 11.0105 2.41933 10.998 2.66699"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33398 5.33398C3.35921 5.1609 3.41717 5.01127 3.51377 4.87686C3.90394 4.33398 4.71272 4.33398 6.33028 4.33398H9.67103C11.2886 4.33398 12.0974 4.33398 12.4875 4.87686C12.5841 5.01127 12.6421 5.1609 12.6673 5.33398"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.54502 10.4752L3.02427 12.0107C3.62129 13.9235 4.13153 14.3333 6.14018 14.3333H9.85982C11.8685 14.3333 12.3787 13.9235 12.9757 12.0107L13.455 10.4752C13.9507 8.88685 14.1986 8.09266 13.8067 7.54633C13.4149 7 12.5973 7 10.9623 7H5.03775C3.40267 7 2.58513 7 2.19325 7.54633C1.80138 8.09266 2.04926 8.88684 2.54502 10.4752Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
