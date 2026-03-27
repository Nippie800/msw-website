import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={product.href}
      className="group block w-[190px] md:w-[240px]"
    >
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 transition group-hover:shadow-[0_10px_40px_rgba(255,255,255,0.08)]">
        <div className="flex items-center justify-center bg-black">
          <Image
            src={product.image}
            alt={product.name}
            width={700}
            height={700}
            className="h-auto w-full object-contain transition duration-500 ease-out group-hover:scale-105"
          />
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-sm font-medium uppercase tracking-[0.12em] text-white">
          {product.name}
        </h3>

        <p className="mt-1 text-sm text-white/65">{product.price}</p>

        <span className="mt-2 inline-block text-xs uppercase tracking-[0.22em] text-white/70 transition group-hover:text-white">
          View Item
        </span>
      </div>
    </Link>
  );
}