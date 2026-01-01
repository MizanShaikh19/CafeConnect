import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/cozy_dark_cafe_interior_hero_background.png";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background with darker overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          src={heroBg}
          alt="Cozy Cafe Interior"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src="/logo.png" alt="The Roasted Bean Logo" className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-[#D4A574]/30 shadow-2xl" />
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#F5E6D3] font-heading drop-shadow-2xl mb-4">
            The Roasted Bean
          </h1>
          <p className="text-lg md:text-2xl text-[#F5E6D3]/90 font-serif tracking-wide max-w-2xl mx-auto">
            Where every cup tells a story and every corner feels like home.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-8"
        >
          <Button
            size="lg"
            className="bg-[#D4A574] hover:bg-[#C09060] text-[#2C1810] font-serif text-lg px-8 py-6 rounded-none shadow-xl transform transition hover:scale-105 active:scale-95"
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Menu
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[#F5E6D3] text-[#F5E6D3] backdrop-blur-md bg-white/10 hover:bg-[#F5E6D3] hover:text-[#2C1810] font-serif text-lg px-8 py-6 rounded-none transition shadow-xl transform hover:scale-105 active:scale-95"
            onClick={() => document.getElementById('visit-us')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Visit Us
          </Button>
        </motion.div>
      </div>

      {/* Glassmorphism scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 backdrop-blur-md bg-white/10 border border-white/20 p-2 rounded-full cursor-pointer hidden sm:block"
        onClick={() => document.getElementById('welcome')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-1 h-8 bg-[#F5E6D3]/50 rounded-full mx-auto" />
      </motion.div>
    </section>
  );
}
