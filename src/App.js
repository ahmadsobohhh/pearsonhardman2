import React, { useEffect } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Appointment from "./pages/Appointment";
import AppointmentConfirmation from "./pages/AppointmentConfirmation";
import ContactUs from "./pages/ContactUs";
import Lawyer from "./pages/Lawyer";
import Search from "./pages/Search";
import Footer from "./components/Footer";
import FrameComponent10 from "./components/FrameComponent10";
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Homepage";
        metaDescription = "Welcome to the homepage.";
        break;
      case "/appointment":
        title = "Appointment";
        metaDescription = "Book an appointment.";
        break;
      case "/appointment-confirmation":
        title = "Appointment Confirmation";
        metaDescription = "Your appointment is confirmed.";
        break;
      case "/contact-us":
        title = "Contact Us";
        metaDescription = "Get in touch with us.";
        break;
      case "/lawyer":
        title = "Lawyer";
        metaDescription = "Meet our lawyers.";
        break;
      case "/search":
        title = "Search";
        metaDescription = "Search our site.";
        break;
      default:
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector('head > meta[name="description"]');
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <LanguageProvider>
      <div className="app">
        <FrameComponent10 />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/appointment-confirmation" element={<AppointmentConfirmation />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/lawyer" element={<Lawyer />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
