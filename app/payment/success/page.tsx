"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type OrderData = {
  orderNumber: string;
  items: {
    name: string;
    quantity: number;
    size: string;
    price: number;
  }[];
  total: number;
};

export default function SuccessPage() {
  const [order, setOrder] =
    useState<OrderData | null>(null);

  useEffect(() => {
    const storedOrder =
      localStorage.getItem("msw_last_order");

    if (storedOrder) {
      setOrder(JSON.parse(storedOrder));
    }
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 py-24 text-white">
      <div className="w-full max-w-2xl border border-white/10 bg-white/[0.02] p-8 md:p-12">

        <p className="text-[10px] uppercase tracking-[0.4em] text-white/35">
          Order Confirmed
        </p>

        <h1 className="mt-5 text-4xl font-semibold uppercase tracking-tight md:text-6xl">
          Thank You
        </h1>

        <p className="mt-6 text-sm leading-7 text-white/60">
          Your order has been successfully placed.
          A confirmation reference has been generated below.
        </p>

        {order && (
          <>
            {/* ORDER NUMBER */}
            <div className="mt-10 border border-white/10 bg-white/[0.03] p-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                Order Number
              </p>

              <p className="mt-3 text-2xl font-semibold tracking-wide">
                {order.orderNumber}
              </p>
            </div>

            {/* ITEMS */}
            <div className="mt-10 space-y-5 border-t border-white/10 pt-8">
              {order.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm uppercase tracking-[0.15em] text-white">
                      {item.name}
                    </p>

                    <p className="mt-1 text-sm text-white/45">
                      Size {item.size} · Qty {item.quantity}
                    </p>
                  </div>

                  <p className="text-sm text-white">
                    R{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            {/* TOTAL */}
            <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-8">
              <p className="text-[11px] uppercase tracking-[0.3em] text-white/45">
                Total Paid
              </p>

              <p className="text-3xl font-semibold">
                R{order.total.toFixed(2)}
              </p>
            </div>
          </>
        )}

        <p className="mt-10 text-xs leading-6 text-white/35">
          Please keep your order number for future support and order tracking.
        </p>

        <Link
          href="/"
          className="
            mt-10
            inline-flex
            items-center
            justify-center
            border
            border-white
            px-8
            py-4
            text-xs
            uppercase
            tracking-[0.35em]
            transition
            duration-300
            hover:bg-white
            hover:text-black
          "
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}