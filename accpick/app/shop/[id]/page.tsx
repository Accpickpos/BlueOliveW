import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params; // ✅ await params
  const productId = parseInt(id, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) return notFound();

  return (
    <div className="container mx-auto bg-gray-100 text-gray-900 px-6 py-10">
      <Link href="/shop" className="text-blue-600 hover:underline">
        ← Back to Shop
      </Link>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={400}
            className="object-contain rounded-lg shadow"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="mt-2 text-gray-600">{product.description}</p>
          <p className="mt-4 text-green-600">{product.stock}</p>

          <div className="mt-6">
            {product.oldPrice && (
              <p className="text-gray-400 line-through text-lg">
                R{product.oldPrice.toLocaleString()}
              </p>
            )}
            <p className="text-3xl font-bold text-black">
              R{product.price.toLocaleString()}
            </p>
          </div>

          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
}
