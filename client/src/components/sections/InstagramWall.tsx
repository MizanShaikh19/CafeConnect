import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

// Using placeholders with different tones for visual variety
const posts = [
  "bg-[#6B4423]",
  "bg-[#8B5A2B]",
  "bg-[#A06C35]",
  "bg-[#5A381C]",
  "bg-[#3D2317]",
  "bg-[#D4A574]"
];

export function InstagramWall() {
  return (
    <section className="py-20 bg-[#F5E6D3] text-center px-4">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="space-y-2">
          <h2 className="text-4xl font-heading text-[#6B4423]">Follow Our Journey</h2>
          <p className="text-xl font-serif text-[#2C1810]/70 italic">Share your moments #TheRoastedBean</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {posts.map((bg, idx) => (
            <div key={idx} className={`aspect-square ${bg} relative group cursor-pointer overflow-hidden`}>
               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 text-white">
                 <Instagram className="w-8 h-8" />
               </div>
               {/* In a real app, these would be images */}
               <div className="w-full h-full opacity-50 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=300&q=80')] bg-cover bg-center"></div>
            </div>
          ))}
        </div>

        <Button 
          className="bg-[#2C1810] hover:bg-[#6B4423] text-[#F5E6D3] px-8 py-6 rounded-none text-lg font-serif gap-2"
        >
          <Instagram className="w-5 h-5" /> Follow on Instagram
        </Button>
      </div>
    </section>
  );
}
