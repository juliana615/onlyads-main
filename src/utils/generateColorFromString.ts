export const generateColorFromString = (text: string) => {
  let hash = 0
  if (text.length === 0) return '#999'
  for (let i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash)
    hash = hash & hash
  }

  let color = '#'
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 255
    color += ('00' + value.toString(16)).slice(-2)
  }

  return color
}
