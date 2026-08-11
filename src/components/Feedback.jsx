import { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaStar,
  FaQuoteLeft,
  FaCheckCircle,
} from "react-icons/fa";

/* Google Multicolor Logo */
const GoogleLogo = ({ className = "h-6 w-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#4285F4"
      d="M21.35 12.27c0-.71-.06-1.4-.18-2.05H12v3.88h5.24a4.48 4.48 0 0 1-1.95 2.94v2.45h3.15c1.85-1.7 2.91-4.2 2.91-7.22Z"
    />

    <path
      fill="#34A853"
      d="M12 21.5c2.65 0 4.88-.88 6.51-2.38l-3.15-2.45c-.88.59-2 .94-3.36.94-2.57 0-4.75-1.74-5.53-4.08H3.22v2.53A9.84 9.84 0 0 0 12 21.5Z"
    />

    <path
      fill="#FBBC05"
      d="M6.47 13.53a5.91 5.91 0 0 1 0-3.06V7.94H3.22a9.5 9.5 0 0 0 0 8.12l3.25-2.53Z"
    />

    <path
      fill="#EA4335"
      d="M12 6.39c1.44 0 2.73.5 3.75 1.48l2.81-2.81C16.87 3.49 14.65 2.5 12 2.5a9.84 9.84 0 0 0-8.78 5.44l3.25 2.53C7.25 8.13 9.43 6.39 12 6.39Z"
    />
  </svg>
);

const Feedback = () => {
  const reviews = [
    {
      name: "Rahul Sharma",
      location: "Delhi, India",
      rating: 5,
      date: "2 weeks ago",
      review:
        "Amazing experience in Manali! Everything was perfectly planned from hotels to sightseeing. The team was very helpful throughout our trip.",
      avatar: "RS",
    },
    {
      name: "Priya Verma",
      location: "Mumbai, India",
      rating: 5,
      date: "1 month ago",
      review:
        "We had an unforgettable honeymoon in Manali. The hotel, cab service and itinerary were all excellent. Highly recommended!",
      avatar: "PV",
    },
    {
      name: "Amit Kapoor",
      location: "Chandigarh, India",
      rating: 5,
      date: "1 month ago",
      review:
        "One of the best travel experiences we have had. The entire trip was smooth and the team was always available whenever we needed help.",
      avatar: "AK",
    },
    {
      name: "Neha Singh",
      location: "Jaipur, India",
      rating: 5,
      date: "2 months ago",
      review:
        "Our Manali trip was absolutely beautiful. The itinerary was well planned and we got enough time to enjoy every place without feeling rushed.",
      avatar: "NS",
    },
    {
      name: "Karan Mehta",
      location: "Bangalore, India",
      rating: 5,
      date: "2 months ago",
      review:
        "Great service and very professional team. They helped us customize our entire Himachal trip according to our budget and preferences.",
      avatar: "KM",
    },
    {
      name: "Ananya Gupta",
      location: "Pune, India",
      rating: 5,
      date: "3 months ago",
      review:
        "Everything was smooth from booking to the end of the trip. The hotel and cab arrangements were excellent. Would definitely book again!",
      avatar: "AG",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);

  /* Responsive Slides */
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 768) {
        setVisibleSlides(1);
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(3);
      }
    };

    updateSlides();

    window.addEventListener("resize", updateSlides);

    return () => {
      window.removeEventListener("resize", updateSlides);
    };
  }, []);

  const maxIndex = Math.max(reviews.length - visibleSlides, 0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  /* Auto Slider */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section
      id="feedback"
      className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Background Decorations */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          {/* Google Badge */}
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-2.5 shadow-sm">
            <GoogleLogo className="h-6 w-6" />

            <span className="text-sm font-semibold text-slate-700">
              Google Reviews
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Loved by travelers.
            <span className="block text-cyan-600">
              Trusted by 500+ explorers.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Don&apos;t just take our word for it. See what travelers who have
            explored the mountains with us have to say.
          </p>
        </div>

        {/* ================= GOOGLE RATING ================= */}
        <div className="mx-auto mb-12 flex max-w-md flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_15px_50px_rgba(15,23,42,0.06)] sm:flex-row sm:gap-6">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center gap-3 sm:justify-start">
              <span className="text-5xl font-black text-slate-900">4.9</span>

              <div>
                <div className="flex gap-1 text-[#FBBC04]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <p className="mt-1 text-xs text-slate-500">
                  Based on 120+ reviews
                </p>
              </div>
            </div>
          </div>

          <div className="my-4 h-px w-full bg-slate-200 sm:my-0 sm:h-12 sm:w-px" />

          <div className="flex items-center gap-3">
            <GoogleLogo className="h-8 w-8" />

            <div>
              <p className="font-bold text-slate-900">Google</p>

              <p className="text-xs text-slate-500">Excellent Rating</p>
            </div>
          </div>
        </div>

        {/* ================= SLIDER ================= */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="mb-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous reviews"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition duration-300 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white"
            >
              <FaArrowLeft />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next reviews"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition duration-300 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white"
            >
              <FaArrowRight />
            </button>
          </div>

          {/* Slider Window */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleSlides)
                }%)`,
              }}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="w-full shrink-0 px-2 md:w-1/2 lg:w-1/3"
                >
                  {/* Review Card */}
                  <div className="group relative h-full rounded-[1.75rem] border border-slate-200 bg-white p-6  transition duration-300 hover:-translate-y-2  sm:p-7">
                    {/* Quote */}
                    <div className="absolute right-6 top-6 text-3xl text-cyan-100">
                      <FaQuoteLeft />
                    </div>

                    {/* Reviewer */}
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-cyan-500 to-blue-600 font-bold text-white">
                        {review.avatar}
                      </div>

                      <div>
                        <div className="flex items-center gap-1">
                          <h3 className="font-bold text-slate-900">
                            {review.name}
                          </h3>

                          <FaCheckCircle className="text-sm text-cyan-500" />
                        </div>

                        <p className="text-xs text-slate-500">
                          {review.location}
                        </p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="mt-5 flex items-center justify-between">
                      <div className="flex gap-1 text-[#FBBC04]">
                        {[...Array(review.rating)].map((_, starIndex) => (
                          <FaStar key={starIndex} className="text-sm" />
                        ))}
                      </div>

                      <span className="text-xs text-slate-400">
                        {review.date}
                      </span>
                    </div>

                    {/* Review */}
                    <p className="mt-5 text-[15px] leading-7 text-slate-600">
                      &quot;{review.review}&quot;
                    </p>

                    {/* Google */}
                    <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-5">
                      <GoogleLogo className="h-4 w-4" />

                      <span className="text-xs font-medium text-slate-400">
                        Posted on Google
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to review slide ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-8 bg-cyan-500"
                    : "w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl bg-slate-900 px-6 py-7 text-center sm:flex-row sm:px-8 sm:text-left">
          <div>
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Ready to create your own story?
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Join hundreds of travelers who explored Himachal with us.
            </p>
          </div>

          <a href="#popularDestinations">
            <button
              type="button"
              className="hover:cursor-pointer group flex shrink-0 items-center gap-3 rounded-xl bg-cyan-400 px-6 py-3.5 font-bold text-slate-900 transition duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              Explore Tours
              <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
