export default function ChartMaximumIcon({
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
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.75 15.75H7.5C5.02513 15.75 3.78769 15.75 3.01884 14.9812C2.25 14.2123 2.25 12.9749 2.25 10.5V2.25"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4.5 4.5H4.50673M6.74865 4.5H6.75539M8.99731 4.5H9.00404M11.246 4.5H11.2527M13.4946 4.5H13.5013M15.7433 4.5H15.75"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.25 15.75C14.25 10.7794 12.2353 6.75 9.75 6.75C7.26472 6.75 5.25 10.7794 5.25 15.75"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}
