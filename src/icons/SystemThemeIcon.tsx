export default function SystemThemeIcon({
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
      <g clipPath="url(#clip0_1_19554)">
        <path
          d="M9.33301 1.33301H6.66634C4.48019 1.33301 3.38711 1.33301 2.61228 1.87555C2.32561 2.07628 2.07628 2.32561 1.87555 2.61228C1.33301 3.38711 1.33301 4.48019 1.33301 6.66634C1.33301 8.85249 1.33301 9.94557 1.87555 10.7204C2.07628 11.0071 2.32561 11.2564 2.61228 11.4571C3.38711 11.9997 4.48019 11.9997 6.66634 11.9997H9.33301C11.5192 11.9997 12.6122 11.9997 13.3871 11.4571C13.6737 11.2564 13.9231 11.0071 14.1238 10.7204C14.6663 9.94557 14.6663 8.85249 14.6663 6.66634C14.6663 4.48019 14.6663 3.38711 14.1238 2.61228C13.9231 2.32561 13.6737 2.07628 13.3871 1.87555C12.6122 1.33301 11.5192 1.33301 9.33301 1.33301Z"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M7.33301 10H8.66634"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.66634 14.6667L9.45601 14.3874C8.98185 13.7579 8.8643 12.7963 9.16419 12M6.33301 14.6667L6.54334 14.3874C7.0175 13.7579 7.13504 12.7963 6.83516 12"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path d="M4.66602 14.666H11.3327" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      </g>
      <defs>
        <clipPath id="clip0_1_19554">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
