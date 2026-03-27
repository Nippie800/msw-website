import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DropSection from "@/components/DropSection";
import Manifesto from "@/components/Manifesto";
import StorySection from "@/components/StorySection";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <DropSection />
      <Manifesto />
      <StorySection />
    </main>
  );
}