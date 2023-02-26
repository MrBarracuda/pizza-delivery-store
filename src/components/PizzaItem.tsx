import clsx from 'clsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import type { Pizza } from './PizzaList'

const typeNames = ['thin', 'thick']
const sizesNames = ['small', 'medium', 'large']

export const PizzaItem = ({ id, title, imageUrl, price, sizes, types, ingredients }: Pizza) => {
  // TODO Category, rating search, loading button onClick
  const [activeSize, setActiveSize] = useState(0)
  const [activeType, setActiveType] = useState(0)
  const isLoading = false

  const renderSizes = sizes.map((item) => (
    <button
      type="button"
      key={item}
      onClick={() => setActiveSize(item)}
      className={`tab flex-1 ${activeSize === item ? 'tab-active' : ''}`}
    >
      {sizesNames[item]}
    </button>
  ))

  const renderTypes = types.map((item) => (
    <button
      type="button"
      key={item}
      onClick={() => setActiveType(item)}
      className={`tab flex-1 ${activeType === item ? 'tab-active' : ''}`}
    >
      {typeNames[item]}
    </button>
  ))

  const handleClick = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      type: typeNames[activeType],
      size: sizesNames[activeSize],
      count: 0,
    } as const
    console.debug(item)
  }

  return (
    <div className="card-compact w-full p-2 md:w-1/2 lg:w-1/3 xl:w-1/4">
      <div className="base-content rounded-md p-2 shadow-md">
        <Link key={id} to={`pizzas/${id}`}>
          <img src={imageUrl} className="rounded-md" alt="Pizza" />
        </Link>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{ingredients}</p>
          <div className="base-100 my-1 rounded-md font-bold">
            <div className="tabs tabs-boxed mb-1">{renderSizes}</div>
            <div className="tabs tabs-boxed">{renderTypes}</div>
          </div>
          <div className="card-actions items-center justify-between">
            <h4 className="text-lg font-bold">${price}</h4>
            {/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */}
            <button onClick={handleClick} type="button" className={clsx('btn-primary btn', isLoading && 'loading')}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
