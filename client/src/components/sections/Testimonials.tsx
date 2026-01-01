import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Regular Customer",
        content: "The best atmosphere in the city. Their oat milk lattes are consistently perfect, and the staff makes you feel like family.",
        rating: 5,
        initials: "SJ"
    },
    {
        name: "David Chen",
        role: "Freelance Designer",
        content: "My favorite 'third space'. Fast Wi-Fi, incredible coffee, and just the right amount of background hum to get work done.",
        rating: 5,
        initials: "DC"
    },
    {
        name: "Elena Rodriguez",
        role: "Book Lover",
        content: "A hidden gem! The cozy corners are perfect for reading. Don't miss out on their almond croissants - they're heavenly.",
        rating: 5,
        initials: "ER"
    },
    {
        name: "Marcus Thorne",
        role: "Coffee Enthusiast",
        content: "The roast quality here is exceptional. You can tell they source their beans with care. A true artisanal experience.",
        rating: 5,
        initials: "MT"
    }
];

export function Testimonials() {
    return (
        <section className="py-24 bg-[#FDFBF7] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="text-5xl md:text-6xl font-heading text-[#6B4423]">What Our Guests Say</h2>
                    <div className="w-24 h-1 bg-[#D4A574] mx-auto opacity-30" />
                </motion.div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full relative"
                >
                    <CarouselContent className="-ml-4">
                        {testimonials.map((t, idx) => (
                            <CarouselItem key={idx} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="h-full py-4"
                                >
                                    <div className="h-full bg-white border border-[#D4A574]/10 rounded-3xl p-8 shadow-[0_10px_40px_-15px_rgba(107,68,35,0.1)] flex flex-col relative group hover:border-[#D4A574]/30 transition-colors">
                                        <Quote className="absolute top-6 right-8 w-12 h-12 text-[#D4A574]/10 group-hover:text-[#D4A574]/20 transition-colors" />

                                        <div className="flex gap-1 mb-6">
                                            {[...Array(t.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-[#D4A574] text-[#D4A574]" />
                                            ))}
                                        </div>

                                        <p className="text-[#2C1810]/80 font-serif italic text-lg leading-relaxed mb-8 flex-grow">
                                            "{t.content}"
                                        </p>

                                        <div className="flex items-center gap-4">
                                            <Avatar className="w-12 h-12 border-2 border-[#D4A574]/20">
                                                <AvatarFallback className="bg-[#F5E6D3] text-[#6B4423] font-bold">
                                                    {t.initials}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <h4 className="font-heading text-xl text-[#6B4423] leading-tight">{t.name}</h4>
                                                <p className="text-sm font-serif text-[#D4A574]">{t.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <div className="flex justify-center gap-4 mt-12">
                        <CarouselPrevious className="static translate-y-0 bg-[#F5E6D3] border-none text-[#6B4423] hover:bg-[#6B4423] hover:text-white transition-all size-12" />
                        <CarouselNext className="static translate-y-0 bg-[#F5E6D3] border-none text-[#6B4423] hover:bg-[#6B4423] hover:text-white transition-all size-12" />
                    </div>
                </Carousel>
            </div>
        </section>
    );
}
