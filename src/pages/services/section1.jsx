import { Link } from "react-router-dom";

const Section1 = ({
  title,
  desc,
  buttonText,
  buttonLink,
  image
}) => {
  return <section className="bg-white">
    <div className="max-width-container py-12 px-4 mb-16 flex mobile:flex-col laptop:flex-row items-center">
      <div className="flex-1 mobile:text-center laptop:text-left">
        <h6 className="text-blue-600 uppercase font-semibold mb-3">Industry Types</h6>
        <h2 className="h2">{title}</h2>
        <p className="p mb-8">{desc}</p>
        <Link to={buttonLink}>
          <button className="button-primary">
            {buttonText}
          </button>
        </Link>
      </div>
      <div className="flex-1 laptop:flex justify-end mobile:hidden">
        <img src={image} alt="icons" className="max-w-lg w-full" />
      </div>

    </div>

  </section>
}

export default Section1;