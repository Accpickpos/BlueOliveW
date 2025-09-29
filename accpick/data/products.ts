// data/products.ts
export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  oldPrice?: number;
  stock: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "15″ All-in-One Touch Terminal",
    description: "All-in-One POS Terminal with Intel Celeron J1900",
    image: "/allin.png",
    price: 3799,
    oldPrice: 4999,
    stock: "In stock with Acppick",
  },
  {
    id: 2,
    name: "All-in-One PC AIO-2200",
    description: "All-in-One POS Terminal ",
    image: "/all.jpg",
    price: 1299,
    oldPrice: 2249,
    stock: "In stock with Accpick",
  },
  {
    id: 3,
    name: "SEWOO LK-P21",
    description: "Thermal Receipt Printer",
    image: "/lk.jpeg",
    price: 4399,
    oldPrice: 5249,
    stock: "In stock with Accpick",
  },
  {
    id: 4,
    name: "SWEOO LK-P31",
    description: "Thermal Receipt Printer",
    image: "/lk.jpeg",
    price: 1549,
    oldPrice: 1999,
    stock: "In stock with Accpick",
  },
];
