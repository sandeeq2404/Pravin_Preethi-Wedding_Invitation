import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center px-6 bg-[#f5efe6] overflow-hidden">

      {/* BORDER IMAGE (ONLY MOBILE) */}
<img
  src="/border.png"
  alt="border"
  className="
    absolute inset-0 w-full h-full object-contain
    pointer-events-none
    scale-[1.08] translate-y-[10px]
    animate-[zoom_10s_ease-in-out_infinite]
    md:hidden
  "
/>

{/* 🔥 FADE OVERLAY */}
<div
  className="
    absolute bottom-0 left-0 w-full h-32
    bg-gradient-to-b from-transparent to-[#f5efe6]
    pointer-events-none
    md:hidden
  "
/>

      {/* CONTENT */}
      <div className="relative z-10 max-w-2xl">

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-sm tracking-widest text-gray-600 font-serif mb-2"
        >
          Wedding Invitation
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xs text-gray-500 font-serif mb-8"
        >
          Together with our families
        </motion.p>

        {/* Names */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-5xl md:text-7xl font-script text-teal-800 leading-tight"
        >
          L. Preethi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-3xl my-4 font-script text-gray-500"
        >
          &
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="text-5xl md:text-7xl font-script text-teal-800 leading-tight"
        >
          S. Pravin Bala
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ duration: 1, delay: 1.8 }}
          className="h-[1px] bg-gray-400 my-8 mx-auto"
        />

        {/* SHORT INVITATION TEXT (20 words) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="text-base md:text-lg text-gray-700 font-serif leading-relaxed"
        >
          With love and joy, we invite you to celebrate our wedding and share this beautiful beginning with us.
        </motion.p>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.8 }}
          className="text-lg font-serif text-gray-700 tracking-wide mt-8"
        >
          
        </motion.p>

      </div>
    </div>
  );
}