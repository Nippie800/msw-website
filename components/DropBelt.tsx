"use client";

import ProductCard from "@/components/ProductCard";

type Product = {
  id: string;
  name: string;
  price: number;
  stock: number;
  images: string[];
};

type DropBeltProps = {
  products: Product[];
};

export default function DropBelt({
  products,
}: DropBeltProps) {
  const beltProducts = [
    ...products,
    ...products,
    ...products,
  ];

  return (
    <div className="relative py-10 md:py-16">

      {/* DESKTOP RUNWAY */}
      <div className="relative hidden overflow-hidden md:block">

        {/* LEFT FADE */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-36 bg-gradient-to-r from-black to-transparent" />

        {/* RIGHT FADE */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-36 bg-gradient-to-l from-black to-transparent" />

        <div className="group w-full overflow-hidden">
          <div className="marquee-track group-hover:[animation-play-state:paused]">

            {beltProducts.map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="mr-20 inline-block align-top"
              >
                <ProductCard product={product} />
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* MOBILE RUNWAY */}
      <div className="relative overflow-hidden md:hidden">

        <div className="mobile-marquee">

          {[...products, ...products].map(
            (product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="
                  flex-shrink-0
                  w-[72vw]
                  max-w-[320px]
                "
              >
                <ProductCard
                  product={product}
                />
              </div>
            )
          )}

        </div>

      </div>

    </div>
  );
}