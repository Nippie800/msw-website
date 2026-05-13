import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function StorySection() {
  return (
    <section className="bg-black px-6 py-24 text-white md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:items-center">
        <Reveal>
          <div className="max-w-xl">
            <p className="mb-6 text-[10px] uppercase tracking-[0.45em] text-white/45 md:text-xs">
              The Story
            </p>

            <h2 className="text-4xl font-semibold uppercase leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Built from vision.
              <br />
              Not comfort.
            </h2>

            <div className="mt-8 space-y-6 text-base leading-8 text-white/65 md:text-lg">
              <p>
                Two dreamers under the stars. Talking about a future nobody else
                can see yet.
              </p>

              <p>
                That is the spirit behind MSW — Made Somehow. A brand for the
                ones who keep building even when the path is unclear.
              </p>

              <p>
                It is not about having everything figured out. It is about
                belief, motion, and finding a way forward one way or another.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="flex justify-center md:justify-end">
           
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_45%)]" />

              <div className="relative flex items-center justify-center">
                <Image
                  src="/msw-logo.png"
                  alt="MSW logo"
                  width={420}
                  height={420}
                  className="h-auto w-full max-w-[280px] object-contain"
                />
              </div>
            
          </div>
        </Reveal>
      </div>
    </section>
  );
}