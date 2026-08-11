import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import PopularTours from "./components/PopularTours.jsx";
import PopularDestinations from "./components/PopularDestinations.jsx";
import Contact from "./components/Contact.jsx";
import Feedback from "./components/Feedback.jsx";
import Footer from "./components/Footer.jsx";
import TourDetails from "./components/TourDetails.jsx";
import About from "./components/About.jsx";
import CouplePackages from "./components/CouplePackages.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

import { tours } from "./data/tourData";
import { couplePackages } from "./data/coupleData";

/* ================= HOME ================= */

const Home = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <PopularTours />

      <PopularDestinations />

      <CouplePackages />

      <Contact />

      <Feedback />
    </>
  );
};

/* ================= NORMAL TOUR DETAILS ================= */

const TourDetailsPage = () => {
  const { slug } = useParams();

  const tour = tours.find((item) => item.slug === slug);

  return (
    <>
      <Navbar />

      <TourDetails tour={tour} isCouple={false} />
    </>
  );
};

/* ================= COUPLE PACKAGE DETAILS ================= */

const CoupleDetailsPage = () => {
  const { slug } = useParams();

  const tour = couplePackages.find((item) => item.slug === slug);

  return (
    <>
      <Navbar />

      <TourDetails tour={tour} isCouple={true} />
    </>
  );
};

/* ================= APP ================= */

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <WhatsAppButton />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Normal Tour */}
        <Route path="/tour/:slug" element={<TourDetailsPage />} />

        {/* Couple Package */}
        <Route path="/couple/:slug" element={<CoupleDetailsPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
