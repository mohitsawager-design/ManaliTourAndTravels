import { FaArrowRight, FaPlay, FaStar } from "react-icons/fa";

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

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap gap-5">
        <button
          type="button"
          className="group flex cursor-pointer items-center gap-3 rounded-full bg-linear-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-xl transition duration-300 hover:scale-105"
        >
          Explore Tours
          <FaArrowRight className="transition group-hover:translate-x-1" />
        </button>

        <button
          type="button"
          className="flex cursor-pointer items-center gap-3 rounded-full border border-white/40 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-black"
        >
          <FaPlay />
          Watch Video
        </button>
      </div>

      {/* Statistics */}
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
        <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-center backdrop-blur-xl sm:p-6">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">500+</h2>

          <p className="mt-2 text-sm text-gray-300 sm:text-base">
            Happy Travelers
          </p>
        </div>

        <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-center backdrop-blur-xl sm:p-6">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">50+</h2>

          <p className="mt-2 text-sm text-gray-300 sm:text-base">
            Tour Packages
          </p>
        </div>

        <div className="col-span-2 rounded-2xl border border-white/20 bg-white/10 p-4 text-center backdrop-blur-xl sm:col-span-1 sm:p-6">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">4.9★</h2>

          <p className="mt-2 text-sm text-gray-300 sm:text-base">
            Customer Rating
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-10 flex items-center gap-3 text-white">
        <span className="text-sm uppercase tracking-widest">Scroll</span>

        <div className="flex h-10 w-6 justify-center rounded-full border border-white">
          <div className="mt-2 h-2 w-2 animate-bounce rounded-full bg-white" />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
