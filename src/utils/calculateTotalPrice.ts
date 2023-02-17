// import { CartItem } from '../features/cart'

// export const calculateTotalPrice = (items: any[]) => items.reduce((sum, item) => item.price * item.count + sum, 0)

// import IFilter from "../interfaces/IFilters";

interface IFilter<T> {
  property: keyof T
  isTruthyPicked: boolean
}

export function genericFilter<T>(object: T, filters: IFilter<T>[]) {
  if (filters.length === 0) return true

  return filters.every((filter) => (filter.isTruthyPicked ? object[filter.property] : !object[filter.property]))
}
