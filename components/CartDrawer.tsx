"use client";

import Image from "next/image";
import { X } from "lucide-react";

import { useCartStore } from "@/store/cart-store";
import { useUIStore } from "@/store/ui-store";
import Link from "next/link";
import { useCurrency } from "@/context/CurrencyContext";

export default function CartDrawer() {
  const isCartOpen = useUIStore((state) => state.isCartOpen);

  const closeCart = useUIStore((state) => state.closeCart);

  const { convertPrice } = useCurrency();
  const {
    items,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
  } = useCartStore();

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* OVERLAY */}
      <div
        onClick={closeCart}
        className={`
          fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm transition duration-300

          ${
            isCartOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* DRAWER */}
      <div
        className={`
          fixed right-0 top-0 z-[100] flex h-screen w-full max-w-md flex-col border-l border-white/10 bg-black text-white transition duration-500

          ${
            isCartOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/45">
              MSW
            </p>

            <h2 className="mt-2 text-lg font-medium uppercase tracking-[0.08em]">
              Cart
            </h2>
          </div>

          <button
  onClick={closeCart}
  aria-label="Close cart"
  className="transition hover:opacity-70"
>
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* ITEMS */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full items-center justify-center">
              <p className="text-sm text-white/40">
                Your cart is empty.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="flex gap-4"
                >
                  {/* IMAGE */}
                  <div className="relative h-28 w-24 overflow-hidden bg-black">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* INFO */}
                  <div className="flex flex-1 flex-col">
                    <h3 className="text-[11px] uppercase tracking-[0.18em]">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-[11px] text-white/45">
                      Size: {item.size}
                    </p>

                    <p className="mt-2 text-sm text-white/75">
  {convertPrice(item.price)}
</p>
<p className="mt-1 text-xs text-white/40">
  Total: {convertPrice(item.price * item.quantity)}
</p>

                    {/* QUANTITY */}
                    <div className="mt-4 flex items-center gap-3">
                      <button
                        onClick={() =>
                          decreaseQuantity(item.id, item.size)
                        }
                        className="border border-white/20 px-3 py-1 text-xs transition hover:border-white"
                      >
                        -
                      </button>

                      <span className="text-sm">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(item.id, item.size)
                        }
                        className="border border-white/20 px-3 py-1 text-xs transition hover:border-white"
                      >
                        +
                      </button>
                    </div>

                    {/* REMOVE */}
                    <button
                      onClick={() =>
                        removeItem(item.id, item.size)
                      }
                      className="mt-4 w-fit text-[10px] uppercase tracking-[0.25em] text-white/40 transition hover:text-white"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* FOOTER */}
<div className="border-t border-white/10 bg-black/95 px-6 py-6 backdrop-blur-xl">
  <div className="mb-6 flex items-center justify-between">
    <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">
      Subtotal
    </p>

    <p className="text-lg font-medium">
  {convertPrice(subtotal)}
</p>
  </div>

  {items.length > 0 ? (
    <Link
      href="/checkout"
      onClick={closeCart}
      className="
w-full
border
border-white
bg-transparent
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
      Secure Checkout
    </Link>
  ) : (
    <button
      disabled
      className="
        w-full
        cursor-not-allowed
        border
        border-white/10
        bg-white/5
        px-8
        py-5
        text-xs
        uppercase
        tracking-[0.3em]
        text-white/25
      "
    >
      Cart Empty
    </button>
  )}
</div>
      </div>
    </>
  );
}