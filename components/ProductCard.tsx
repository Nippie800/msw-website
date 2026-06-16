"use client";

import Image from "next/image";
import Link from "next/link";

import { useCurrency } from "@/context/CurrencyContext";

type ProductCardProps = {
  product: {
    id: string;
    name: string;
    price: number;
    images: string[];
    stock: number;
  };
};

export default function ProductCard({
  product,
}: ProductCardProps) {

  const { convertPrice } = useCurrency();

  const soldOut =
    product.stock <= 0;

  const isAccessory =
    product.name
      .toLowerCase()
      .includes("beanie");

  return (

    <div
      className="
        group
        min-w-[220px]
        sm:min-w-[260px]
        md:min-w-[420px]
      "
    >

      <Link
        href={`/shop/${product.id}`}
        className="block"
      >

        {/* IMAGE */}

        <div className="relative overflow-hidden bg-black">

          {soldOut && (

            <div
              className="
                absolute
                left-4
                top-4
                z-10

                border
                border-white/20

                bg-black/80

                px-3
                py-1

                text-[10px]
                uppercase
                tracking-[0.25em]

                text-white
              "
            >
              Sold Out
            </div>

          )}

          <div

            className={`
              relative
              mx-auto

              transition
              duration-700

              group-hover:scale-[1.03]

              ${
                isAccessory

                  ? "h-[260px] w-[220px]"

                  : "h-[340px] w-[300px]"
              }

            `}
          >

            <Image

              src={product.images[0]}

              alt={product.name}

              fill

              sizes="
                (max-width:768px) 220px,
                300px
              "

              className="
                object-contain
              "
            />

          </div>

        </div>

        {/* INFO */}

        <div className="mt-5 space-y-2">

          <h3

            className="
              text-[11px]

              uppercase

              tracking-[0.2em]

              text-white
            "

          >

            {product.name}

          </h3>

          <p

            className="
              text-[11px]

              text-white/60
            "

          >

            {convertPrice(
              product.price
            )}

          </p>

          <p

            className="
              inline-block

              text-[10px]

              uppercase

              tracking-[0.25em]

              text-white/70

              transition

              duration-300

              group-hover:text-white
            "

          >

            View Item

          </p>

        </div>

      </Link>

    </div>

  );

}