import latteImg from "@assets/generated_images/latte_with_heart_art.png";
import cappuccinoImg from "@assets/generated_images/cappuccino_with_cinnamon.png";
import croissantImg from "@assets/generated_images/fresh_golden_croissant.png";
import { Card, CardContent } from "@/components/ui/card";

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
    <section className="py-24 px-4 bg-[#6B4423] text-[#F5E6D3]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-heading text-[#F5E6D3]">Our Favorites</h2>
          <p className="text-[#D4A574] font-serif text-lg italic">Curated with love, served with passion</p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {items.map((item, i) => (
            <Card key={i} className="group overflow-hidden bg-[#5A381C] border-none rounded-none hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                    <img 
                      src={item.img} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute top-4 left-4 bg-[#D4A574] text-[#2C1810] px-3 py-1 font-serif text-sm font-bold uppercase tracking-wider">
                      {item.badge}
                    </div>
                  </div>
                  <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center space-y-4">
                    <div className="flex justify-between items-baseline border-b border-[#D4A574]/30 pb-4">
                      <h3 className="text-3xl font-heading text-[#F5E6D3]">{item.title}</h3>
                      <span className="text-2xl font-mono text-[#D4A574]">{item.price}</span>
                    </div>
                    <p className="text-lg text-[#F5E6D3]/80 font-serif leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
