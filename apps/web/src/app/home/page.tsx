import { Footer } from "@/components/Landing/Footer";
import { HeroSection } from "@/components/Landing/HeroSection";
import { NavBar } from "@/components/Landing/NavBar";
import { Navigation } from "@/components/Landing/Navigation";
import { OfferSection } from "@/components/Landing/OfferSection";

if ("development" === "development") {
  const originalConsoleError = console.error;

  console.error = (...args) => {
    if (
      args[0] &&
      args[0].includes("Encountered two children with the same key")
    ) {
      return;
    }
  };
}

const page = () => {
  return (
    <section suppressHydrationWarning>
      <NavBar />
      <Navigation />
      <HeroSection />
      <OfferSection />
      <Footer />
    </section>
  );
};
export default page;
