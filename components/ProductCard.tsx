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

        min-w-[240px]

        sm:min-w-[280px]

        md:min-w-[340px]
      "
    >

      <Link
        href={`/shop/${product.id}`}
        className="block"
      >

        {/* IMAGE */}

        <div className="relative bg-black">

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

              flex

              items-end

              justify-center

            ${
  isAccessory
    ? "h-[340px] w-[300px]"
    : "h-[340px] w-[300px]"
}

            `}

          >

            <Image

              src={product.images[0]}

              alt={product.name}

              width={1200}

              height={1200}

              className={`

                object-contain

                transition

                duration-700

                ease-out

                group-hover:scale-[1.03]

                ${

                  isAccessory

                    ?

                    "max-h-[260px] w-auto"

                    :

                    "max-h-[340px] w-full"

                }

              `}

            />

          </div>

        </div>

        {/* INFO */}

        <div

          className="

            mt-5

            flex

            flex-col

            items-start

            gap-2

          "

        >

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