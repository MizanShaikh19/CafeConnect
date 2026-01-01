import baristaImg from "@assets/generated_images/barista_pouring_coffee.png";
import cornerImg from "@assets/generated_images/cozy_cafe_corner.png";
import beansImg from "@assets/generated_images/roasted_coffee_beans.png";
import heroBg from "@assets/generated_images/cozy_dark_cafe_interior_hero_background.png";
import { motion } from "framer-motion";

const images = [
  { src: baristaImg, alt: "Pour over brewing" },
  { src: cornerImg, alt: "Reading corner" },
  { src: beansImg, alt: "Fresh beans" },
  { src: heroBg, alt: "Cafe vibe" },
];

export function Gallery() {
  return (
    <section className="py-32 bg-[#F5E6D3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Gallery Grid */}
        <div className="grid grid-cols-2 gap-6">
          {images.map((img, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={`overflow-hidden rounded-2xl shadow-2xl relative group ${idx % 2 === 1 ? 'mt-12' : ''}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-72 object-cover hover:scale-110 transition-transform duration-700 sepia-[.1]"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Right: Text */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-10 lg:pl-16"
        >
          <div className="space-y-4">
            <h2 className="text-6xl font-heading text-[#6B4423]">A Cozy Escape</h2>
            <div className="w-20 h-1 bg-[#D4A574]" />
          </div>
          <div className="space-y-8 text-[#2C1810]/80 font-serif text-xl leading-relaxed">
            <p>
              Whether you're looking for a quiet corner to finish that book, a warm space to catch up with old friends, or just a moment of solitude with your thoughts, our doors are always open.
            </p>
            <p>
              The aroma of freshly ground beans, the soft hum of conversation, and the gentle clinking of ceramic cups create a symphony of comfort that we're proud to call our atmosphere.
            </p>
          </div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="pt-6 inline-block"
          >
             <span className="inline-block border-2 border-[#6B4423] text-[#6B4423] font-serif font-bold py-4 px-10 rounded-full cursor-pointer hover:bg-[#6B4423] hover:text-white transition-all duration-300 shadow-lg">
               Explore Atmosphere
             </span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
