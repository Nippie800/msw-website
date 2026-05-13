import Image from "next/image";
import { notFound } from "next/navigation";

import { products } from "@/data/products";
import AddToCartSection from "@/components/AddToCartSection";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const soldOut = product.stock <= 0;

  return (
    <section className="bg-black px-5 py-28 text-white md:px-10 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:gap-24">

        {/* LEFT SIDE — PRODUCT IMAGE */}
        <div className="relative overflow-hidden bg-black">

          {soldOut && (
            <div className="absolute left-5 top-5 z-10 border border-white/20 bg-black/80 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-white">
              Sold Out
            </div>
          )}

          <Image
            src={product.images[0]}
            alt={product.name}
            width={1400}
            height={1400}
            priority
            className="h-auto w-full object-contain"
          />
        </div>

        {/* RIGHT SIDE — PRODUCT INFO */}
        <div className="flex flex-col justify-center">

          {/* BRAND LABEL */}
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/45 md:text-xs">
            Made Somehow
          </p>

          {/* PRODUCT NAME */}
          <h1 className="mt-5 text-4xl font-semibold uppercase leading-tight tracking-tight md:text-6xl">
            {product.name}
          </h1>

          {/* PRICE */}
          <p className="mt-6 text-xl text-white/75 md:text-2xl">
            R{product.price.toFixed(2)}
          </p>

          {/* DESCRIPTION */}
          <p className="mt-8 max-w-xl text-sm leading-8 text-white/60 md:text-base">
            {product.description}
          </p>

          {/* ADD TO CART + SIZE SELECTOR */}
          <AddToCartSection product={product} />

          {/* STOCK */}
          <p className="mt-8 text-sm text-white/45">
            {soldOut
              ? "Currently unavailable"
              : `${product.stock} pieces remaining`}
          </p>

        </div>
      </div>
    </section>
  );
}