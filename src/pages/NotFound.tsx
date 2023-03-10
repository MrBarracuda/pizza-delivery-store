// import SadPizza from '../assets/img_7.png'

export const NotFound = () => (
  <div className="flex h-[92vh] w-screen items-center">
    <div className="container flex flex-col items-center justify-center px-5 text-gray-700 md:flex-row">
      <div className="max-w-md">
        <div className="font-dark text-5xl font-bold">404</div>
        <p className="text-2xl font-light leading-normal md:text-3xl">Sorry we could not find this page. </p>
        <p className="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
        <a href="/" className="btn-primary btn">
          back to homepage
        </a>
        {/* <img height="250px" width="250px" src={SadPizza} alt="Not Found image" /> */}
      </div>
    </div>
  </div>
)
