import { useState } from "react";
import heroImg from "../public/images/Hero.jpg";
import HeroContent from "./HeroContent";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    people: "",
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

    const whatsappNumber = "7018212275"; // YOUR WHATSAPP NUMBER

    const whatsappMessage = `
🌄 *New Trip Enquiry*

👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email}
👥 *People:* ${formData.people}

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
      className="relative min-h-screen overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Decorative Blur */}
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-[120px]" />

      {/* Hero Content */}
      <div className="relative z-20 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-32 md:pt-36">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <HeroContent />

            {/* Right Contact Form */}
            <div className="w-full lg:flex lg:justify-end">
              <div className="w-full max-w-[480px] rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
                <div className="mb-6">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-300">
                    Plan Your Trip
                  </p>

                  <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    Get in Touch
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-gray-300">
                    Tell us about your trip and we'll help you plan the perfect
                    Manali experience.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-white">
                      Your Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3.5 text-white placeholder:text-gray-400 outline-none transition focus:border-cyan-400 focus:bg-white/15 focus:ring-2 focus:ring-cyan-400/20"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-white">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Enter your phone number"
                      className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3.5 text-white placeholder:text-gray-400 outline-none transition focus:border-cyan-400 focus:bg-white/15 focus:ring-2 focus:ring-cyan-400/20"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-white">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3.5 text-white placeholder:text-gray-400 outline-none transition focus:border-cyan-400 focus:bg-white/15 focus:ring-2 focus:ring-cyan-400/20"
                    />
                  </div>

                  {/* People */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-white">
                      Number of People
                    </label>

                    <select
                      name="people"
                      value={formData.people}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3.5 text-gray-300 outline-none transition focus:border-cyan-400 focus:bg-white/15 focus:ring-2 focus:ring-cyan-400/20"
                    >
                      <option value="" disabled className="text-black">
                        Select people
                      </option>

                      <option value="1 Person" className="text-black">
                        1 Person
                      </option>

                      <option value="2 People" className="text-black">
                        2 People
                      </option>

                      <option value="3–5 People" className="text-black">
                        3–5 People
                      </option>

                      <option value="6–10 People" className="text-black">
                        6–10 People
                      </option>

                      <option value="10+ People" className="text-black">
                        10+ People
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-white">
                      Message
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="3"
                      required
                      placeholder="Tell us about your trip..."
                      className="w-full resize-none rounded-xl border border-white/20 bg-white/10 px-4 py-3.5 text-white placeholder:text-gray-400 outline-none transition focus:border-cyan-400 focus:bg-white/15 focus:ring-2 focus:ring-cyan-400/20"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 font-semibold text-white shadow-lg transition duration-300 hover:scale-[1.02] hover:shadow-cyan-500/25"
                  >
                    Send Enquiry
                    <FaArrowRight className="transition group-hover:translate-x-1" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
