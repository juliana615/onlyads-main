export default function DarkThemeIcon({
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
      <g clipPath="url(#clip0_1_19550)">
        <path
          d="M14.3337 9.3859C13.5339 9.81296 12.6204 10.055 11.6504 10.055C8.49974 10.055 5.94561 7.50091 5.94561 4.35023C5.94561 3.38023 6.18769 2.46678 6.61475 1.66699C3.77876 2.33165 1.66699 4.87708 1.66699 7.91574C1.66699 11.4603 4.54039 14.3337 8.08491 14.3337C11.1236 14.3337 13.669 12.2219 14.3337 9.3859Z"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_19550">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
