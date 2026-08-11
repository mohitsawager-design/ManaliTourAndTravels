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
    <section
      id="popularTours"
      className="bg-[#eef7f8] px-4 py-20 sm:px-6 lg:px-8"
    >
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
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-500 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                {/* Rating */}
                <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-lg">
                  <FaStar className="text-yellow-500" />

                  <span className="font-semibold text-slate-800">
                    {tour.rating}
                  </span>
                </div>

                {/* Image Content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white">
                    {tour.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-sm text-white">
                    <FaMapMarkerAlt />

                    <span>{tour.location}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Price */}
                <div className="mb-4 flex items-center gap-3 rounded-xl bg-cyan-50 p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-100">
                    <span className="text-lg font-bold text-cyan-600">₹</span>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-cyan-600">
                      Starting From
                    </p>

                    <div className="flex items-baseline gap-2">
                      <span className="font-bold text-gray-800">
                        {tour.price}
                      </span>

                      <span className="text-xs font-medium text-gray-500">
                        {tour.priceText}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Group */}
                <div className="mb-4 flex items-center gap-3 rounded-xl bg-blue-50 p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <FaUsers className="text-blue-600" />
                  </div>

                  <span className="font-medium text-gray-700">
                    {tour.group}
                  </span>
                </div>

                {/* Duration */}
                <div className="mb-5 flex items-center gap-3 rounded-xl bg-cyan-50 p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-100">
                    <FaClock className="text-cyan-600" />
                  </div>

                  <span className="font-medium text-gray-700">
                    {tour.duration}
                  </span>
                </div>

                {/* View Details */}
                <Link
                  to={`/tour/${tour.slug}`}
                  className="group/btn flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-semibold text-white transition duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  View Details
                  <FaArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" />
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
