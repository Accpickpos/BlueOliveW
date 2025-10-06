"use client";

import Image from "next/image";

export default function FeaturesPage() {
  const products = [
    {
      title: "AccpickPOS Stock Control",
      img: "/stock.png",
      link: "/StockC.pdf",
      gradient: "bg-gradient-to-br from-[#071045] via-[#172b84] to-[#1d536e]",
    },
    {
      title: "AccpickPOS Point-of-Sale",
      img: "/posale.png",
      link: "/PointofSale.pdf",
    },
    {
      title: "AccpickPOS Cash Book",
      img: "/cash.png",
      link: "/CashBook-1.pdf",
    },
    {
      title: "AccpickPOS Creditors",
      img: "/creditors.png",
      link: "/Creditors.pdf",
    },
    {
      title: "AccpickPOS Debtors",
      img: "/debtors.png",
      link: "/Debtors.pdf",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-gray-100">
        <Image
          src="/features.jpg"
          alt="Features background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Features</h1>
        </div>
      </section>

      {/* Products Grid */}
      <main className="bg-gray-50 min-h-screen py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            AccpickPOS Modules
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((item, index) => (
              <div
                key={index}
                className={`rounded-2xl shadow-md border border-gray-200 p-6 flex flex-col items-center text-center ${
                  item.gradient || "bg-white"
                }`}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={350}
                  height={350}
                  className="rounded-xl object-contain mb-6"
                />
                <h3
                  className={`text-xl font-semibold mb-4 ${
                    item.gradient ? "text-white" : "text-gray-900"
                  }`}
                >
                  {item.title}
                </h3>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-5 rounded-lg"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
