import React from "react";
import { Link } from "react-router-dom";

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

const TourDetails = ({ tour, isCouple = false }) => {
  /* ================================================= */
  /* NOT FOUND */
  /* ================================================= */

  if (!tour) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <div className="text-center">
          <h1 className="text-4xl font-black text-slate-900">
            {isCouple ? "Couple Package Not Found" : "Tour Not Found"}
          </h1>

          <p className="mt-3 text-slate-500">
            Sorry, the {isCouple ? "couple package" : "tour"} you are looking
            for does not exist.
          </p>

          <Link
            to="/"
            className={`mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white transition ${
              isCouple
                ? "bg-[#6f3543] hover:bg-[#5d2b37]"
                : "bg-gradient-to-r from-blue-600 to-cyan-500"
            }`}
          >
            <FaArrowLeft />

            {isCouple ? "Back to Couple Packages" : "Back to Tours"}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section
        className={`relative min-h-[620px] overflow-hidden ${
          isCouple ? "bg-[#6f4a52]" : "bg-slate-950"
        }`}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={tour.image}
            alt={tour.title}
            className="h-full w-full object-cover opacity-90"
          />

          {/* Light Couple Overlay */}
          <div
            className={`absolute inset-0 ${
              isCouple
                ? "bg-gradient-to-r from-[#3d252b]/45 via-[#3d252b]/15 to-transparent"
                : "bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-slate-950/20"
            }`}
          />

          {/* Bottom Gradient */}
          <div
            className={`absolute inset-0 ${
              isCouple
                ? "bg-gradient-to-t from-[#3d252b]/65 via-transparent to-transparent"
                : "bg-gradient-to-t from-slate-950 via-transparent to-transparent"
            }`}
          />

          {/* Subtle Light Tint */}
          {isCouple && <div className="absolute inset-0 bg-[#d6aeb5]/5" />}
        </div>

        {/* Hero Content */}
        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-8">
          {/* Back Button */}
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-5 py-2.5 text-sm font-medium text-white shadow-lg backdrop-blur-md transition hover:bg-white hover:text-slate-900"
          >
            <FaArrowLeft />

            {isCouple ? "Back to Couple Packages" : "Back to Tours"}
          </Link>

          <div className="max-w-3xl">
            {/* Rating Badge */}
            <div
              className={`mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium shadow-lg backdrop-blur-md ${
                isCouple
                  ? "border-white/30 bg-[#6f3543]/40 text-[#f3dfe3]"
                  : "border-cyan-300/30 bg-cyan-400/10 text-cyan-200"
              }`}
            >
              <FaStar className="text-yellow-400" />

              {tour.rating}

              {isCouple ? " Rated Package" : " Rated Tour"}
            </div>

            {/* Title */}
            <h1 className="text-4xl font-black leading-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl">
              {tour.title}
            </h1>

            {/* Meta */}
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white">
              {/* Location */}
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt
                  className={isCouple ? "text-[#e0b5bd]" : "text-cyan-400"}
                />

                {tour.location}
              </div>

              {/* Duration */}
              <div className="flex items-center gap-2">
                <FaClock
                  className={isCouple ? "text-[#e0b5bd]" : "text-cyan-400"}
                />

                {tour.duration}
              </div>

              {/* Travelers */}
              <div className="flex items-center gap-2">
                <FaUsers
                  className={isCouple ? "text-[#e0b5bd]" : "text-cyan-400"}
                />

                {tour.travelers}
              </div>
            </div>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/90 drop-shadow sm:text-lg">
              {tour.description}
            </p>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* ================================================= */}
            {/* LEFT CONTENT */}
            {/* ================================================= */}

            <div className="space-y-8 lg:col-span-2">
              {/* ================= OVERVIEW ================= */}

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                  <div>
                    <p
                      className={`text-sm font-semibold uppercase tracking-wider ${
                        isCouple ? "text-[#8f4a59]" : "text-cyan-600"
                      }`}
                    >
                      {isCouple ? "Couple Package Overview" : "Tour Overview"}
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-slate-900">
                      {tour.title}
                    </h2>
                  </div>

                  {/* Price */}
                  <div
                    className={`rounded-2xl px-6 py-4 text-white shadow-lg ${
                      isCouple
                        ? "bg-gradient-to-r from-[#8f4a59] to-[#6f3543]"
                        : "bg-gradient-to-r from-blue-600 to-cyan-500"
                    }`}
                  >
                    <p
                      className={
                        isCouple
                          ? "text-xs text-[#ead5d9]"
                          : "text-xs text-blue-100"
                      }
                    >
                      Starting From
                    </p>

                    <p className="text-2xl font-black">{tour.price}</p>

                    <p
                      className={
                        isCouple
                          ? "text-xs text-[#ead5d9]"
                          : "text-xs text-blue-100"
                      }
                    >
                      {tour.priceText}
                    </p>
                  </div>
                </div>

                {/* Info Cards */}
                <div className="mt-7 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                  <InfoCard
                    icon={<FaClock />}
                    title="Duration"
                    value={tour.duration}
                    blue={!isCouple}
                    rose={isCouple}
                  />

                  <InfoCard
                    icon={<FaUsers />}
                    title={isCouple ? "Package For" : "Group Size"}
                    value={tour.travelers}
                    blue={!isCouple}
                    rose={isCouple}
                  />

                  <InfoCard
                    icon={<FaHotel />}
                    title="Stay"
                    value={tour.stay}
                    blue={!isCouple}
                    rose={isCouple}
                  />

                  <InfoCard
                    icon={<FaUtensils />}
                    title="Meals"
                    value={tour.meals}
                    blue={!isCouple}
                    rose={isCouple}
                  />
                </div>
              </div>

              {/* ================= ITINERARY ================= */}

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="mb-8">
                  <p
                    className={`text-sm font-semibold uppercase tracking-wider ${
                      isCouple ? "text-[#8f4a59]" : "text-cyan-600"
                    }`}
                  >
                    Your Journey
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-slate-900">
                    {isCouple ? "Couple Package Itinerary" : "Tour Itinerary"}
                  </h2>
                </div>

                <div className="space-y-8">
                  {tour.itinerary?.map((day, index) => (
                    <div key={day.day} className="relative pl-14">
                      {/* Day Number */}
                      <div
                        className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white shadow-lg ${
                          isCouple
                            ? "bg-gradient-to-r from-[#8f4a59] to-[#6f3543]"
                            : "bg-gradient-to-r from-blue-600 to-cyan-500"
                        }`}
                      >
                        {day.day}
                      </div>

                      {/* Connecting Line */}
                      {index !== tour.itinerary.length - 1 && (
                        <div className="absolute left-5 top-10 h-full w-px bg-slate-200" />
                      )}

                      {/* Title */}
                      <h3 className="text-xl font-bold text-slate-900">
                        {day.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 leading-7 text-slate-600">
                        {day.description}
                      </p>

                      {/* Places */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {day.places?.map((place) => (
                          <span
                            key={place}
                            className={`rounded-full px-3 py-1 text-xs font-medium ${
                              isCouple
                                ? "bg-[#f5edef] text-[#6f3543]"
                                : "bg-cyan-50 text-cyan-700"
                            }`}
                          >
                            {place}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ================= INCLUSIONS ================= */}

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <p
                  className={`text-sm font-semibold uppercase tracking-wider ${
                    isCouple ? "text-[#8f4a59]" : "text-cyan-600"
                  }`}
                >
                  Package Details
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  What&apos;s Included
                </h2>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {tour.inclusions?.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
                    >
                      <FaCheckCircle
                        className={
                          isCouple
                            ? "shrink-0 text-[#8f4a59]"
                            : "shrink-0 text-cyan-500"
                        }
                      />

                      <span className="text-sm font-medium text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ================================================= */}
            {/* SIDEBAR */}
            {/* ================================================= */}

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

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      isCouple
                        ? "bg-[#f5edef] text-[#6f3543]"
                        : "bg-green-50 text-green-600"
                    }`}
                  >
                    {isCouple ? "Romantic" : "Popular"}
                  </span>
                </div>

                <div className="my-6 h-px bg-slate-200" />

                {/* Price */}
                <p className="text-sm text-slate-500">Package starts from</p>

                <div className="mt-1 flex items-end gap-2">
                  <span className="text-4xl font-black text-slate-900">
                    {tour.price}
                  </span>

                  <span className="mb-1 text-sm text-slate-500">
                    / {isCouple ? "couple" : "person"}
                  </span>
                </div>

                <p className="mt-2 text-xs text-slate-400">{tour.group}</p>

                {/* Booking */}
                <div className="mt-7 space-y-4">
                  {/* Travel Date */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Travel Date
                    </label>

                    <div className="relative">
                      <FaCalendarAlt
                        className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                          isCouple ? "text-[#8f4a59]" : "text-slate-400"
                        }`}
                      />

                      <input
                        type="date"
                        className={`w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:bg-white focus:ring-4 ${
                          isCouple
                            ? "focus:border-[#8f4a59] focus:ring-[#8f4a59]/10"
                            : "focus:border-cyan-500 focus:ring-cyan-500/10"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Number of Travelers - TOUR ONLY */}
                  {!isCouple && (
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
                  )}

                  {/* Book Button */}
                  <button
                    type="button"
                    className={`group flex w-full items-center justify-center gap-3 rounded-xl py-4 font-bold text-white shadow-lg transition duration-300 hover:scale-[1.02] ${
                      isCouple
                        ? "bg-gradient-to-r from-[#8f4a59] to-[#6f3543] shadow-[#6f3543]/20 hover:from-[#7d3f4d] hover:to-[#5d2b37]"
                        : "bg-gradient-to-r from-blue-600 to-cyan-500 shadow-blue-500/20"
                    }`}
                  >
                    {isCouple ? "Book Couple Package" : "Book This Tour"}

                    <FaArrowRight className="transition group-hover:translate-x-1" />
                  </button>
                </div>

                {/* Trust */}
                <div
                  className={`mt-6 rounded-2xl p-4 ${
                    isCouple ? "bg-[#f8f1f3]" : "bg-cyan-50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <FaCheckCircle
                      className={`mt-0.5 shrink-0 ${
                        isCouple ? "text-[#8f4a59]" : "text-cyan-600"
                      }`}
                    />

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
                  className={`mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-slate-600 transition ${
                    isCouple ? "hover:text-[#6f3543]" : "hover:text-cyan-600"
                  }`}
                >
                  <FaPlane
                    className={isCouple ? "text-[#8f4a59]" : "text-cyan-500"}
                  />
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

/* ================================================= */
/* INFO CARD */
/* ================================================= */

const InfoCard = ({ icon, title, value, blue = false, rose = false }) => {
  return (
    <div
      className={`rounded-2xl p-5 ${
        rose ? "bg-[#f8f1f3]" : blue ? "bg-blue-50" : "bg-cyan-50"
      }`}
    >
      <div
        className={`text-xl ${
          rose ? "text-[#8f4a59]" : blue ? "text-blue-600" : "text-cyan-600"
        }`}
      >
        {icon}
      </div>

      <p className="mt-3 text-xs text-slate-500">{title}</p>

      <p className="mt-1 font-bold text-slate-800">{value}</p>
    </div>
  );
};

export default TourDetails;
