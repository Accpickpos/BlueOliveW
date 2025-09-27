"use client";

import Image from "next/image";

export default function FeaturesPage() {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center text-white">
      {/* Background Image */}
      <Image
        src="/features.jpg"
        alt="Features background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">Features</h1>
        <p className="text-lg">
          Home <span className="text-blue-400">&raquo; Features</span>
        </p>
      </div>
    </section>
  );
}