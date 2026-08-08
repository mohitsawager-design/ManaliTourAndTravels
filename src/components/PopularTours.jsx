import React from "react";
import {
  FaStar,
  FaUsers,
  FaClock,
  FaArrowRight,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import { tours } from "../data/tourData";

const PopularTours = () => {
  return (
    <section className="bg-[#eef7f8] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
            Popular Packages
          </span>

          <h2 className="mt-3 text-4xl font-black text-slate-900 sm:text-5xl">
            Explore Our Best Tours
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Discover unforgettable journeys through the breathtaking landscapes
            of Himachal Pradesh with our handpicked travel packages.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-500 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Price */}
                <div className="absolute left-5 top-5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2 font-bold text-white shadow-lg">
                  {tour.price}
                </div>

                {/* Rating */}
                <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow">
                  <FaStar className="text-yellow-500" />

                  <span className="font-semibold text-slate-800">
                    {tour.rating}
                  </span>
                </div>

                {/* Image Content */}
                <div className="absolute bottom-6 left-6">
                  <h3 className="py-2 text-2xl font-bold text-white">
                    {tour.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-white">
                    <FaMapMarkerAlt />

                    <span>{tour.location}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-5 p-7">
                <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4">
                  <FaUsers className="text-blue-600" />

                  <span className="font-medium text-gray-700">
                    {tour.group}
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-cyan-50 p-4">
                  <FaClock className="text-cyan-600" />

                  <span className="font-medium text-gray-700">
                    {tour.duration}
                  </span>
                </div>

                <Link
                  to={`/tour/${tour.slug}`}
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-semibold text-white transition hover:scale-[1.02]"
                >
                  View Details
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTours;
