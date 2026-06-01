"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cart-store";
import { useUIStore } from "@/store/ui-store";

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

  const [sizeError, setSizeError] =
  useState(false);

  const [showAddedModal, setShowAddedModal] =
  useState(false);

  const addItem = useCartStore((state) => state.addItem);

  const soldOut = product.stock <= 0;

  const openCart = useUIStore(
  (state) => state.openCart
);

  const handleAddToCart = () => {
  if (!selectedSize) {
    setSizeError(true);
    return;
  }

  setSizeError(false);

  addItem({
    id: product.id,
    name: product.name,
    image: product.images[0],
    size: selectedSize,
    price: product.price,
    quantity: 1,
  });

  setShowAddedModal(true);
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
            onClick={() => {
  setSelectedSize(size);
  setSizeError(false);
}}
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

{sizeError && (
  <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/60">
    Please select a size first
  </p>
)}
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

{showAddedModal && (
  <div
    className="
      fixed
      inset-0
      z-[100]
      flex
      items-center
      justify-center
      bg-black/70
      backdrop-blur-sm
      px-6
    "
  >
    <div
      className="
        w-full
        max-w-md
        border
        border-white/10
        bg-black
        p-8
        text-center
      "
    >
      <p className="text-green-400 text-sm uppercase tracking-[0.3em]">
        Added To Cart
      </p>

      <h3 className="mt-4 text-2xl font-semibold">
        {product.name}
      </h3>

      <p className="mt-2 text-white/50">
        Size {selectedSize}
      </p>

      <div className="mt-8 flex flex-col gap-3">

        <button
            onClick={() => {
    setShowAddedModal(false);

    window.location.href =
      "/shop";
  }}
          className="
            border
            border-white
            px-6
            py-4
            text-xs
            uppercase
            tracking-[0.3em]
            text-white
            transition
            hover:bg-white
            hover:text-black
          "
        >
          Continue Shopping
        </button>

        <button
         onClick={() => {
  setShowAddedModal(false);

  openCart();
}}
          className="
            border
            border-white/20
            px-6
            py-4
            text-xs
            uppercase
            tracking-[0.3em]
            text-white/70
            transition
            hover:border-white
            hover:text-white
          "
        >
          View Cart
        </button>

      </div>
    </div>
  </div>
)}
    </div>
  );
}