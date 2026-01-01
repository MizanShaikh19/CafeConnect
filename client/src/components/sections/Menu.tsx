import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Menu() {
  const categories = [
    {
      title: "Coffee",
      items: [
        { name: "Espresso", price: "3.50", desc: "Double shot, rich & bold" },
        { name: "Americano", price: "4.00", desc: "Espresso with hot water" },
        { name: "Cappuccino", price: "4.75", desc: "Espresso, steamed milk, foam" },
        { name: "Latte", price: "5.00", desc: "Espresso, steamed milk" },
        { name: "Mocha", price: "5.50", desc: "Espresso, chocolate, milk" },
      ]
    },
    {
      title: "Tea & Others",
      items: [
        { name: "Earl Grey", price: "3.50", desc: "Classic black tea, bergamot" },
        { name: "Chamomile", price: "3.50", desc: "Soothing herbal blend" },
        { name: "Chai Latte", price: "4.75", desc: "Spiced tea with steamed milk" },
        { name: "Hot Chocolate", price: "4.50", desc: "Rich cocoa, whipped cream" },
      ]
    },
    {
      title: "Bakery",
      items: [
        { name: "Croissant", price: "3.95", desc: "Butter or Chocolate" },
        { name: "Muffin", price: "3.50", desc: "Blueberry or Bran" },
        { name: "Scone", price: "3.75", desc: "Served with jam & cream" },
        { name: "Coffee Cake", price: "4.25", desc: "Cinnamon crumble topping" },
      ]
    }
  ];

  return (
    <section id="menu" className="py-32 bg-[#FDFBF7] px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-7xl font-heading text-[#6B4423] mb-4">The Menu</h2>
          <div className="h-px w-full bg-[#D4A574]/40 max-w-xs mx-auto"></div>
          <p className="mt-4 font-serif text-[#D4A574] italic">Hand-crafted beverages and artisan bites</p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {categories.map((cat, idx) => (
              <CarouselItem key={idx} className="pl-4 basis-full md:basis-1/2 lg:basis-1/2">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="h-full"
                >
                  <div className="backdrop-blur-md bg-white/60 p-8 md:p-12 shadow-2xl border border-[#F5E6D3] rounded-3xl h-full flex flex-col">
                    <h3 className="text-4xl font-heading text-[#6B4423] mb-10 flex items-center gap-4">
                      <span className="shrink-0">{cat.title}</span>
                      <div className="h-px bg-[#D4A574]/30 flex-grow" />
                    </h3>
                    <ul className="space-y-8 flex-grow">
                      {cat.items.map((item, itemIdx) => (
                        <motion.li 
                          key={itemIdx} 
                          whileHover={{ x: 5 }}
                          className="group cursor-default"
                        >
                          <div className="flex items-baseline justify-between font-mono text-xl text-[#2C1810]">
                            <span className="font-bold tracking-tight group-hover:text-[#6B4423] transition-colors">{item.name}</span>
                            <div className="flex-grow border-b border-dotted border-[#D4A574]/40 mx-4 opacity-50 relative top-[-6px]"></div>
                            <span className="text-[#D4A574] font-bold">{item.price}</span>
                          </div>
                          <p className="font-serif text-sm text-[#6B4423]/70 mt-1 italic">{item.desc}</p>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-12">
            <CarouselPrevious className="static translate-y-0 bg-[#D4A574] border-none text-[#2C1810] hover:bg-[#6B4423] hover:text-white" />
            <CarouselNext className="static translate-y-0 bg-[#D4A574] border-none text-[#2C1810] hover:bg-[#6B4423] hover:text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
