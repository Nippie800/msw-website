import Link from "next/link";
import DropBelt from "@/components/DropBelt";

export default function DropSection() {
  return (
    <section className="bg-black px-6 py-24 text-white md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-[10px] uppercase tracking-[0.45em] text-white/45 md:text-xs">
              Drop 001
            </p>

            <h2 className="text-4xl font-semibold uppercase tracking-tight md:text-6xl lg:text-7xl">
              Current Drop
            </h2>
          </div>

         
        </div>

        <DropBelt />

        <div className="mt-12 flex justify-center md:mt-16">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center border border-white px-8 py-4 text-xs font-medium uppercase tracking-[0.3em] text-white transition hover:bg-white hover:text-black"
          >
            View All Drops
          </Link>
        </div>
      </div>
    </section>
  );
}