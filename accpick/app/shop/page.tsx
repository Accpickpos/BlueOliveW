import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function ShopPage() {
  return (
    <div className="container mx-auto bg-gray-100 text-gray-900 px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Shop Motherboards</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
