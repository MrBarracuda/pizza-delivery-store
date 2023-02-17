enum Sizes {
  Medium = 1,
  Large = 2,
}

enum Percentage {
  Low = 5,
  Average = 10,
  High = 20,
}

const addPercentage = (price: number, percent: number) => Math.round(price + (price / 100) * percent)
// const extraDoughPrice = (price: number, type: number) => type === 1 ? addPercentage(price, Percentage.Low) : price

export const extraPrice = (price: number, type: number, size: number) => {
  const currentPrice = type === 1 ? addPercentage(price, Percentage.Low) : price
  // const currentPrice = extraDoughPrice(price, type)
  if (size === Sizes.Large) return addPercentage(currentPrice, Percentage.High)
  if (size === Sizes.Medium) return addPercentage(currentPrice, Percentage.Average)
  return currentPrice
}
