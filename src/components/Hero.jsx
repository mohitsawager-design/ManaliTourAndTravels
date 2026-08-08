import Navbar from "./Navbar";
import heroImg from "../public/images/Hero.jpg";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen overflow-x-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-black/20" />

      {/* Decorative Blur */}
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-[120px]" />

      <Navbar />

      {/* Hero Content */}
      <div className="relative z-20 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-36 md:pt-40">
          <HeroContent />
        </div>
      </div>
    </section>
  );
};

export default Hero;
