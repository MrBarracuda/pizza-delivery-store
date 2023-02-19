import { PizzaItem } from './PizzaItem'

export const PizzaList = () => {
  return (
    <div className="px-5 py-24" id="pizza-list">
      <div className="flex flex-wrap">
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
      </div>
    </div>
  )
}
