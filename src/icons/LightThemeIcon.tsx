export default function LightThemeIcon({
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
      <g clipPath="url(#clip0_1_19545)">
        <path
          d="M11.3327 7.99935C11.3327 9.8403 9.8403 11.3327 7.99935 11.3327C6.1584 11.3327 4.66602 9.8403 4.66602 7.99935C4.66602 6.1584 6.1584 4.66602 7.99935 4.66602C9.8403 4.66602 11.3327 6.1584 11.3327 7.99935Z"
          stroke={stroke}
          strokeWidth="1.5"
        />
        <path
          d="M7.99967 1.33301C7.74813 1.55523 7.39598 2.13301 7.99967 2.66634M7.99967 13.333C8.25122 13.5552 8.60337 14.133 7.99967 14.6663M12.9997 3.00148C12.6454 2.97955 11.9499 3.14829 12.0025 3.99866M3.66352 11.6663C3.68544 12.0207 3.51671 12.7161 2.66634 12.6635M3.33482 2.99967C3.31287 3.35435 3.48178 4.05054 4.33301 3.99787M11.9997 11.668C12.354 11.6473 13.0495 11.8069 12.9968 12.6109M14.6663 7.99967C14.4441 7.74813 13.8663 7.39598 13.333 7.99967M2.66634 7.66634C2.44412 7.91788 1.86634 8.27004 1.33301 7.66634"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_19545">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
