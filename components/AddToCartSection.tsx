"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cart-store";

type AddToCartSectionProps = {
  product: {
    id: string;
    name: string;
    price: number;
    images: string[];
    sizes: string[];
    stock: number;
  };
};

export default function AddToCartSection({
  product,
}: AddToCartSectionProps) {
  const [selectedSize, setSelectedSize] = useState("");

  const addItem = useCartStore((state) => state.addItem);

  const soldOut = product.stock <= 0;

  const handleAddToCart = () => {
    if (!selectedSize) return;

    addItem({
      id: product.id,
      name: product.name,
      image: product.images[0],
      size: selectedSize,
      price: product.price,
      quantity: 1,
    });
  };

  return (
    <div className="mt-12">

      <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-white/45">
        Select Size
      </p>

      <div className="flex flex-wrap gap-3">
        {product.sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`
              border
              px-5
              py-3
              text-xs
              uppercase
              tracking-[0.2em]
              transition
              duration-300

              ${
                selectedSize === size
                  ? "border-white bg-white text-black"
                  : "border-white/20 text-white hover:border-white"
              }
            `}
          >
            {size}
          </button>
        ))}
      </div>

      <button
        disabled={soldOut}
        onClick={handleAddToCart}
        className={`
          mt-10
          w-full
          border
          px-8
          py-5
          text-xs
          uppercase
          tracking-[0.3em]
          transition
          duration-300
          md:w-auto

          ${
            soldOut
              ? "cursor-not-allowed border-white/10 bg-white/5 text-white/30"
              : "border-white bg-white text-black hover:bg-transparent hover:text-white"
          }
        `}
      >
        {soldOut ? "Sold Out" : "Add To Cart"}
      </button>

    </div>
  );
}