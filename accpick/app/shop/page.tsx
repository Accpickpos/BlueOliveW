import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

export default function ShopPage() {
  return (
    <div className="container mx-auto bg-gray-100 text-gray-900 px-6 py-10">
      {/* Hero / Promo Section with Background Image */}
      <div className="relative mb-10 rounded-2xl overflow-hidden shadow-lg">
        <Image
          src="/images/features.jpg"
          alt="Spring Specials"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white py-24 px-6">
          <h2 className="text-4xl font-bold mb-4">Starter Bundle Special Is Here</h2>
          <p className="text-lg mb-6">
            Up to <span className="font-semibold">10% off</span> on selected iterms this week only.
          </p>
          <a
            href="#shop"
            className="inline-block bg-white text-cyan-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Shop Now
          </a>
        </div>
      </div>

      <h1 id="shop" className="text-3xl font-bold mb-8 text-center">
        Shop
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length === 0 ? (
          <p className="text-center col-span-full">No products available.</p>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}
