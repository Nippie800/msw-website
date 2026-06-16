"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  
const [introDone, setIntroDone] =
  useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    setIntroDone(true);
  }, 1000);

  return () => clearTimeout(timer);
}, []);
  return (
    <>
      {!introDone && (
  <div
    className="
      fixed
      inset-0
      z-[999]
      flex
      items-center
      justify-center
      bg-black
      animate-fade-out
    "
  >
    <Image
      src="/msw-logo.png"
      alt="MSW"
      width={260}
      height={260}
      priority
      className="animate-pulse"
    />
  </div>
)}

      <section className="relative min-h-screen overflow-hidden bg-black text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/MSW-HEROfin.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.12),rgba(0,0,0,0.72))]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: introDone ? 1 : 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-6 pt-24 text-center md:px-10 md:pt-28"
        >
          <div className="mb-8 flex justify-center md:mb-10">
            
              <Image
                src="/msw-logo.png"
                alt="MSW logo"
                width={350}
                height={350}
                className="h-auto w-[240px] sm:w-[320px] md:w-[1000px]"
                priority
              />
            
          </div>

          <p className="mb-4 text-[10px] uppercase tracking-[0.45em] text-white/70 md:text-xs">
            MadeSumhow
          </p>

          <h1 className="max-w-5xl text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
            MADESUMHOW
          </h1>

          <p className="mt-6 text-sm uppercase tracking-[0.28em] text-white/85 md:text-base">
            One Way Or Another
          </p>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
            Built for the ones who keep moving when the odds say stop.
          </p>

          <div className="mt-8 flex w-full max-w-xs flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">

  <Link
  href="/shop"
  className="
    inline-flex
    min-w-[220px]
    items-center
    justify-center
    border
    border-white
    bg-transparent
    px-8
    py-4
    text-xs
    font-medium
    uppercase
    tracking-[0.3em]
    text-white
    transition
    duration-300
    hover:bg-white
    hover:text-black
  "
>
  Shop The Drop
</Link>

</div>
        </motion.div>
      </section>
    </>
  );
}