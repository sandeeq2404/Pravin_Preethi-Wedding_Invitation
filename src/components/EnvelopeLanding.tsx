import { motion } from "framer-motion";
import { useState } from "react";

type EnvelopeLandingProps = {
  onOpen: () => void;
};


export default function EnvelopeLanding({ onOpen }: EnvelopeLandingProps) {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
    setTimeout(onOpen, 1800);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: opened ? 0 : 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#e8e1d5]"
    >
      {/* 3D SCENE */}
      <div className="relative perspective-[1600px]">

        {/* ENVELOPE WRAPPER */}
        <motion.div
          onClick={handleOpen}
          animate={{
            rotateX: opened ? 12 : 0,
            scale: opened ? 1.05 : 1,
          }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-[420px] md:w-[620px] h-[320px] md:h-[420px] cursor-pointer"
        >

          {/* BASE */}
          <div className="absolute inset-0 bg-[#1f4f46] rounded-lg shadow-[0_40px_80px_rgba(0,0,0,0.45)]" />

          {/* LIGHT GRADIENT (REAL FEEL) */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-lg pointer-events-none" />

          {/* TOP FLAP */}
          <motion.div
            animate={{
              rotateX: opened ? -150 : 0,
              z: opened ? 60 : 0,
            }}
            transition={{
              duration: 1.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              transformOrigin: "top",
              transformStyle: "preserve-3d",
            }}
            className="absolute top-0 left-0 w-full h-1/2"
          >
            <div
              className="w-full h-full bg-[#2f6f63] shadow-inner"
              style={{
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              }}
            />

            {/* subtle highlight */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-40" />
          </motion.div>

          {/* CENTER TEXT (NO BUTTON) */}
          {!opened && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <p className="text-white font-serif text-lg tracking-[0.2em]">
                Tap to Open
              </p>
            </motion.div>
          )}

          {/* LETTER REVEAL */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{
              opacity: opened ? 1 : 0,
              y: opened ? 0 : 60,
            }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center">
              <p className="text-white font-script text-3xl mb-2">
                You're Invited
              </p>
              <p className="text-white/80 font-serif text-sm tracking-wide">
                A beautiful beginning awaits
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </motion.div>
  );
}