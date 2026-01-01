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
    <section id="menu" className="py-24 bg-[#FFF8F0] px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 shadow-xl border border-[#F5E6D3]">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-heading text-[#6B4423] mb-4">Menu</h2>
          <div className="h-px w-full bg-[#D4A574]/40 max-w-xs mx-auto"></div>
        </div>

        <div className="space-y-16">
          {categories.map((cat, idx) => (
            <div key={idx}>
              <h3 className="text-3xl font-heading text-[#6B4423] mb-8 border-b-2 border-[#F5E6D3] inline-block pr-8">
                {cat.title}
              </h3>
              <ul className="space-y-6">
                {cat.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="group">
                    <div className="flex items-baseline justify-between font-mono text-lg md:text-xl text-[#2C1810]">
                      <span className="font-bold tracking-tight">{item.name}</span>
                      <div className="flex-grow border-b border-dotted border-[#D4A574] mx-4 opacity-50 relative top-[-6px]"></div>
                      <span>{item.price}</span>
                    </div>
                    <p className="font-serif text-sm text-[#6B4423]/70 mt-1 italic">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
