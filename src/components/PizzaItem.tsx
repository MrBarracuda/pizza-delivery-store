import { useState } from 'react'

import Pizza from '../assets/Margarita.jpg'
import {useTranslation} from "react-i18next";

export const PizzaItem = () => {
  const title = 'Pizza Margarita'
  const ingridiets = "Double portion of Mozzarella, Domino's Sauce"
  const sizes = ['small', 'medium', 'large']
  const dough = ['thin', 'thick']
  const [isActive, setIsActive] = useState(sizes[0])
  const [isActive2, setIsActive2] = useState(dough[0])
  const { t } = useTranslation()

  const renderSizes = sizes.map((item) => (
    <li key={item} onClick={() => setIsActive(item)} className={`tab flex-1 ${isActive === item ? 'tab-active' : ''}`}>
      {t(item)}
    </li>
  ))

  const renderDough = dough.map((item) => (
    <li
      key={item}
      onClick={() => setIsActive2(item)}
      className={`tab flex-1 ${isActive2 === item ? 'tab-active' : ''}`}
    >
      {t(item)}
    </li>
  ))

  return (
    <div className="card-compact w-full p-2 md:w-1/2 lg:w-1/3 xl:w-1/4">
      <div className="base-content rounded-md p-2 shadow-md">
        <img src={Pizza} className="rounded-md" alt="Pizza" />
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{ingridiets}</p>
          <div className="base-100 my-2 rounded-md font-bold">
            <ul className="tabs tabs-boxed mb-1">{renderSizes}</ul>
            <ul className="tabs tabs-boxed">{renderDough}</ul>
          </div>
          <div className="card-actions items-center justify-between">
            <h4 className="font-bold">15 USD</h4>
            <button type="button" className="btn-primary btn">
              {t('add to cart')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
