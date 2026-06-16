import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getProduct } from "@/lib/products";

import AddToCartSection from "@/components/AddToCartSection";
import ProductPrice from "@/components/ProductPrice";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  const soldOut =
    product.stock <= 0;

  const isAccessory =
    product.name
      .toLowerCase()
      .includes("beanie");

  return (

    <section
      className="
        bg-black
        px-5
        py-28
        text-white

        md:px-10
        md:py-36
      "
    >

      <div
        className="
          mx-auto
          grid
          max-w-7xl
          gap-14

          md:grid-cols-2
          md:gap-24
        "
      >

        {/* LEFT */}

        <div className="relative overflow-hidden bg-black">

          <Link

            href="/shop"

            className="
              mb-8
              inline-flex

              text-[10px]

              uppercase

              tracking-[0.3em]

              text-white/50

              transition

              hover:text-white
            "

          >

            ← Back To Shop

          </Link>

          {soldOut && (

            <div

              className="
                absolute

                left-5
                top-5

                z-10

                border
                border-white/20

                bg-black/80

                px-4
                py-2

                text-[10px]

                uppercase

                tracking-[0.3em]

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

              ${
                isAccessory

                  ? "h-[520px] w-[420px]"

                  : "w-full"
              }
            `}

          >

            <Image

              src={product.images[0]}

              alt={product.name}

              width={1400}

              height={1400}

              priority

              className="
                h-auto
                w-full
                object-contain
              "

            />

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex flex-col justify-center">

          {/* BRAND */}

          <p

            className="
              text-[10px]

              uppercase

              tracking-[0.4em]

              text-white/45

              md:text-xs
            "

          >

            Made Somehow

          </p>

          {/* TITLE */}

          <h1

            className="
              mt-5

              text-4xl

              font-semibold

              uppercase

              leading-tight

              tracking-tight

              md:text-6xl
            "

          >

            {product.name}

          </h1>

          {/* PRICE */}

          <p

            className="
              mt-6

              text-xl

              text-white/75

              md:text-2xl
            "

          >

            <ProductPrice
              price={product.price}
            />

          </p>

          {/* DESCRIPTION */}

          <p

            className="
              mt-8

              max-w-xl

              text-sm

              leading-8

              text-white/60

              md:text-base
            "

          >

            {product.description}

          </p>

          {/* ACCESSORY */}

          {isAccessory ? (

            <div className="mt-14">

              <p

                className="
                  text-[10px]

                  uppercase

                  tracking-[0.35em]

                  text-white/40
                "

              >

                Fit

              </p>

              <p

                className="
                  mt-3

                  text-sm

                  uppercase

                  tracking-[0.25em]

                  text-white
                "

              >

                One Size Fits All

              </p>

              <AddToCartSection
                product={product}
              />

            </div>

          ) : (

            <AddToCartSection
              product={product}
            />

          )}

        </div>

      </div>

    </section>

  );

}