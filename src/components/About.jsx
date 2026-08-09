import {
  FaArrowRight,
  FaCheckCircle,
  FaMountain,
  FaUsers,
  FaMapMarkedAlt,
} from "react-icons/fa";
import manali from "../public/images/manali.jpg";
import spiti from "../public/images/spiti.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Main Content */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* ========================= */}
          {/* LEFT - IMAGE SECTION */}
          {/* ========================= */}

          <div className="relative">
            {/* Main Image */}
            <div className="group relative overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src={manali}
                alt="Beautiful mountains of Manali"
                className="h-[550px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Small Floating Image */}
            <div className="absolute -bottom-10 -right-6 hidden w-52 overflow-hidden rounded-3xl border-8 border-white shadow-2xl sm:block">
              <img
                src={spiti}
                alt="Manali valley"
                className="h-44 w-full object-cover"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute left-6 top-6 flex items-center gap-4 rounded-2xl border border-white/30 bg-white/20 px-5 py-4 shadow-xl backdrop-blur-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                <FaMountain className="text-xl" />
              </div>

              <div>
                <p className="text-2xl font-bold text-white">5+</p>

                <p className="text-sm text-white/90">Years Experience</p>
              </div>
            </div>

            {/* Floating Rating */}
            <div className="absolute bottom-6 left-6 rounded-2xl bg-white px-5 py-4 shadow-xl">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-gray-900">4.9</span>

                <span className="text-yellow-500">★★★★★</span>
              </div>

              <p className="mt-1 text-xs text-gray-500">
                Trusted by 500+ travelers
              </p>
            </div>
          </div>

          {/* ========================= */}
          {/* RIGHT - CONTENT */}
          {/* ========================= */}

          <div>
            {/* Section Badge */}
            <span className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
              About Manali Tour & Travel
            </span>

            {/* Heading */}
            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
              Your Journey Begins
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                With Us
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We are passionate about creating unforgettable travel experiences
              across the beautiful landscapes of Himachal Pradesh. From peaceful
              mountain valleys to thrilling adventures, we help you discover the
              best of Manali and beyond.
            </p>

            <p className="mt-5 leading-7 text-gray-500">
              Whether you are planning a family vacation, a romantic getaway, an
              adventure with friends, or a group trip, our team is here to make
              your journey comfortable, memorable, and hassle-free.
            </p>

            {/* Features */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-xl text-blue-600" />

                <span className="font-medium text-gray-700">
                  Customized Tour Packages
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-xl text-blue-600" />

                <span className="font-medium text-gray-700">
                  Comfortable Transportation
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-xl text-blue-600" />

                <span className="font-medium text-gray-700">
                  Trusted Local Support
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-xl text-blue-600" />

                <span className="font-medium text-gray-700">
                  Affordable Packages
                </span>
              </div>
            </div>

            {/* Statistics */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-gray-200 pt-8">
              <div>
                <div className="flex items-center gap-2">
                  <FaUsers className="text-blue-600" />

                  <h3 className="text-2xl font-bold text-gray-900">500+</h3>
                </div>

                <p className="mt-1 text-sm text-gray-500">Happy Travelers</p>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <FaMapMarkedAlt className="text-blue-600" />

                  <h3 className="text-2xl font-bold text-gray-900">50+</h3>
                </div>

                <p className="mt-1 text-sm text-gray-500">Tour Packages</p>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <FaMountain className="text-blue-600" />

                  <h3 className="text-2xl font-bold text-gray-900">20+</h3>
                </div>

                <p className="mt-1 text-sm text-gray-500">Destinations</p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <button className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                Discover More
                <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
