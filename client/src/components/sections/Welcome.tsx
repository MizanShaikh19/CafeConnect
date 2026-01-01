import { motion } from "framer-motion";

export function Welcome() {
  return (
    <section id="welcome" className="py-24 px-4 md:px-8 bg-[#F5E6D3] text-[#2C1810] overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-5xl md:text-6xl font-heading text-[#6B4423]">Welcome Home</h2>
          <div className="w-24 h-1 bg-[#D4A574] mx-auto rounded-full" />
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl leading-relaxed font-serif text-[#2C1810]/80"
        >
          Nestled in the heart of the city, The Roasted Bean began as a simple dream: to create a space where time slows down. We roast our beans in small batches, bake our pastries fresh every morning, and believe that the perfect cup of coffee is best enjoyed with good company.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative py-12 px-8 md:px-16 mt-8 backdrop-blur-sm bg-white/30 border border-white/40 shadow-xl rounded-2xl"
        >
          <span className="absolute top-4 left-4 text-8xl text-[#D4A574]/30 font-serif leading-none">"</span>
          <blockquote className="text-3xl md:text-4xl font-heading leading-relaxed text-[#6B4423]">
            We believe in warmth, community, and the magic that happens over a steaming cup of coffee.
          </blockquote>
          <span className="absolute bottom-4 right-4 text-8xl text-[#D4A574]/30 font-serif leading-none rotate-180">"</span>
          <cite className="block mt-8 text-lg font-serif not-italic text-[#D4A574] font-bold tracking-widest uppercase">— Eleanor, Owner & Head Barista</cite>
        </motion.div>
      </div>
    </section>
  );
}
