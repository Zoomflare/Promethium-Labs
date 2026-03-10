import { Suspense, lazy, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CursorProvider } from "./components/cursor/CursorContext.jsx";
import Cursor from "./components/cursor/Cursor.jsx";
import { useLenis } from "./hooks/useLenis.js";
import Nav from "./components/layout/Nav.jsx";
import Footer from "./components/layout/Footer.jsx";
import PageTransition from "./components/layout/PageTransition.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const ServicesPage = lazy(() => import("./pages/Services.jsx"));
const InternshipsPage = lazy(() => import("./pages/Internships.jsx"));
const AboutPage = lazy(() => import("./pages/About.jsx"));
const ContactPage = lazy(() => import("./pages/Contact.jsx"));

function App() {
  useLenis();
  const location = useLocation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <CursorProvider>
      <div 
        className="fixed top-0 left-0 h-[2px] bg-greenMid z-[100] transition-all duration-100 ease-out" 
        style={{ width: `${progress}%` }}
      />
      <Cursor />
      <Nav />
      <main className="pt-24">
        <AnimatePresence mode="wait">
          <Suspense fallback={null}>
            <PageTransition routeKey={location.pathname}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/internships" element={<InternshipsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </PageTransition>
          </Suspense>
        </AnimatePresence>
      </main>
      <Footer />
    </CursorProvider>
  );
}

export default App;
