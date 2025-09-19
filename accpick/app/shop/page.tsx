import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: 1,
    name: "Product One",
    description: "This is the first product description.",
    images: ["/lk.jpeg", "/lk.jpeg", "/GS-AIO.PNG"],
  },
  {
    id: 2,
    name: "Product Two",
    description: "This is the second product description.",
    images: ["/product2.jpg", "/product2-2.jpg"],
  },
  {
    id: 3,
    name: "Product Three",
    description: "This is the third product description.",
    images: ["/product3.jpg", "/product3-2.jpg"],
  },
  {
    id: 4,
    name: "Product Four",
    description: "This is the fourth product description.",
    images: ["/product4.jpg",],
  },
];

export default function ProductsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
