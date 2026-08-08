import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaArrowRight,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= NEWSLETTER ================= */}
        <div className="border-b border-white/10 py-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Text */}
            <div className="max-w-xl">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-cyan-400" />

                <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                  Stay Inspired
                </span>
              </div>

              <h2 className="text-3xl font-black leading-tight sm:text-4xl">
                Get travel inspiration
                <span className="block text-cyan-400">
                  straight to your inbox.
                </span>
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
                Get exclusive travel deals, hidden gems, and the latest Himachal
                travel inspiration.
              </p>
            </div>

            {/* Newsletter Form */}
            <form className="w-full max-w-xl">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="min-h-[52px] flex-1 rounded-xl border border-white/10 bg-white/5 px-5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:bg-white/10"
                />

                <button
                  type="submit"
                  className="group flex min-h-[52px] items-center justify-center gap-3 rounded-xl bg-cyan-400 px-6 font-bold text-slate-950 transition duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
                >
                  Subscribe
                  <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
                </button>
              </div>

              <p className="mt-3 text-xs text-slate-500">
                No spam. Just beautiful destinations and useful travel tips.
              </p>
            </form>
          </div>
        </div>

        {/* ================= MAIN FOOTER ================= */}
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <a href="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-cyan-400 to-blue-600 text-xl font-black text-white shadow-lg shadow-cyan-500/20">
                M
              </div>

              <div>
                <h2 className="text-xl font-black tracking-wide">MANALI</h2>

                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-cyan-400">
                  Travel & Tours
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
              Discover the breathtaking beauty of Manali and Himachal Pradesh
              with carefully crafted travel experiences, comfortable stays,
              thrilling adventures, and unforgettable memories.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Explore
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-sm text-slate-400 transition hover:text-cyan-400"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#tours"
                  className="text-sm text-slate-400 transition hover:text-cyan-400"
                >
                  Our Tours
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-sm text-slate-400 transition hover:text-cyan-400"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#gallery"
                  className="text-sm text-slate-400 transition hover:text-cyan-400"
                >
                  Gallery
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-sm text-slate-400 transition hover:text-cyan-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Destinations
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition hover:text-cyan-400"
                >
                  Manali
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition hover:text-cyan-400"
                >
                  Solang Valley
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition hover:text-cyan-400"
                >
                  Rohtang Pass
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition hover:text-cyan-400"
                >
                  Kasol
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition hover:text-cyan-400"
                >
                  Shimla
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-5">
              {/* Phone */}
              <div className="flex gap-3">
                <FaPhoneAlt className="mt-1 shrink-0 text-sm text-cyan-400" />

                <div>
                  <a
                    href="tel:+919876543210"
                    className=" block text-sm text-slate-300 transition hover:text-cyan-400"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3">
                <FaEnvelope className="mt-1 shrink-0 text-sm text-cyan-400" />

                <div>
                  <a
                    href="mailto:hello@manalitours.com"
                    className=" block text-sm text-slate-300 transition hover:text-cyan-400"
                  >
                    hello@manalitours.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-sm text-cyan-400" />

                <div>
                  <p className="text-sm leading-6 text-slate-300">
                    Mall Road,
                    <br />
                    Manali, Himachal Pradesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-xs text-slate-500 sm:text-sm">
            © 2026 Manali Travel & Tours. All rights reserved.
          </p>

          <div className="flex items-center justify-center gap-6">
            <a
              href="#"
              className="text-xs text-slate-500 transition hover:text-cyan-400 sm:text-sm"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-xs text-slate-500 transition hover:text-cyan-400 sm:text-sm"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
