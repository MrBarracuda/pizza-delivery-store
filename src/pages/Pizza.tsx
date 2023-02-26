import { useParams } from 'react-router-dom'

import { Rating } from '../common/Rating'
import { usePizzasQuery } from '../features/pizza-block/usePizzasQuery'

import type { Pizza } from '../features/pizza-block/usePizzasQuery'

export const PizzaDetails = () => {
  const { id } = useParams()
  const { data, isLoading, isSuccess } = usePizzasQuery()
  const pizza = isSuccess ? (data.find((item) => item.id.toString() === id) as Pizza) : ({} as Pizza)
  // const pizza = isSuccess && (
  //   <div>
  //     <h1>{data.title}</h1>
  //     <img src={data.imageUrl} alt="asd" />
  //   </div>
  // )

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <section className="overflow-hidden">
      <div className="container mx-auto px-5 py-24">
        <div className="mx-auto flex flex-wrap lg:w-4/5">
          <img
            alt={pizza.title}
            className="h-64 w-full rounded object-cover object-center lg:h-auto lg:w-1/2"
            src={pizza.imageUrl}
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
            <h1 className="title-font mb-1 text-3xl font-medium text-gray-900">{pizza.title}</h1>
            <Rating rating={pizza.rating} />
            <p className="leading-relaxed">{pizza.ingredients}</p>
            <div className="mt-6 mb-5 flex items-center border-b-2 border-gray-100 pb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button type="button" className="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none" />
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  type="button"
                  className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"
                />
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  type="button"
                  className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-indigo-500 focus:outline-none"
                />
              </div>
              <div className="ml-6 flex items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font text-2xl font-medium text-gray-900">${pizza.price}</span>
              <button
                type="button"
                className="ml-auto flex rounded border-0 bg-indigo-500 py-2 px-6 text-white hover:bg-indigo-600 focus:outline-none"
              >
                Add to Cart
              </button>
              <button
                type="button"
                className="ml-4 inline-flex h-10 w-10 items-center justify-center rounded-full border-0 bg-gray-200 p-0 text-gray-500"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
