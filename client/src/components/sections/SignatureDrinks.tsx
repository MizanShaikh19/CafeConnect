import latteImg from "@assets/generated_images/latte_with_heart_art.png";
import cappuccinoImg from "@assets/generated_images/cappuccino_with_cinnamon.png";
import croissantImg from "@assets/generated_images/fresh_golden_croissant.png";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const items = [
  {
    title: "Signature Latte",
    desc: "Our house espresso blend with silky steamed milk and incredible latte art.",
    price: "$5.50",
    img: latteImg,
    badge: "Bestseller"
  },
  {
    title: "Spiced Cappuccino",
    desc: "A warm hug in a mug. Dusted with premium Ceylon cinnamon and nutmeg.",
    price: "$4.75",
    img: cappuccinoImg,
    badge: "Staff Pick"
  },
  {
    title: "Golden Croissant",
    desc: "Baked fresh every morning at 5 AM. Buttery, flaky, and absolutely perfect.",
    price: "$3.95",
    img: croissantImg,
    badge: "Fresh Daily"
  }
];

export function SignatureDrinks() {
  return (
    <section className="py-32 px-4 bg-[#6B4423] text-[#F5E6D3] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2C1810]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <h2 className="text-5xl md:text-6xl font-heading text-[#F5E6D3]">Our Favorites</h2>
          <p className="text-[#D4A574] font-serif text-lg italic">Curated with love, served with passion</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <Card className="group overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-500 shadow-2xl">
                <CardContent className="p-0">
                  <div className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} h-full`}>
                    <div className="w-full md:w-1/2 h-80 md:h-auto overflow-hidden relative">
                      <img 
                        src={item.img} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                      />
                      <div className="absolute top-6 left-6 backdrop-blur-lg bg-black/40 text-[#F5E6D3] border border-white/20 px-4 py-1.5 font-serif text-sm font-bold uppercase tracking-widest rounded-full">
                        {item.badge}
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center space-y-6">
                      <div className="flex justify-between items-baseline border-b border-[#D4A574]/30 pb-6">
                        <h3 className="text-4xl font-heading text-[#F5E6D3]">{item.title}</h3>
                        <span className="text-3xl font-mono text-[#D4A574]">{item.price}</span>
                      </div>
                      <p className="text-xl text-[#F5E6D3]/80 font-serif leading-relaxed">
                        {item.desc}
                      </p>
                      <motion.div 
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-2 text-[#D4A574] font-serif font-bold cursor-pointer group/link"
                      >
                        Order Now 
                        <span className="transition-transform group-hover/link:translate-x-1">→</span>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
