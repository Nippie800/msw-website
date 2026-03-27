import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 pt-24 text-white md:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.09),transparent_35%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <div className="mb-8 flex justify-center">
          <div className="rounded-full border border-white/10 bg-white/[0.03] p-4 shadow-[0_0_50px_rgba(255,255,255,0.05)]">
            <Image
              src="/msw-logo.png"
              alt="MSW logo"
              width={120}
              height={120}
              className="h-auto w-[88px] md:w-[110px]"
              priority
            />
          </div>
        </div>

        <p className="mb-4 text-[10px] uppercase tracking-[0.45em] text-white/50 md:text-xs">
          Made Somehow
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold uppercase leading-[0.9] tracking-tight md:text-7xl lg:text-8xl">
          MADE SOMEHOW
        </h1>

        <p className="mt-6 text-sm uppercase tracking-[0.28em] text-white/70 md:text-base">
          One Way Or Another
        </p>

        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
          Built for the ones who keep moving when the odds say stop.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center border border-white px-8 py-4 text-xs font-medium uppercase tracking-[0.3em] text-white transition hover:bg-white hover:text-black"
          >
            Shop The Drop
          </Link>

          <Link
            href="/story"
            className="inline-flex items-center justify-center border border-white/20 px-8 py-4 text-xs font-medium uppercase tracking-[0.3em] text-white/80 transition hover:border-white hover:text-white"
          >
            Explore Story
          </Link>
        </div>
      </div>
    </section>
  );
}