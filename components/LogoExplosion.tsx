"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type LogoExplosionProps = {
  onComplete?: () => void;
};

const heroSparkles = [
  { id: 1, x: -250, y: -130, size: 26, delay: 0.04 },
  { id: 2, x: -120, y: -210, size: 20, delay: 0.08 },
  { id: 3, x: 0, y: -250, size: 30, delay: 0.12 },
  { id: 4, x: 125, y: -200, size: 22, delay: 0.16 },
  { id: 5, x: 245, y: -125, size: 26, delay: 0.2 },
  { id: 6, x: -210, y: 120, size: 18, delay: 0.11 },
  { id: 7, x: 215, y: 125, size: 18, delay: 0.17 },
  { id: 8, x: 0, y: 235, size: 22, delay: 0.22 },
];

const dustParticles = [
  { id: 1, x: -220, y: -80, size: 8, delay: 0.02 },
  { id: 2, x: -180, y: -150, size: 6, delay: 0.03 },
  { id: 3, x: -140, y: -210, size: 7, delay: 0.04 },
  { id: 4, x: -90, y: -170, size: 5, delay: 0.05 },
  { id: 5, x: -40, y: -230, size: 6, delay: 0.06 },
  { id: 6, x: 0, y: -200, size: 8, delay: 0.07 },
  { id: 7, x: 45, y: -235, size: 5, delay: 0.08 },
  { id: 8, x: 95, y: -175, size: 7, delay: 0.09 },
  { id: 9, x: 145, y: -210, size: 6, delay: 0.1 },
  { id: 10, x: 185, y: -145, size: 8, delay: 0.11 },
  { id: 11, x: 225, y: -75, size: 5, delay: 0.12 },

  { id: 12, x: -250, y: 0, size: 6, delay: 0.07 },
  { id: 13, x: -190, y: -20, size: 5, delay: 0.08 },
  { id: 14, x: -150, y: 25, size: 8, delay: 0.09 },
  { id: 15, x: -110, y: 75, size: 6, delay: 0.1 },
  { id: 16, x: -70, y: 120, size: 5, delay: 0.11 },
  { id: 17, x: -20, y: 145, size: 6, delay: 0.12 },
  { id: 18, x: 35, y: 135, size: 7, delay: 0.13 },
  { id: 19, x: 85, y: 110, size: 5, delay: 0.14 },
  { id: 20, x: 130, y: 70, size: 8, delay: 0.15 },
  { id: 21, x: 175, y: 20, size: 6, delay: 0.16 },
  { id: 22, x: 245, y: 5, size: 5, delay: 0.17 },

  { id: 23, x: -180, y: 170, size: 7, delay: 0.13 },
  { id: 24, x: -130, y: 220, size: 5, delay: 0.14 },
  { id: 25, x: -70, y: 245, size: 8, delay: 0.15 },
  { id: 26, x: 0, y: 210, size: 6, delay: 0.16 },
  { id: 27, x: 65, y: 240, size: 5, delay: 0.17 },
  { id: 28, x: 125, y: 215, size: 7, delay: 0.18 },
  { id: 29, x: 185, y: 165, size: 6, delay: 0.19 },
  { id: 30, x: 230, y: 105, size: 5, delay: 0.2 },
];

export default function LogoExplosion({ onComplete }: LogoExplosionProps) {
  const [explode, setExplode] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const holdTimer = setTimeout(() => setExplode(true), 1200);
    const endTimer = setTimeout(() => {
      setHidden(true);
      onComplete?.();
    }, 2850);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(endTimer);
    };
  }, [onComplete]);

  if (hidden) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="relative flex items-center justify-center">
          {!explode && (
            <>
              <motion.div
                className="absolute h-[260px] w-[260px] rounded-full bg-white/10 blur-3xl"
                animate={{ scale: [1, 1.1, 1], opacity: [0.18, 0.36, 0.18] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                className="absolute h-[380px] w-[380px] rounded-full bg-white/5 blur-[140px]"
                animate={{ scale: [1, 1.06, 1], opacity: [0.12, 0.22, 0.12] }}
                transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                <Image
                  src="/msw-logo.png"
                  alt="MSW logo"
                  width={220}
                  height={220}
                  className="h-auto w-[145px] object-contain md:w-[180px]"
                  priority
                />
              </motion.div>
            </>
          )}

          {explode && (
            <>
              {/* Main silver bloom */}
              <motion.div
                className="absolute h-[220px] w-[220px] rounded-full bg-white/35 blur-3xl"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 2.4, opacity: [0, 0.65, 0] }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />

              {/* Wider gradient haze */}
              <motion.div
                className="absolute h-[420px] w-[420px] rounded-full bg-white/12 blur-[160px]"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 2.8, opacity: [0, 0.28, 0] }}
                transition={{ duration: 0.85, ease: "easeOut" }}
              />

              {/* Dense smoke-like metallic dust field */}
              <motion.div
                className="absolute h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.06)_35%,transparent_72%)] blur-[90px]"
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: 1.9, opacity: [0, 0.55, 0] }}
                transition={{ duration: 1, ease: "easeOut" }}
              />

              {/* Logo stays solid, then releases */}
              <motion.div
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 1.08, opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="absolute"
              >
                <Image
                  src="/msw-logo.png"
                  alt="MSW logo"
                  width={220}
                  height={220}
                  className="h-auto w-[145px] object-contain md:w-[180px]"
                />
              </motion.div>

              {/* Hero sparkles - fewer but stronger */}
              {heroSparkles.map((star) => (
                <motion.span
                  key={star.id}
                  className="absolute text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.95)]"
                  style={{
                    fontSize: `${star.size}px`,
                    lineHeight: 1,
                  }}
                  initial={{ x: 0, y: 0, opacity: 0, scale: 0.35 }}
                  animate={{
                    x: star.x,
                    y: star.y,
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.15, 0.35],
                  }}
                  transition={{
                    duration: 0.95,
                    delay: star.delay,
                    ease: "easeOut",
                  }}
                >
                  ✦
                </motion.span>
              ))}

              {/* Main dust explosion */}
              {dustParticles.map((particle) => (
                <motion.span
                  key={particle.id}
                  className="absolute rounded-full bg-white shadow-[0_0_22px_rgba(255,255,255,0.95)]"
                  style={{
                    width: particle.size,
                    height: particle.size,
                  }}
                  initial={{ x: 0, y: 0, scale: 0.25, opacity: 0 }}
                  animate={{
                    x: particle.x,
                    y: particle.y,
                    scale: [0.4, 1.1, 0.12],
                    opacity: [0, 0.95, 0],
                  }}
                  transition={{
                    duration: 0.9,
                    delay: particle.delay,
                    ease: "easeOut",
                  }}
                />
              ))}

              {/* Fine glowing dust trail */}
              {dustParticles.map((particle) => (
                <motion.span
                  key={`mist-${particle.id}`}
                  className="absolute rounded-full bg-white/80 blur-[1.5px]"
                  style={{
                    width: 3,
                    height: 3,
                  }}
                  initial={{ x: 0, y: 0, scale: 0.2, opacity: 0 }}
                  animate={{
                    x: particle.x * 1.15,
                    y: particle.y * 1.15,
                    scale: [0.3, 0.8, 0.08],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 1.05,
                    delay: particle.delay + 0.05,
                    ease: "easeOut",
                  }}
                />
              ))}
            </>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}