"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

export default function HeroCarousel() {
  const slides = [
    {
      image: "/banner1.jpg",
      title: "Welcome to AccpickPOS",
      subtitle: "From all aspects in your day-to-day business since 1988",
      text: "We go beyond Point of Sale with support",
    },
    {
      image: "/banner2.jpg",
      title: "Modern POS for Your Business",
      subtitle: "Discover the perfect solution for retail & wholesale",
      text: "Trusted by businesses across South Africa",
    },
    {
      image: "/banner3.jpg",
      title: "Accpick Features",
      subtitle: "Smart tools to help you grow",
      text: "Inventory, sales, reporting and more",
    },
  ];

  return (
    <section className="relative w-full h-[90vh]">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet custom-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active custom-bullet-active",
        }}
        autoplay={{ delay: 8000 }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={i === 0}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
                <p className="text-sm sm:text-lg text-blue-200 mb-2 uppercase tracking-wider">
                  {slide.subtitle}
                </p>
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-cyan-300 mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 max-w-2xl">
                  {slide.text}
                </p>
                <div className="flex gap-4">
                  <Link
                    href="/contact"
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/features"
                    className="px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition"
                  >
                    See Features
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        <div className="swiper-button-prev custom-nav"></div>
        <div className="swiper-button-next custom-nav"></div>
      </Swiper>
    </section>
  );
}
