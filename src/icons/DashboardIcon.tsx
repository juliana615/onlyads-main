export default function DashboardIcon({
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
      <g clipPath="url(#clip0_83_10504)">
        <path
          d="M2.66797 10L2.66797 12.6667"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 6L8 12.6667"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.668 14.666L1.33464 14.666"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.334 8.66602L13.334 12.666"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.73405 5.86629C3.49079 5.54247 3.10351 5.33301 2.66732 5.33301C1.93094 5.33301 1.33398 5.92996 1.33398 6.66634C1.33398 7.40272 1.93094 7.99967 2.66732 7.99967C3.4037 7.99967 4.00065 7.40272 4.00065 6.66634C4.00065 6.36616 3.90145 6.08914 3.73405 5.86629ZM3.73405 5.86629L6.93392 3.46639M6.93392 3.46639C7.17718 3.79021 7.56445 3.99967 8.00065 3.99967C8.52264 3.99967 8.97458 3.69971 9.19348 3.26276M6.93392 3.46639C6.76652 3.24354 6.66732 2.96652 6.66732 2.66634C6.66732 1.92996 7.26427 1.33301 8.00065 1.33301C8.73703 1.33301 9.33398 1.92996 9.33398 2.66634C9.33398 2.88073 9.28339 3.0833 9.19348 3.26276M9.19348 3.26276L12.1412 4.73659M12.1412 4.73659C12.0512 4.91605 12.0007 5.11862 12.0007 5.33301C12.0007 6.06939 12.5976 6.66634 13.334 6.66634C14.0704 6.66634 14.6673 6.06939 14.6673 5.33301C14.6673 4.59663 14.0704 3.99967 13.334 3.99967C12.812 3.99967 12.3601 4.29964 12.1412 4.73659Z"
          stroke={stroke}
          strokeWidth="1.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_83_10504">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
