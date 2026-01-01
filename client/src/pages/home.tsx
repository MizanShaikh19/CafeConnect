import { Hero } from "@/components/sections/Hero";
import { Welcome } from "@/components/sections/Welcome";
import { SignatureDrinks } from "@/components/sections/SignatureDrinks";
import { Gallery } from "@/components/sections/Gallery";
import { Menu } from "@/components/sections/Menu";
import { VisitUs } from "@/components/sections/VisitUs";
import { InstagramWall } from "@/components/sections/InstagramWall";
import { Footer } from "@/components/layout/Footer";
import { CreatorBadge } from "@/components/layout/CreatorBadge";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-serif selection:bg-[#D4A574] selection:text-[#2C1810]">
      <Hero />
      <Welcome />
      <SignatureDrinks />
      <Gallery />
      <Menu />
      <VisitUs />
      <InstagramWall />
      <Footer />
      <CreatorBadge />
    </div>
  );
}
