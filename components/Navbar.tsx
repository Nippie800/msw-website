"use client";

import Link from "next/link";
import CartButton from "@/components/CartButton";

const navLinks = [
  { name: "Shop", href: "/shop" },
  { name: "Story", href: "/story" },
  { name: "Community", href: "/community" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        
        {/* LOGO */}
        <Link
          href="/"
          className="
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.45em]
            text-white
            transition
            hover:opacity-70
            md:text-xs
          "
        >
          MSW
        </Link>

        {/* NAV */}
        <div className="flex items-center gap-6 md:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="
                text-[10px]
                uppercase
                tracking-[0.22em]
                text-white/75
                transition
                duration-300
                hover:text-white
                md:text-xs
              "
            >
              {link.name}
            </Link>
            
          ))}
          <CartButton />
        </div>
      </div>
    </header>
  );
}