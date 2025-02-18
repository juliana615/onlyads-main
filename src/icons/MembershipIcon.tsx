export default function MembershipIcon({
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
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.16602 5.25H10.4993" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8.16602 7.29199H9.91602" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      <rect
        x="1.16602"
        y="1.75"
        width="11.6667"
        height="10.5"
        rx="2"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M2.91602 9.33366C3.62086 7.82803 6.24812 7.72896 6.99935 9.33366"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.12435 5.24967C6.12435 5.89401 5.60201 6.41634 4.95768 6.41634C4.31335 6.41634 3.79102 5.89401 3.79102 5.24967C3.79102 4.60534 4.31335 4.08301 4.95768 4.08301C5.60201 4.08301 6.12435 4.60534 6.12435 5.24967Z"
        stroke={stroke}
        strokeWidth="1.5"
      />
    </svg>
  )
}
