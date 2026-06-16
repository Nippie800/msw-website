import EmailCapture from "@/components/EmailCapture";
import Link from "next/link";
export default function Footer() {
  return (
    <footer
  id="community" className="border-t border-white/10 bg-black px-6 py-16 text-white md:px-10 md:py-24">

      <div className="mx-auto max-w-7xl">

        {/* COMMUNITY */}
        <div className="mb-16 border-b border-white/10 pb-16">
          <EmailCapture />
        </div>

        {/* FOOTER CONTENT */}
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">

          {/* LEFT */}
          <div>

            <p className="text-xs uppercase tracking-[0.35em] text-white/40">
              MSW
            </p>

            <h3 className="mt-3 text-3xl font-semibold uppercase tracking-tight md:text-4xl">
              MadeSumehow
            </h3>

            <p className="mt-4 max-w-md text-sm leading-7 text-white/45">
              Built for the ones who keep moving,
              no matter what the road looks like.
            </p>

          </div>

          {/* RIGHT */}
          <div className="max-w-sm">

            <p className="text-sm uppercase tracking-[0.28em] text-white/70 md:text-right">
              One Way Or Another
            </p>

            <p className="mt-3 text-sm leading-7 text-white/40 md:text-right">
              Join the community to hear about
              new drops, restocks and exclusive releases.
            </p>

          </div>

        </div>

<Link href="/terms">
  Shipping Policy
</Link>

<Link href="/returns">
  Returns Policy
</Link>
        {/* BOTTOM BAR */}
        <div className="mt-12 border-t border-white/10 pt-6">

          <div className="flex flex-col gap-3 text-xs uppercase tracking-[0.25em] text-white/30 md:flex-row md:items-center md:justify-between">

            <p>
              © {new Date().getFullYear()} Made Somehow
            </p>

            <p>
              Crafted With Purpose
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}