"use client";

import Image from "next/image";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import Button from "@/components/Button";

export default function Home() {
  return (
     <>
      <Hero />
      <section className="grid grid-cols-1 bg-gray-100 text-gray-900 md:grid-cols-3 gap-6 p-8">
        <FeatureCard title="Fast" description="Optimized for speed and performance." />
        <FeatureCard title="Scalable" description="Built to grow with your business." />
        <FeatureCard title="Secure" description="Built to protect your data." />
      </section>

      <section className="flex flex-col md:flex-row items-center mt-3 gap-8 md:gap-16 px-6 md:px-16 py-12 border-2 border-gray-300 rounded-2xl">
      {/* Left Column: Image */}
      <div className="flex-1 w-full md:w-1/2">
        <Image
          src="/addons-r12.png"
          alt="Point of Sale Addons"
          width={558}
          height={558}
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Right Column: Text */}
      <div className="flex-1 w-full md:w-1/2 flex flex-col justify-center gap-6 text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          The possibilities are beyond your imagination
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          Embark on a journey of unparalleled efficiency and innovation with our state-of-the-art point of sale software, where our solution is crafted to exceed your expectations. Picture a realm where transactions seamlessly integrate with your unique business processes, streamlining operations and boosting productivity. Our software is more than just a tool; it's a catalyst for transformation. We offer a suite of features that cater to the specific needs of your industry. Embrace a future where your operations are optimised and possibilities are limitless. Your business is unique – our Point-Of-Sale Software is beyond your imagination.
        </p>
        <button className="self-start md:self-start px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>
    </section>

      <section className="flex justify-center gap-8 py-8">
        <div className="flex items-center justify-center">
          <img
            src="/tyre.png"
            alt="Tyre"
            className="w-20 h-auto"
          />
        </div>

        <div className="flex items-center justify-center">
          <img
            src="/radiator.png"
            alt="Radiator"
            className="w-20 h-auto"
          />
        </div>

        <div className="flex items-center justify-center">
          <img
            src="/battery.png"
            alt="Battery"
            className="w-20 h-auto"
          />
        </div>

        <div className="flex items-center justify-center">
          <img
            src="/lpg.png"
            alt="LPG"
            className="w-20 h-auto"
          />
        </div>

        <div className="flex items-center justify-center">
          <img
            src="/exhaust.png"
            alt="Exhoust"
            className="w-30 h-auto"
          />
        </div>
      </section>

      <section className="px-4 py-8">
        <p className="text-center text-lg text-black font-semibold leading-relaxed">
          Used by Tyre Shops, Exhaust, Parts, Spares, Petrol Station, LPG Gas,
          Radiators, Venter Trailers, Hotels,
          <br />
          Veterinary wholesalers, Hardware, Spares, Liquor, Electronics,
          Engineering, Manufacturing, Paint Coatings and many more!!
        </p>
      </section>

     <section className="flex flex-col md:flex-row items-center justify-between bg-blue-400 border m-8 rounded-4xl p-8 text-gray-300 gap-6">
      <div className="text-3xl md:text-4xl font-semibold">
        Request Quote to Get Started
        <p className="text-lg mt-2">
          Register today & start exploring the endless possibilities with Accpick.
        </p>
      </div>
      <Button onClick={() => console.log("Saved")} className="cursor-pointer" variant="primary" size="lg">
        Get Started
      </Button>
    </section>
    </>
  );
}
