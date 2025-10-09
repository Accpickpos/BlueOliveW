"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.id}`}>
      <div className="border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col cursor-pointer">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={200}
          className="object-contain h-48 mx-auto"
        />

        <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="text-green-600 mt-2 text-sm">{product.stock}</p>

        <div className="mt-auto">
          {product.oldPrice && (
            <p className="text-gray-400 line-through">
              R{product.oldPrice.toLocaleString('en-ZA')}
            </p>
          )}
          <p className="text-xl font-bold text-black">
            R{product.price.toLocaleString('en-ZA')}
          </p>
        </div>
      </div>
    </Link>
  );
}
