import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AdvancedSearch from "@/components/AdvancedSearch";
import PropertyShowcase from "@/components/PropertyShowcase";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-navy">
      <Navbar />
      <Hero />
      <AdvancedSearch />
      <Features />
      <PropertyShowcase />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
