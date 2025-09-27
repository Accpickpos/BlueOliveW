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
    description: "Fanless Design with Intel® i5 4250U 2,60Ghz CPU",
    image: "/allin.png",
    price: 3799,
    oldPrice: 4999,
    stock: "In stock with Acppick",
  },
  {
    id: 2,
    name: "All-in-One PC AIO-2200",
    description: "AMD AM4 Socket A520 Micro-ATX Desktop Motherboard",
    image: "/all.jpg",
    price: 1299,
    oldPrice: 2249,
    stock: "In stock with Accpick",
  },
  {
    id: 3,
    name: "Gigabyte B850 EAGLE WIFI6E",
    description: "AMD B850 Ryzen Socket AM5 ATX Desktop Motherboard",
    image: "/lk.jpeg",
    price: 4399,
    oldPrice: 5249,
    stock: "In stock with Accpick",
  },
  {
    id: 4,
    name: "MSI PRO H610M-S DDR4",
    description: "Intel H610 Raptor Lake LGA 1700 Micro-ATX Desktop",
    image: "/lk.jpeg",
    price: 1549,
    oldPrice: 1999,
    stock: "In stock with Accpick",
  },
];
