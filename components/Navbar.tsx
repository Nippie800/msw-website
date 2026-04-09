import Link from "next/link";

const navLinks = [
  { name: "Shop", href: "/shop" },
  { name: "Story", href: "/story" },
  { name: "Community", href: "/community" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="/"
          className="text-xs font-semibold uppercase tracking-[0.38em] text-white transition hover:opacity-80 md:text-sm"
        >
          MSW
        </Link>

        <nav className="flex items-center gap-4 md:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.25em] text-white/75 transition hover:text-white md:text-xs"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}