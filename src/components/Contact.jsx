import { useState } from "react";
import {
  FaArrowRight,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    package: "",
    travelers: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp number
    const whatsappNumber = "7018212275";

    const whatsappMessage = `
🌄 *New Tour Enquiry*

👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email}
🏔️ *Tour Package:* ${formData.package}
👥 *Travelers:* ${formData.travelers}

💬 *Message:*
${formData.message}
    `;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#eef7f8] px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Decorative Background */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-cyan-300/30 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl" />

      {/* Decorative Circles */}
      <div className="absolute right-[12%] top-20 hidden h-32 w-32 rounded-full border border-cyan-500/10 lg:block" />
      <div className="absolute right-[14%] top-24 hidden h-24 w-24 rounded-full border border-blue-500/10 lg:block" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-500" />

            <span className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-600">
              Let&apos;s Connect
            </span>
          </div>

          <h2 className="text-4xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Your next
            <span className="text-cyan-600"> adventure </span>
            starts here.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Whether you&apos;re planning a peaceful mountain escape or an
            adventure-filled holiday, our team is ready to help you build the
            perfect Manali experience.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid gap-6 lg:grid-cols-5">
          {/* Left Contact Card */}
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 p-7 text-white sm:p-9 lg:col-span-2">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />

            <div className="relative">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-200">
                Travel With Us
              </span>

              <h3 className="mt-7 text-3xl font-bold leading-tight sm:text-4xl">
                Have a trip
                <span className="block text-cyan-300">in mind?</span>
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                Tell us where you want to go and we&apos;ll take care of the
                rest. From hotels to sightseeing, we&apos;ve got your journey
                covered.
              </p>

              {/* Contact Details */}
              <div className="mt-10 space-y-4">
                {/* Phone */}
                <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-slate-900">
                    <FaPhoneAlt className="text-sm" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-400">
                      Call Us
                    </p>

                    <p className="mt-1 font-semibold">+91 98765 43210</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-slate-900">
                    <FaEnvelope className="text-sm" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-400">
                      Email
                    </p>

                    <p className="mt-1 font-semibold">hello@manalitours.com</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-slate-900">
                    <FaMapMarkerAlt className="text-sm" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-400">
                      Location
                    </p>

                    <p className="mt-1 font-semibold">
                      Manali, Himachal Pradesh
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Badge */}
              <div className="mt-12 flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full border-2 border-slate-900 bg-cyan-300" />
                  <div className="h-8 w-8 rounded-full border-2 border-slate-900 bg-blue-400" />
                  <div className="h-8 w-8 rounded-full border-2 border-slate-900 bg-sky-200" />
                </div>

                <p className="text-sm text-slate-300">
                  <span className="font-semibold text-white">500+</span> happy
                  travelers
                </p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-9 lg:col-span-3">
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
                Start Planning
              </p>

              <h3 className="mt-2 text-3xl font-bold text-slate-900">
                Tell us about your trip
              </h3>

              <p className="mt-2 text-slate-500">
                Fill in the details and our travel expert will get back to you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Phone */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                />
              </div>

              {/* Package + Travelers */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Tour Package
                  </label>

                  <select
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-600 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                  >
                    <option value="" disabled>
                      Choose package
                    </option>

                    <option value="Manali Adventure Tour">
                      Manali Adventure Tour
                    </option>

                    <option value="Manali Local Sightseeing">
                      Manali Local Sightseeing
                    </option>

                    <option value="Solang Valley Adventure">
                      Solang Valley Adventure
                    </option>

                    <option value="Atal Tunnel & Sissu Tour">
                      Atal Tunnel & Sissu Tour
                    </option>

                    <option value="Kullu & Naggar Explorer">
                      Kullu & Naggar Explorer
                    </option>

                    <option value="Rohtang Pass Adventure">
                      Rohtang Pass Adventure
                    </option>

                    <option value="Manali Jispa Road Trip">
                      Manali Jispa Road Trip
                    </option>

                    <option value="Kasol & Manikaran Tour">
                      Kasol & Manikaran Tour
                    </option>

                    <option value="Kasol & Tosh Adventure">
                      Kasol & Tosh Adventure
                    </option>

                    <option value="Spiti Valley Adventure">
                      Spiti Valley Adventure
                    </option>

                    <option value="Manali to Leh Adventure">
                      Manali to Leh Adventure
                    </option>

                    <option value="Custom Package">Custom Package</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Travelers
                  </label>

                  <select
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-600 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                  >
                    <option value="" disabled>
                      Number of people
                    </option>

                    <option value="1 Person">1 Person</option>
                    <option value="2 People">2 People</option>
                    <option value="3 People">3 People</option>
                    <option value="4 People">4 People</option>
                    <option value="5 People">5 People</option>
                    <option value="6 People">6 People</option>
                    <option value="7 People">7 People</option>
                    <option value="8 People">8 People</option>
                    <option value="9 People">9 People</option>
                    <option value="10+ People">10+ People</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Tell Us More
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  placeholder="When are you planning to travel? What places would you like to visit?"
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-slate-900 px-6 py-4 font-semibold text-white transition duration-300 hover:bg-cyan-600 hover:shadow-xl hover:shadow-cyan-600/20"
              >
                Plan My Trip
                <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
              </button>

              <p className="text-center text-xs text-slate-400">
                No commitment required • Free travel consultation
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
