import Pizza from '../assets/Margarita.jpg'

export const PizzaItem = () => {
  return (
    <div className="card w-full bg-secondary p-2 md:w-1/2 lg:w-1/4">
      <img src={Pizza} alt="Pizza" />
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn-primary btn">Buy Now</button>
        </div>
      </div>
    </div>
  )
}
