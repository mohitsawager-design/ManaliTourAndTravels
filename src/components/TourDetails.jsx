import React from "react";
import { useParams, Link } from "react-router-dom";

import {
  FaArrowLeft,
  FaArrowRight,
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaHotel,
  FaMapMarkerAlt,
  FaPlane,
  FaStar,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";

import { tours } from "../data/tourData";

const TourDetails = ({ tour }) => {
  if (!tour) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <div className="text-center">
          <h1 className="text-4xl font-black text-slate-900">Tour Not Found</h1>

          <p className="mt-3 text-slate-500">
            Sorry, the tour you are looking for does not exist.
          </p>

          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white"
          >
            <FaArrowLeft />
            Back to Tours
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <img
            src={tour.image}
            alt={tour.title}
            className="h-full w-full object-cover opacity-60"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-slate-950/30" />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-32 lg:px-8">
          {/* Back */}
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white hover:text-slate-900"
          >
            <FaArrowLeft />
            Back to Tours
          </Link>

          <div className="max-w-3xl">
            {/* Rating */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 backdrop-blur-md">
              <FaStar className="text-yellow-400" />
              {tour.rating} Rated Tour
            </div>

            {/* Title */}
            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
              {tour.title}
            </h1>

            {/* Meta */}
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-cyan-400" />

                {tour.location}
              </div>

              <div className="flex items-center gap-2">
                <FaClock className="text-cyan-400" />

                {tour.duration}
              </div>

              <div className="flex items-center gap-2">
                <FaUsers className="text-cyan-400" />

                {tour.travelers}
              </div>
            </div>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              {tour.description}
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* LEFT */}
            <div className="space-y-8 lg:col-span-2">
              {/* Overview */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-cyan-600">
                      Tour Overview
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-slate-900">
                      {tour.title}
                    </h2>
                  </div>

                  <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 text-white">
                    <p className="text-xs text-blue-100">Starting From</p>

                    <p className="text-2xl font-black">{tour.price}</p>

                    <p className="text-xs text-blue-100">{tour.priceText}</p>
                  </div>
                </div>

                {/* Info */}
                <div className="mt-7 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                  <InfoCard
                    icon={<FaClock />}
                    title="Duration"
                    value={tour.duration}
                    blue
                  />

                  <InfoCard
                    icon={<FaUsers />}
                    title="Group Size"
                    value={tour.travelers}
                  />

                  <InfoCard
                    icon={<FaHotel />}
                    title="Stay"
                    value={tour.stay}
                    blue
                  />

                  <InfoCard
                    icon={<FaUtensils />}
                    title="Meals"
                    value={tour.meals}
                  />
                </div>
              </div>

              {/* Itinerary */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="mb-8">
                  <p className="text-sm font-semibold uppercase tracking-wider text-cyan-600">
                    Your Journey
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-slate-900">
                    Tour Itinerary
                  </h2>
                </div>

                <div className="space-y-8">
                  {tour.itinerary.map((day, index) => (
                    <div key={day.day} className="relative pl-14">
                      {/* Number */}
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-sm font-bold text-white shadow-lg">
                        {day.day}
                      </div>

                      {/* Line */}
                      {index !== tour.itinerary.length - 1 && (
                        <div className="absolute left-5 top-10 h-full w-px bg-slate-200" />
                      )}

                      <h3 className="text-xl font-bold text-slate-900">
                        {day.title}
                      </h3>

                      <p className="mt-3 leading-7 text-slate-600">
                        {day.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {day.places.map((place) => (
                          <span
                            key={place}
                            className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700"
                          >
                            {place}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-cyan-600">
                  Package Details
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  What&apos;s Included
                </h2>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {tour.inclusions.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
                    >
                      <FaCheckCircle className="shrink-0 text-cyan-500" />

                      <span className="text-sm font-medium text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ================= SIDEBAR ================= */}
            <div>
              <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                {/* Rating */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Customer Rating</p>

                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-2xl font-bold text-slate-900">
                        {tour.rating}
                      </span>

                      <div className="flex gap-1 text-yellow-400">
                        {[...Array(5)].map((_, index) => (
                          <FaStar key={index} />
                        ))}
                      </div>
                    </div>
                  </div>

                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                    Popular
                  </span>
                </div>

                <div className="my-6 h-px bg-slate-200" />

                {/* Price */}
                <p className="text-sm text-slate-500">Package starts from</p>

                <div className="mt-1 flex items-end gap-2">
                  <span className="text-4xl font-black text-slate-900">
                    {tour.price}
                  </span>

                  <span className="mb-1 text-sm text-slate-500">/ person</span>
                </div>

                <p className="mt-2 text-xs text-slate-400">{tour.group}</p>

                {/* Booking */}
                <div className="mt-7 space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Travel Date
                    </label>

                    <div className="relative">
                      <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                      <input
                        type="date"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Number of Travelers
                    </label>

                    <div className="relative">
                      <FaUsers className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                      <select
                        defaultValue="4"
                        className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                      >
                        <option value="4">4 Travelers</option>

                        <option value="5">5 Travelers</option>

                        <option value="6">6 Travelers</option>

                        <option value="7">7 Travelers</option>

                        <option value="8">8 Travelers</option>

                        <option value="10">10+ Travelers</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-bold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:scale-[1.02]"
                  >
                    Book This Tour
                    <FaArrowRight className="transition group-hover:translate-x-1" />
                  </button>
                </div>

                {/* Trust */}
                <div className="mt-6 rounded-2xl bg-cyan-50 p-4">
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="mt-0.5 shrink-0 text-cyan-600" />

                    <div>
                      <p className="text-sm font-bold text-slate-800">
                        Hassle-free booking
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Our travel experts will contact you to confirm your
                        booking and travel requirements.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <a
                  href="tel:+919876543210"
                  className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-cyan-600"
                >
                  <FaPlane className="text-cyan-500" />
                  Need help? Call +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const InfoCard = ({ icon, title, value, blue = false }) => {
  return (
    <div className={`rounded-2xl p-5 ${blue ? "bg-blue-50" : "bg-cyan-50"}`}>
      <div className={`text-xl ${blue ? "text-blue-600" : "text-cyan-600"}`}>
        {icon}
      </div>

      <p className="mt-3 text-xs text-slate-500">{title}</p>

      <p className="mt-1 font-bold text-slate-800">{value}</p>
    </div>
  );
};

export default TourDetails;
