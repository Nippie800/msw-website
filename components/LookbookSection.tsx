import Image from "next/image";

const looks = [
  "/looks/look-1.png",
  "/looks/look-2.png",
  "/looks/look-3.png",
  "/looks/look-4.png",
];

export default function LookbookSection() {
  return (
    <section className="bg-black px-6 py-24 text-white md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 md:mb-16">
          <p className="mb-4 text-[10px] uppercase tracking-[0.45em] text-white/50 md:text-xs">
            Campaign
          </p>
          <h2 className="text-4xl font-semibold uppercase tracking-tight md:text-6xl">
            Look Book
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
            Real fits. Real movement. Real city energy.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {looks.map((src, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={src}
                  alt={`MSW look ${index + 1}`}
                  fill
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}