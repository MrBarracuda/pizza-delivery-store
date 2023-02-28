const sizes = {
  medium: 1,
  large: 2,
} as const

const percentage = {
  low: 5,
  average: 10,
  high: 20,
} as const

const addPercentage = (price: number, percent: number) => Math.round(price + (price / 100) * percent)
// const extraDoughPrice = (price: number, type: number) => type === 1 ? addPercentage(price, Percentage.Low) : price

export const extraPrice = (price: number, type: number, size: number) => {
  const currentPrice = type === 1 ? addPercentage(price, percentage.low) : price
  // const currentPrice = extraDoughPrice(price, type)
  if (size === sizes.large) return addPercentage(currentPrice, percentage.high)
  if (size === sizes.medium) return addPercentage(currentPrice, percentage.average)
  return currentPrice
}
