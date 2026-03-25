import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">
      {/* subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_35%)]" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-[10%] top-[20%] h-1.5 w-1.5 rounded-full bg-white" />
        <div className="absolute right-[18%] top-[28%] h-1 w-1 rounded-full bg-white" />
        <div className="absolute left-[22%] bottom-[30%] h-1 w-1 rounded-full bg-white" />
        <div className="absolute right-[30%] bottom-[22%] h-1.5 w-1.5 rounded-full bg-white" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="mb-8">
          <Image
            src="/msw-logo.png"
            alt="Made Somehow logo"
            width={110}
            height={110}
            className="h-auto w-[84px] opacity-90 md:w-[110px]"
            priority
          />
        </div>

        <p className="mb-4 text-[10px] uppercase tracking-[0.45em] text-white/60 md:text-xs">
          Made Somehow
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold uppercase leading-[0.9] tracking-tight md:text-7xl lg:text-8xl">
          MADE SOMEHOW
        </h1>

        <p className="mt-6 max-w-xl text-sm uppercase tracking-[0.3em] text-white/75 md:text-base">
          One Way Or Another
        </p>

        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
          Built for the ones who keep going when the odds say stop.
        </p>

        <Link
          href="/shop"
          className="mt-10 inline-flex items-center justify-center border border-white px-8 py-4 text-xs font-medium uppercase tracking-[0.3em] text-white transition hover:bg-white hover:text-black"
        >
          Shop The Drop
        </Link>
      </div>
    </section>
  );
}