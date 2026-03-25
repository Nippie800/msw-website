import Link from "next/link";

const navLinks = [
  { name: "Shop", href: "/shop" },
  { name: "Story", href: "/story" },
  { name: "Community", href: "/community" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.35em] text-white transition hover:opacity-80"
        >
          MSW
        </Link>

        <nav className="flex items-center gap-6 md:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.25em] text-white/80 transition hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}