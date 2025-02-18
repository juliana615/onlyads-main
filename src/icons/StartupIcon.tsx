export default function StartupIcon({
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
        d="M4.40039 7.94865C7.78215 1.6458 11.9931 1.57312 13.6758 2.32463C14.4273 4.00736 14.3546 8.21827 8.05176 11.6C7.98641 11.2243 7.6229 10.2399 6.69168 9.30873C5.76047 8.37752 4.77615 8.01401 4.40039 7.94865Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.90039 11.3C10.1261 11.9 10.2569 12.9759 10.4267 14C10.4267 14 12.9938 12.1023 11.3517 9.5"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.69998 7.1513C4.09997 5.92562 3.0241 5.79476 2 5.62497C2 5.62497 3.89767 3.05788 6.49998 4.69995"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.01205 9.94132C3.67083 10.2825 3.09075 11.2721 3.50022 12.5005C4.72862 12.91 5.71817 12.3299 6.05939 11.9887"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5345 5.63314C11.5345 4.98881 11.0122 4.46647 10.3678 4.46647C9.72351 4.46647 9.20117 4.98881 9.20117 5.63314C9.20117 6.27747 9.72351 6.7998 10.3678 6.7998C11.0122 6.7998 11.5345 6.27747 11.5345 5.63314Z"
        stroke={stroke}
        strokeWidth="1.5"
      />
    </svg>
  )
}
