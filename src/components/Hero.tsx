import { ArrowDown } from '../assets/icons-svg'
import HeroImg from '../assets/img_7.png'

export const Hero = () => {
  const heroText = {
    title: 'Italian-Inspired Pizza with a Contemporary Twist',
    button: 'order delivery',
    description:
      'Experience a new take on Italian-style pizza with our contemporary twist on classic recipes. Made with only the freshest ingredients and hand-crafted for maximum flavor, our pizza is delivered straight to your door. Order now and discover the delicious possibilities!',
  }

  const handleClickScroll = () => {
    const element = document.getElementById('pizza-list')
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="container hero mx-auto min-h-[60vh] py-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={HeroImg} className="max-w-sm" />
        <div>
          <h1 className="text-5xl font-bold">{heroText.title}</h1>
          <p className="py-6">{heroText.description}</p>
          <button onClick={handleClickScroll} className="btn-primary btn">
            {heroText.button}
            <span className="ml-3">
              <ArrowDown />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
