import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/products";
const products = await getProducts();
export default function ShopPage() {
  return (
    <main className="min-h-screen bg-black px-5 py-28 text-white md:px-10">

      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-14">

          <p className="text-[10px] uppercase tracking-[0.4em] text-white/35">
            Made Somehow
          </p>

          <h1 className="mt-4 text-4xl font-semibold uppercase tracking-tight md:text-6xl">
            Shop
          </h1>

          <p className="mt-4 max-w-xl text-white/45">
            Explore the full collection.
          </p>

        </div>

        {/* PRODUCT GRID */}
        <div
          className="
            grid
            grid-cols-1
            gap-10
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>

    </main>
  );
}