export default function AppearanceIcon({
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
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8346 8.35449V4.02116C10.8346 2.99978 10.8346 2.48909 10.5173 2.17179C10.2 1.85449 9.68934 1.85449 8.66797 1.85449H4.33464C3.31326 1.85449 2.80257 1.85449 2.48527 2.17179C2.16797 2.48909 2.16797 2.99978 2.16797 4.02116V8.35449"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 3.47949H6.50487"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.89519 8.90452L2.1779 8.35449H10.8079L11.1061 8.90452C11.8876 10.3462 12.0823 11.067 11.7852 11.6066C11.4882 12.1462 10.7005 12.1462 9.12524 12.1462L3.87607 12.1462C2.30079 12.1462 1.51315 12.1462 1.21608 11.6066C0.919007 11.067 1.11364 10.3462 1.89519 8.90452Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
