import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ScratchCircle from "./ScratchCircle";


// 👇 ADD CONFETTI HERE (TOP OR BOTTOM — BOTH OK)
const Confetti = () => {
  const width =
    typeof window !== "undefined" ? window.innerWidth : 800;

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-50">
      {[...Array(60)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            y: -100,
            x: Math.random() * width, // ✅ FULL WIDTH
            rotate: Math.random() * 360,
          }}
          animate={{
            y: window.innerHeight + 100,
            rotate: 360,
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            delay: Math.random() * 1.5,
          }}
          className="absolute"
          style={{
            width: `${6 + Math.random() * 6}px`,
            height: `${10 + Math.random() * 10}px`,
            backgroundColor: ["#d4af37", "#b91c1c", "#0f766e"][i % 3],
            borderRadius: "2px",
          }}
        />
      ))}
    </div>
  );
};

export default function ScratchReveal() {
  const [count, setCount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleReveal = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (count === 3) {
      setShowConfetti(true);

      setTimeout(() => {
        setShowConfetti(false);
      }, 3000);
    }
  }, [count]);

  return (
    <section className="py-28 text-center bg-[#f5efe6] relative overflow-hidden">

      <h2 className="text-4xl md:text-5xl font-script text-teal-800 mb-6">
        Reveal the Date
      </h2>

      <p className="font-serif text-gray-600 mb-12 max-w-xl mx-auto">
        A special moment awaits you. Gently unveil each piece to discover
        the day we begin our beautiful journey together.
      </p>

      <div className="flex justify-center gap-10">
        <ScratchCircle value="20" onReveal={handleReveal} />
        <ScratchCircle value="APR" onReveal={handleReveal} />
        <ScratchCircle value="2026" onReveal={handleReveal} />
      </div>

      {count === 3 && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16"
        >
          <p className="text-2xl font-serif text-teal-900">
            We look forward to celebrating this beautiful day with you
          </p>
        </motion.div>
      )}

      {/* 👇 THIS WILL NOW WORK */}
      {showConfetti && <Confetti />}
    </section>
  );
}