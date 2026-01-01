import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

// Using placeholders with different tones for visual variety
const posts = [
  "bg-[#6B4423]",
  "bg-[#8B5A2B]",
  "bg-[#A06C35]",
  "bg-[#5A381C]",
  "bg-[#3D2317]",
  "bg-[#D4A574]",
  "bg-[#4D3319]",
  "bg-[#734A26]"
];

export function InstagramWall() {
  return (
    <section className="py-24 bg-[#F5E6D3] text-center px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-5xl font-heading text-[#6B4423]">Follow Our Journey</h2>
          <p className="text-xl font-serif text-[#2C1810]/70 italic">Share your moments #TheRoastedBean</p>
        </motion.div>

        <div className="relative px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {posts.map((bg, idx) => (
                <CarouselItem key={idx} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  <motion.div 
                    whileHover={{ scale: 0.98 }}
                    className={`aspect-square ${bg} relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg border border-white/20`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 text-white z-10">
                      <Instagram className="w-8 h-8" />
                    </div>
                    <div className="w-full h-full opacity-60 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white/50 backdrop-blur-md border-none text-[#6B4423] hover:bg-[#6B4423] hover:text-white" />
            <CarouselNext className="bg-white/50 backdrop-blur-md border-none text-[#6B4423] hover:bg-[#6B4423] hover:text-white" />
          </Carousel>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Button 
            className="bg-[#2C1810] hover:bg-[#6B4423] text-[#F5E6D3] px-10 py-7 rounded-full text-lg font-serif gap-3 shadow-xl transform transition hover:scale-105 active:scale-95"
          >
            <Instagram className="w-6 h-6" /> Follow on Instagram
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
