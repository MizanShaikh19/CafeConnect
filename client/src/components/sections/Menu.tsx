import { motion } from "framer-motion";

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
    <section id="menu" className="py-32 bg-[#FDFBF7] px-4 relative">
      {/* Decorative grain texture/overlay could be here */}
      <div className="max-w-4xl mx-auto backdrop-blur-md bg-white/60 p-8 md:p-20 shadow-2xl border border-[#F5E6D3] relative z-10 rounded-3xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-7xl font-heading text-[#6B4423] mb-4">The Menu</h2>
          <div className="h-px w-full bg-[#D4A574]/40 max-w-xs mx-auto"></div>
          <p className="mt-4 font-serif text-[#D4A574] italic">Hand-crafted beverages and artisan bites</p>
        </motion.div>

        <div className="space-y-20">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-4xl font-heading text-[#6B4423] mb-10 flex items-center gap-4">
                <span className="shrink-0">{cat.title}</span>
                <div className="h-px bg-[#F5E6D3] flex-grow" />
              </h3>
              <ul className="space-y-10">
                {cat.items.map((item, itemIdx) => (
                  <motion.li 
                    key={itemIdx} 
                    whileHover={{ x: 10 }}
                    className="group cursor-default"
                  >
                    <div className="flex items-baseline justify-between font-mono text-xl md:text-2xl text-[#2C1810]">
                      <span className="font-bold tracking-tight group-hover:text-[#6B4423] transition-colors">{item.name}</span>
                      <div className="flex-grow border-b border-dotted border-[#D4A574]/40 mx-4 opacity-50 relative top-[-6px]"></div>
                      <span className="text-[#D4A574]">{item.price}</span>
                    </div>
                    <p className="font-serif text-base text-[#6B4423]/70 mt-2 italic max-w-md">{item.desc}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
           <p className="font-serif text-[#6B4423]/50 italic text-sm">
             * Please inform us of any allergies before ordering.
           </p>
        </div>
      </div>
    </section>
  );
}
