import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import PopularTours from "./components/PopularTours.jsx";
import PopularDestinations from "./components/PopularDestinations.jsx";
import Contact from "./components/Contact.jsx";
import Feedback from "./components/Feedback.jsx";
import Footer from "./components/Footer.jsx";
import TourDetails from "./components/TourDetails.jsx";

import { tours } from "./data/tourData";
import ScrollToTop from "./components/ScrollToTop.jsx";

const Home = () => {
  return (
    <>
      <Hero />
      <PopularTours />
      <PopularDestinations />
      <Contact />
      <Feedback />
    </>
  );
};

/*
  Route se slug lenge
  aur uske basis par correct tour find karenge.
*/
const TourDetailsPage = () => {
  const { slug } = useParams();

  const tour = tours.find((item) => item.slug === slug);

  return <TourDetails tour={tour} />;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/tour/:slug" element={<TourDetailsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
