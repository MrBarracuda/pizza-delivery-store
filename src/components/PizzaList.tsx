import { useQuery } from '@tanstack/react-query'
import ky from 'ky'

import { PizzaItem } from './PizzaItem'

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

export const PizzaList = () => {
  const fetchPizzas = async (): Promise<Pizza[]> => {
    const res = await ky('http://localhost:8000/pizzas')
    if (!res.ok) throw new Error('Failed to fetch todos!')
    return res.json()
  }

  const { data, isLoading, isSuccess } = useQuery({ queryFn: fetchPizzas, queryKey: ['pizzas'] })

  const pizzas = isSuccess && data.map((pizza) => <PizzaItem key={pizza.id} {...pizza} />)

  return (
    <div className="container mx-auto px-5 py-24" id="pizza-list">
      <div className="-mx-4 flex flex-wrap">{isLoading ? <div>Loading...</div> : pizzas}</div>
    </div>
  )
}
