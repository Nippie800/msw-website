"use client";

import Link from "next/link";

import CartButton from "@/components/CartButton";

import CurrencySelector from "@/components/CurrencySelector";

const navLinks = [

  {
    name: "Shop",

    href: "/shop",
  },

  {
    name: "Community",

    href: "#community",
  },

];

export default function Navbar() {

  return (

    <header
      className="
        fixed
        top-0
        left-0
        z-50
        w-full

        border-b
        border-white/10

        bg-black/70

        backdrop-blur-xl
      "
    >

      <div
        className="
          mx-auto

          flex

          max-w-7xl

          items-center

          justify-between

          px-5

          py-4

          md:px-10
        "
      >

        {/* LEFT — MSW */}

        <Link

          href="/"

          className="
            flex
            items-start
            gap-[2px]

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

          <span
            className="
              text-[7px]

              leading-none

              tracking-normal

              opacity-60
            "
          >

            ™

          </span>

        </Link>

        {/* CENTER / RIGHT */}

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

          <CurrencySelector />

          <CartButton />

          {/* PDG HOUSE MARK */}

          <div
            className="
              hidden

              md:flex

              flex-col

              items-end

              leading-none

              select-none
            "
          >

            <span
              className="
                text-[11px]

                font-semibold

                uppercase

                tracking-[0.22em]

                text-white/45

                transition

                duration-300

                hover:text-white/70
              "
            >

              PDG

              <span className="ml-[1px] text-[7px] align-top">

                ™

              </span>

            </span>

            <span
              className="
                mt-[2px]

                text-[7px]

                uppercase

                tracking-[0.45em]

                text-white/20
              "
            >

              Pro Don Gear

            </span>

          </div>

        </div>

      </div>

    </header>

  );

}