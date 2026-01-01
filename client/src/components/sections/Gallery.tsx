import baristaImg from "@assets/generated_images/barista_pouring_coffee.png";
import cornerImg from "@assets/generated_images/cozy_cafe_corner.png";
import beansImg from "@assets/generated_images/roasted_coffee_beans.png";
import heroBg from "@assets/generated_images/cozy_dark_cafe_interior_hero_background.png"; // Reusing for gallery

const images = [
  { src: baristaImg, alt: "Pour over brewing" },
  { src: cornerImg, alt: "Reading corner" },
  { src: beansImg, alt: "Fresh beans" },
  { src: heroBg, alt: "Cafe vibe" },
];

export function Gallery() {
  return (
    <section className="py-24 bg-[#F5E6D3]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Gallery Grid */}
        <div className="grid grid-cols-2 gap-4">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`overflow-hidden rounded-sm shadow-md ${idx % 2 === 1 ? 'mt-8' : ''}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500 sepia-[.2]"
              />
            </div>
          ))}
        </div>

        {/* Right: Text */}
        <div className="space-y-8 lg:pl-12">
          <h2 className="text-5xl font-heading text-[#6B4423]">A Cozy Escape</h2>
          <div className="space-y-6 text-[#2C1810]/80 font-serif text-lg leading-relaxed">
            <p>
              Whether you're looking for a quiet corner to finish that book, a warm space to catch up with old friends, or just a moment of solitude with your thoughts, our doors are always open.
            </p>
            <p>
              The aroma of freshly ground beans, the soft hum of conversation, and the gentle clinking of ceramic cups create a symphony of comfort that we're proud to call our atmosphere.
            </p>
          </div>
          <div className="pt-4">
             <span className="inline-block border-b-2 border-[#6B4423] text-[#6B4423] font-bold pb-1 cursor-pointer hover:text-[#D4A574] hover:border-[#D4A574] transition-colors">
               View Full Gallery
             </span>
          </div>
        </div>

      </div>
    </section>
  );
}
