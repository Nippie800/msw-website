"use client";

import { useCartStore } from "@/store/cart-store";
import Image from "next/image";
import { useState } from "react";

export default function CheckoutPage() {
  const items = useCartStore((state) => state.items);

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
const [loading, setLoading] = useState(false);
const handlePayment = async () => {
  try {
    setLoading(true);

    const response = await fetch("/api/payfast", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "MSW Customer",
        email: "customer@email.com",
        total: totalPrice,
      }),
    });

    const data = await response.json();

    if (data.url) {
      window.location.href = data.url;
    }
  } catch (error) {
    console.error(error);
    alert("Payment failed.");
  } finally {
    setLoading(false);
  }
};
  return (
    <main className="min-h-screen bg-black px-4 pb-24 pt-28 text-white sm:px-6 md:px-10 md:pt-36">
      <div className="mx-auto grid max-w-[1600px] gap-14 lg:grid-cols-[1fr_460px] lg:gap-24">

        {/* LEFT SIDE */}
        <div className="max-w-3xl">
          {/* LABEL */}
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/35">
            Checkout
          </p>

          {/* TITLE */}
          <h1 className="mt-5 text-4xl font-semibold uppercase leading-none tracking-tight sm:text-5xl md:text-7xl">
            Secure Checkout
          </h1>

          {/* SUBTEXT */}
          <p className="mt-6 max-w-xl text-sm leading-7 text-white/50 md:text-base">
            Complete your order securely. Built for the ones who keep moving,
            one way or another.
          </p>

          {/* FORM */}
          <div className="mt-16 space-y-14">

            {/* CONTACT */}
            <div>
              <h2 className="mb-6 text-[11px] uppercase tracking-[0.3em] text-white/55">
                Contact Details
              </h2>

              <div className="grid gap-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="
                    border border-white/10
                    bg-white/[0.02]
                    px-5
                    py-5
                    text-sm
                    tracking-wide
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-white/25
                    focus:border-white
                    focus:bg-white/[0.03]
                  "
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="
                    border border-white/10
                    bg-white/[0.02]
                    px-5
                    py-5
                    text-sm
                    tracking-wide
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-white/25
                    focus:border-white
                    focus:bg-white/[0.03]
                  "
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="
                    border border-white/10
                    bg-white/[0.02]
                    px-5
                    py-5
                    text-sm
                    tracking-wide
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-white/25
                    focus:border-white
                    focus:bg-white/[0.03]
                  "
                />
              </div>
            </div>

            {/* SHIPPING */}
            <div>
              <h2 className="mb-6 text-[11px] uppercase tracking-[0.3em] text-white/55">
                Shipping Address
              </h2>

              <div className="grid gap-5">
                <input
                  type="text"
                  placeholder="Street Address"
                  className="
                    border border-white/10
                    bg-white/[0.02]
                    px-5
                    py-5
                    text-sm
                    tracking-wide
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-white/25
                    focus:border-white
                    focus:bg-white/[0.03]
                  "
                />

                <input
                  type="text"
                  placeholder="City"
                  className="
                    border border-white/10
                    bg-white/[0.02]
                    px-5
                    py-5
                    text-sm
                    tracking-wide
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-white/25
                    focus:border-white
                    focus:bg-white/[0.03]
                  "
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Province"
                    className="
                      border border-white/10
                      bg-white/[0.02]
                      px-5
                      py-5
                      text-sm
                      tracking-wide
                      text-white
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-white/25
                      focus:border-white
                      focus:bg-white/[0.03]
                    "
                  />

                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="
                      border border-white/10
                      bg-white/[0.02]
                      px-5
                      py-5
                      text-sm
                      tracking-wide
                      text-white
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-white/25
                      focus:border-white
                      focus:bg-white/[0.03]
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="h-fit border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl md:p-8 lg:sticky lg:top-28">

          {/* TITLE */}
          <h2 className="text-[11px] uppercase tracking-[0.35em] text-white/45">
            Order Summary
          </h2>

          {/* ITEMS */}
          <div className="mt-8 space-y-7">
            {items.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex items-start gap-5"
              >
                {/* IMAGE */}
                <div className="relative h-28 w-24 overflow-hidden bg-black md:h-32 md:w-28">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* INFO */}
                <div className="flex-1">
                  <h3 className="text-[11px] uppercase tracking-[0.22em] text-white">
                    {item.name}
                  </h3>

                  <p className="mt-3 text-sm text-white/45">
                    Size: {item.size}
                  </p>

                  <p className="mt-1 text-sm text-white/45">
                    Qty: {item.quantity}
                  </p>
                </div>

                {/* PRICE */}
                <p className="text-sm font-medium text-white">
                  R{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          {/* TOTAL */}
          <div className="mt-10 border-t border-white/10 pt-7">
            <div className="flex items-center justify-between">
              <p className="text-[11px] uppercase tracking-[0.25em] text-white/45">
                Total
              </p>

              <p className="text-3xl font-semibold tracking-tight">
                R{totalPrice.toFixed(2)}
              </p>
            </div>

           <button
  onClick={handlePayment}
  disabled={loading || items.length === 0}
  className="
    mt-8
    flex
    w-full
    items-center
    justify-center
    border
    border-white
    bg-white
    px-6
    py-5
    text-xs
    font-medium
    uppercase
    tracking-[0.35em]
    text-black
    transition-all
    duration-300
    hover:scale-[1.01]
    hover:bg-transparent
    hover:text-white
    active:scale-[0.99]
    disabled:cursor-not-allowed
    disabled:border-white/10
    disabled:bg-white/5
    disabled:text-white/30
  "
>
  {loading ? "Redirecting..." : "Continue To Payment"}
</button>
            {/* SECURITY */}
            <p className="mt-5 text-center text-xs text-white/30">
              Secure payment powered by PayFast
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}