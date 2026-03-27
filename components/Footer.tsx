export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12 text-white md:px-10 md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">
            MSW
          </p>
          <h3 className="mt-3 text-2xl font-semibold uppercase tracking-tight md:text-3xl">
            Made Somehow
          </h3>
        </div>

        <div className="max-w-sm">
          <p className="text-sm uppercase tracking-[0.28em] text-white/70 md:text-right">
            One Way Or Another
          </p>
          <p className="mt-3 text-sm leading-7 text-white/45 md:text-right">
            Built for the ones who keep moving, no matter what the road looks like.
          </p>
        </div>
      </div>
    </footer>
  );
}