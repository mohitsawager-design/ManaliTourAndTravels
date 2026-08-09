import { FaMapMarkerAlt, FaHeart, FaArrowRight } from "react-icons/fa";

import { Link } from "react-router-dom";

import { couplePackages } from "../data/coupleData";

const CouplePackages = () => {
  return (
    <section className="bg-rose-50/40 px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-500">
            <FaHeart />
            Romantic Getaways
          </div>

          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl">
            Couple Packages
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-500 sm:text-lg">
            Escape together, explore together, and create beautiful memories
            with our specially curated Himachal couple packages.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {couplePackages.map((pkg) => (
            <div
              key={pkg.id}
              className="group relative h-[430px] overflow-hidden rounded-3xl shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <img
                src={pkg.image}
                alt={pkg.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-rose-950/90 via-rose-900/20 to-transparent" />

              {/* Tag */}
              <span className="absolute left-5 top-5 rounded-full bg-rose-500 px-3 py-1.5 text-xs font-semibold text-white shadow-md">
                {pkg.tag}
              </span>

              {/* Heart */}
              <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-rose-500 shadow-md backdrop-blur-sm">
                <FaHeart />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {/* Location */}
                <div className="flex items-center gap-2 text-sm font-medium text-rose-200">
                  <FaMapMarkerAlt />
                  {pkg.location}
                </div>

                {/* Package Name */}
                <h3 className="mt-2 text-2xl font-bold text-white">
                  {pkg.title}
                </h3>

                {/* Duration */}
                <p className="mt-2 text-sm text-gray-200">{pkg.duration}</p>

                {/* Price + Arrow */}
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-rose-200">
                      Starting From
                    </p>

                    <p className="mt-1 text-2xl font-bold text-white">
                      {pkg.price}
                    </p>
                  </div>

                  <Link
                    to={`/couple/${pkg.slug}`}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-rose-500 text-white transition duration-300 hover:bg-rose-600"
                    aria-label={`View ${pkg.title}`}
                  >
                    <FaArrowRight className="transition group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Explore Button */}
                <Link
                  to={`/couple/${pkg.slug}`}
                  className="mt-4 flex w-full items-center justify-center rounded-xl bg-white py-3 font-semibold text-rose-500 transition duration-300 hover:bg-rose-500 hover:text-white"
                >
                  Explore Package
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CouplePackages;
