import Image from "next/image";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";

export default function Home() {
  return (
     <>
      <Hero />
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        <FeatureCard title="Fast" description="Optimized with Next.js for speed." />
        <FeatureCard title="Scalable" description="Built to grow with your business." />
        <FeatureCard title="Secure" description="Modern web security best practices." />
      </section>
    </>
  );
}
