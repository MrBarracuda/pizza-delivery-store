import Pizza from '../assets/Margarita.jpg'
import { useState } from 'react'

export const PizzaItem = () => {
  const title = 'Pizza Margarita'
  const ingridiets = "Double portion of Mozzarella, Domino's Sauce"
  const sizes = ['small', 'medium', 'large']
  const dough = ['slim', 'regular']
  const [isActive, setIsActive] = useState(sizes[0])
  const [isActive2, setIsActive2] = useState(dough[0])

  const renderSizes = sizes.map((item) => (
    <li key={item} onClick={() => setIsActive(item)} className={`tab flex-1 ${isActive === item ? 'tab-active' : ''}`}>
      {item}
    </li>
  ))

  const renderDough = dough.map((item) => (
    <li
      key={item}
      onClick={() => setIsActive2(item)}
      className={`tab flex-1 ${isActive2 === item ? 'tab-active' : ''}`}
    >
      {item}
    </li>
  ))

  return (
    <div className="card-compact w-full rounded-md bg-white p-4 p-3 shadow-md md:w-1/2 lg:w-1/3 xl:w-1/4">
      <img src={Pizza} className="rounded-md" alt="Pizza" />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{ingridiets}</p>
        <div className="my-2 rounded-md bg-neutral-100 font-bold">
          <ul className="tabs tabs-boxed">{renderSizes}</ul>
          <ul className="tabs tabs-boxed">{renderDough}</ul>
        </div>
        <div className="card-actions items-center justify-between">
          <h4 className="font-bold">15 USD</h4>
          <button type="button" className="btn-primary btn">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}
