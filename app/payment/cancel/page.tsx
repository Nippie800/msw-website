import Link from "next/link";

export default function CancelPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] text-white/40">
          Payment Cancelled
        </p>

        <h1 className="mt-5 text-5xl font-semibold uppercase tracking-tight md:text-6xl">
          Order Cancelled
        </h1>

        <p className="mt-6 max-w-md text-sm leading-7 text-white/60 md:text-base">
          Your checkout session was cancelled before payment completion.
        </p>

        <Link
          href="/"
          className="
            mx-auto
            mt-10
            flex
            w-fit
            items-center
            justify-center
            border
            border-white
            px-8
            py-4
            text-xs
            uppercase
            tracking-[0.35em]
            text-white
            transition-all
            duration-300
            hover:bg-white
            hover:text-black
          "
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}