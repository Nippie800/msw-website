import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DropSection from "@/components/DropSection";
import Manifesto from "@/components/Manifesto";
import StorySection from "@/components/StorySection";
import Footer from "@/components/Footer";
import StarBackground from "@/components/StarBackground";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <StarBackground />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <DropSection />
        <Manifesto />
        <StorySection />
        <Footer />
      </div>
    </main>
  );
}