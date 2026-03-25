import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DropSection from "@/components/DropSection";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <DropSection />
    </main>
  );
}