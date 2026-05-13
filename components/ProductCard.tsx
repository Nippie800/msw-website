import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  product: {
    id: string;
    name: string;
    price: number;
    images: string[];
    stock: number;
  };
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  const soldOut = product.stock <= 0;

  return (
    <div className="group min-w-[220px] sm:min-w-[260px] md:min-w-[420px]">
      <Link
        href={`/shop/${product.id}`}
        className="block"
      >
        {/* IMAGE */}
        <div className="relative overflow-hidden bg-black">

          {/* SOLD OUT */}
          {soldOut && (
            <div className="absolute left-4 top-4 z-10 border border-white/20 bg-black/80 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white">
              Sold Out
            </div>
          )}

          <Image
            src={product.images[0]}
            alt={product.name}
            width={1200}
            height={1200}
            className="
              h-auto
              w-full
              object-contain
              transition
              duration-700
              ease-out
              group-hover:scale-[1.03]
            "
          />
        </div>

        {/* INFO */}
        <div className="mt-5 space-y-2">
          <h3 className="text-[11px] uppercase tracking-[0.2em] text-white">
            {product.name}
          </h3>

          <p className="text-[11px] text-white/60">
            R{product.price.toFixed(2)}
          </p>

          <p
            className="
              inline-block
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-white/70
              transition
              duration-300
              group-hover:text-white
            "
          >
            View Item
          </p>
        </div>
      </Link>
    </div>
  );
}