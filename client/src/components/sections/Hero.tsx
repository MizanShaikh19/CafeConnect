import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/cozy_dark_cafe_interior_hero_background.png";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background with darker overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src={heroBg} 
          alt="Cozy Cafe Interior" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto space-y-8 animate-in fade-in zoom-in duration-1000">
        <h1 className="text-6xl md:text-8xl lg:text-9xl text-[#F5E6D3] font-heading drop-shadow-lg transform -rotate-2">
          The Roasted Bean
        </h1>
        <p className="text-xl md:text-2xl text-[#F5E6D3]/90 font-serif tracking-wide max-w-2xl mx-auto">
          Where every cup tells a story and every corner feels like home.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
          <Button 
            size="lg" 
            className="bg-[#D4A574] hover:bg-[#C09060] text-[#2C1810] font-serif text-lg px-8 py-6 rounded-none"
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Menu
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-[#F5E6D3] text-[#F5E6D3] hover:bg-[#F5E6D3] hover:text-[#2C1810] font-serif text-lg px-8 py-6 rounded-none bg-transparent"
            onClick={() => document.getElementById('visit-us')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Visit Us
          </Button>
        </div>
      </div>
    </section>
  );
}
