import { useEffect } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Appointment from "./pages/Appointment";
import ContactUs from "./pages/ContactUs";
import Lawyer from "./pages/Lawyer";
import Search from "./pages/Search"; // Import the Search component
import Footer from "./components/Footer"; // Import the Footer component
import FrameComponent10 from "./components/FrameComponent10"; // Import the navigation component

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
    <div className="app">
      <FrameComponent10 /> {/* Add the navigation component here */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/lawyer" element={<Lawyer />} />
        <Route path="/search" element={<Search />} /> {/* Add the Search route here */}
      </Routes>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
}

export default App;
