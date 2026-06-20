import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DropSection from "@/components/DropSection";
import Manifesto from "@/components/Manifesto";
import StorySection from "@/components/StorySection";
import LookbookSection from "@/components/LookbookSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-black text-white">

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <DropSection />
        <Manifesto />
        <StorySection />
        <LookbookSection />
        <Footer />
      </div>

    </main>
  );
}