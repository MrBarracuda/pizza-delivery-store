import { useQuery } from '@tanstack/react-query'

import instance from '../../shared/api/instance'

export interface Pizza {
  id: number
  imageUrl: string
  ingredients: string
  title: string
  types: number[]
  sizes: number[]
  price: number
  category: number
  rating: number
}
const fetchPizzas = async (): Promise<Pizza[]> => {
  try {
    return await instance('pizzas').json()
  } catch (err: unknown) {
    const error = err as Error
    throw new Error(error.message)
  }
}

export const usePizzasQuery = () => useQuery({ queryFn: fetchPizzas, queryKey: ['pizzas'] })
