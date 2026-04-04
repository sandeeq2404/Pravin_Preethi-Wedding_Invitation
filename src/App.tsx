import { useState } from "react";
import { motion } from "framer-motion";

import HeroSection from "./components/HeroSection";
import CountdownTimer from "./components/CountdownTimer";
import EventsSection from "./components/EventsSection";
import MapSection from "./components/MapSection";
import EnvelopeLanding from "./components/EnvelopeLanding";
import ScratchReveal from "./components/ScratchReveal"


function App() {
  const [entered, setEntered] = useState(false); // ✅ FIX

  return (
    <div className="bg-[#f5efe6] text-gray-800">

      {/* LANDING */}
      {!entered && (
        <EnvelopeLanding onOpen={() => setEntered(true)} />
      )}

      {/* MAIN CONTENT (ONLY AFTER OPEN) */}
      {entered && (
        <>
          <HeroSection />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <ScratchReveal />
            <CountdownTimer />
            <EventsSection />
            <MapSection />

            {/* FOOTER */}
            <footer className="bg-[#0f3d3e] text-white py-12 px-6 text-center">
              <h3 className="text-4xl font-script text-amber-200 mb-4">
                L. Preethi & S. Pravin Bala
              </h3>

              <p className="text-teal-100 mb-6 font-serif">
                We look forward to celebrating with you
              </p>

              <p className="text-sm text-teal-200">
                20th April 2026
            
              </p>
            </footer>
          </motion.div>
        </>
      )}

    </div>
  );
}

export default App;