"use client";

import { ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { useUIStore } from "@/store/ui-store";

export default function CartButton() {
  const items = useCartStore((state) => state.items);

  const openCart = useUIStore((state) => state.openCart);

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <button
      onClick={openCart}
      className="relative transition hover:opacity-70"
    >
      <ShoppingBag size={18} strokeWidth={1.5} />

      {totalItems > 0 && (
        <div className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-medium text-black">
          {totalItems}
        </div>
      )}
    </button>
  );
}