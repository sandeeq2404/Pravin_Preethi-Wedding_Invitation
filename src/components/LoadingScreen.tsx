import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-[#f5efe6] flex flex-col items-center justify-center"
    >
      {/* LOGO / TEXT */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-5xl font-script text-teal-800"
      >
        Preparing Something Beautiful
      </motion.h1>

      {/* SUBTEXT */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-500 mt-4 font-serif"
      >
        Please wait a moment...
      </motion.p>

      {/* LUXURY DOT LOADER */}
      <div className="flex gap-3 mt-8">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-3 h-3 bg-teal-800 rounded-full"
            animate={{
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}