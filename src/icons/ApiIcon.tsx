export default function ApiIcon({
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
      <g clipPath="url(#clip0_2001_10568)">
        <path
          d="M1.66602 8.00033C1.66602 5.01476 1.66602 3.52198 2.59351 2.59449C3.52101 1.66699 5.01379 1.66699 7.99935 1.66699C10.9849 1.66699 12.4777 1.66699 13.4052 2.59449C14.3327 3.52198 14.3327 5.01476 14.3327 8.00033C14.3327 10.9859 14.3327 12.4787 13.4052 13.4062C12.4777 14.3337 10.9849 14.3337 7.99935 14.3337C5.01379 14.3337 3.52101 14.3337 2.59351 13.4062C1.66602 12.4787 1.66602 10.9859 1.66602 8.00033Z"
          stroke={stroke}
          strokeWidth="1.5"
        />
        <path
          d="M3.99935 9L4.99935 6L6.24935 9M3.99935 9L3.66602 10M3.99935 9H6.24935M6.24935 9L6.66602 10"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.33203 8V6.46667C8.33203 6.34258 8.33203 6.28054 8.34835 6.23033C8.38132 6.12885 8.46088 6.04929 8.56236 6.01631C8.61257 6 8.67461 6 8.7987 6H9.66536C10.2176 6 10.6654 6.44772 10.6654 7C10.6654 7.55228 10.2176 8 9.66536 8H8.33203ZM8.33203 8V10"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.332 6V10"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2001_10568">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
