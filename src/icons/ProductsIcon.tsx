export default function ProductsIcon({
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
        d="M14.4 4.20035L1.60044 4.20017L1.59961 4.20039M14.4 4.20035L14.3996 13.0777C14.3996 13.9187 13.705 14.6004 12.8481 14.6004H3.15112C2.29425 14.6004 1.59961 13.9187 1.59961 13.0777V4.20039M14.4 4.20035L11.8339 1.63471C11.6839 1.48468 11.4804 1.40039 11.2682 1.40039H4.73098C4.51881 1.40039 4.31532 1.48468 4.16529 1.63471L1.59961 4.20039M10.3996 6.60039C10.3996 7.92587 9.32509 9.00039 7.99961 9.00039C6.67413 9.00039 5.59961 7.92587 5.59961 6.60039"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
