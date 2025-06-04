import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Join from "./components/Join";

import Services from "./Pages/Services";
import OurWorks from "./Pages/OurWorks";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";

import ChatBot from "./Pages/ChatBot"; 

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen bg-zinc-900 text-white relative">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Marquee />
                <About />
                <Eyes />
                <Featured />
                <Cards />
                <Join />
              </>
            }
          />

          <Route path="/services" element={<Services />} />
          <Route path="/ourworks" element={<OurWorks />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />

        {/* ChatBot added here to be present on all pages */}
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;
