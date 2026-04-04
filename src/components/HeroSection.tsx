import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {

  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(true);
      setTimeout(() => setShowHint(false), 4000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    // Changed bg-transparent to explicitly allow background colors/fades to work with your images
    <div className="relative h-screen flex flex-col md:flex-row items-center md:items-center justify-center text-center overflow-hidden bg-[#f5efe6]">

      {/* 🏙️ MOBILE BORDER IMAGE (Hidden on Desktop) */}
      <img
        src="/border.png"
        alt="mobile-border"
        className="
          absolute top-0 left-0 w-full h-full
          object-cover
          object-top
          pointer-events-none
          scale-[1.05]
          md:hidden
          z-10
        "
      />

      {/* 🖼️ NEW DESKTOP BANNER BACKGROUND (Hidden on Mobile) */}
      {/* Save your uploaded image as /desktop-banner.png in your public folder */}
      <img
        src="/desktop-banner.png" 
        alt="desktop-wedding-banner"
        className="
          hidden md:block
          absolute top-0 left-0 w-full h-full
          object-cover
          object-bottom
          pointer-events-none
          z-10
          opacity-60
        "
      />

      {/* FADE AT BOTTOM TO BLEND INTO NEXT SECTION */}
      <div className="absolute bottom-0 w-full h-28 bg-gradient-to-b from-transparent to-[#f5efe6] z-20" />

      {/* CONTENT */}
      {/* Kept max-w-5xl and all the size increases we made in the last step */}
      <div className="relative z-40 max-w-5xl px-4 pt-24 md:pt-0 flex flex-col justify-center items-center h-full w-full">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm md:text-3xl tracking-widest text-gray-600 font-serif mb-3"
        >
          Wedding Invitation
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xs md:text-xl text-gray-500 font-serif mb-8 md:mb-16"
        >
          Together with our families
        </motion.p>

        {/* NAMES CONTAINER (Forced Single Line) */}
        <div className="flex flex-col md:flex-row md:items-center justify-center md:gap-6 lg:gap-8 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-5xl md:text-7xl lg:text-8xl font-script text-teal-800 whitespace-nowrap"
            >
              L. Preethi
            </motion.h1>

            <motion.p className="text-3xl md:text-5xl lg:text-6xl my-3 md:my-0 font-script text-gray-500">
              &
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-script text-teal-800 whitespace-nowrap"
            >
              S. Pravin Bala
            </motion.h1>
        </div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "5rem" }}
          transition={{ delay: 1.4 }}
          className="h-[1px] md:h-[2px] bg-gray-400 my-8 md:my-16 mx-auto"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="text-base md:text-4xl text-gray-700 font-serif leading-relaxed max-w-[90%] md:max-w-4xl"
        >
          With love and joy, we invite you to celebrate our wedding and share this beautiful beginning with us.
        </motion.p>
      </div>

      {/* 👇 ALWAYS VISIBLE SCROLL ARROW */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 text-teal-800 text-xl md:text-4xl z-50"
      >
        ↓
      </motion.div>

      {/* 🔥 POPUP SCROLL HINT */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5 }}
            className="
              fixed bottom-16 md:bottom-24 left-1/2 -translate-x-1/2
              bg-teal-800 text-white
              px-6 py-3 md:px-8 md:py-4 md:text-xl rounded-full
              shadow-lg
              text-sm font-serif
              z-50
            "
          >
            Scroll to Explore ↓
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}