import { FaArrowRight, FaStar } from "react-icons/fa";

const HeroContent = () => {
  return (
    <div>
      {/* Badge */}
      <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
        <FaStar className="mr-2 text-yellow-400" />
        Trusted by 500+ Happy Travelers
      </div>

      {/* Heading */}
      <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-7xl">
        Discover the
        <span className="block bg-linear-to-r from-cyan-200 to-blue-500 bg-clip-text text-transparent">
          Beauty of Manali
        </span>
      </h1>

      {/* Description */}
      <p className="mt-5 max-w-xl text-base leading-7 text-gray-200 sm:text-lg sm:leading-8">
        Experience breathtaking mountains, snowy valleys, luxury hotels,
        thrilling adventures, and unforgettable journeys with our customized
        Himachal tour packages.
      </p>

      {/* Button */}
      <div className="mt-8 flex flex-wrap gap-5">
        <a
          href="#popularTours"
          className="group flex cursor-pointer items-center gap-3 rounded-full bg-linear-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-xl transition duration-300 hover:scale-105"
        >
          Explore Tours
          <FaArrowRight className="transition group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default HeroContent;
