import Reveal from "@/components/Reveal";

export default function Manifesto() {
  return (
    <section className="bg-black px-6 py-24 text-white md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-6 text-[10px] uppercase tracking-[0.45em] text-white/50 md:text-xs">
            Manifesto
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-4xl font-semibold uppercase leading-[0.9] tracking-tight md:text-6xl lg:text-8xl">
            ONE WAY
            <br />
            OR ANOTHER
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 max-w-2xl space-y-6 text-base leading-8 text-white/70 md:mt-14 md:text-lg">
            <p>Some start with money.</p>
            <p>Some start with connections.</p>
            <p>Others start with nothing.</p>
            <p>
              But one way or another<span className="text-white">…</span>
            </p>
            <p className="text-white">we make it.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}