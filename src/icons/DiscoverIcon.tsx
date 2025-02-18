export default function DiscoverIcon({
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
      <g clipPath="url(#clip0_83_10514)">
        <path
          d="M1.33398 14.334L14.6673 14.334"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 10.334H12.006M12 12.334H12.006"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 12.334H4.00599M4 10.334H4.00599M4 8.33398H4.00599M4 6.33398H4.00599"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.19505 3.5949L10.8135 6.39392M5.33464 3.00033C5.33464 3.73671 4.73768 4.33366 4.0013 4.33366C3.26492 4.33366 2.66797 3.73671 2.66797 3.00033C2.66797 2.26395 3.26492 1.66699 4.0013 1.66699C4.73768 1.66699 5.33464 2.26395 5.33464 3.00033ZM13.3346 7.00033C13.3346 7.73671 12.7377 8.33366 12.0013 8.33366C11.2649 8.33366 10.668 7.73671 10.668 7.00033C10.668 6.26395 11.2649 5.66699 12.0013 5.66699C12.7377 5.66699 13.3346 6.26395 13.3346 7.00033Z"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_83_10514">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
