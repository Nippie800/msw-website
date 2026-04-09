"use client";

import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function DropBelt() {
  const beltProducts = [...products, ...products];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-black to-transparent md:w-28" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-black to-transparent md:w-28" />

      <div className="group w-full overflow-hidden">
        <div className="marquee-track group-hover:[animation-play-state:paused]">
          {beltProducts.map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className="mr-6 inline-block align-top md:mr-10"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}