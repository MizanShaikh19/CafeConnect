import { motion } from "framer-motion";

export function Preloader() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                transition: { duration: 0.8, ease: "easeInOut" }
            }}
            className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#F5E6D3]"
        >
            <div className="relative">
                {/* Pulsing ring around the logo */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.1, 0.3],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-[-20px] rounded-full border-2 border-[#D4A574]"
                />

                {/* Logo Animation */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        duration: 1,
                        ease: "easeOut",
                    }}
                    className="relative z-10"
                >
                    <img
                        src="/logo.png"
                        alt="The Roasted Bean"
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#D4A574]/20 shadow-2xl"
                    />
                </motion.div>
            </div>

            {/* Loading Text */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-8 flex flex-col items-center gap-2"
            >
                <h2 className="text-3xl md:text-4xl font-heading text-[#6B4423]">The Roasted Bean</h2>
                <div className="flex gap-1.5 mt-2">
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: i * 0.2,
                            }}
                            className="w-1.5 h-1.5 rounded-full bg-[#D4A574]"
                        />
                    ))}
                </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20">
                <p className="text-[#2C1810] font-serif text-[10px] uppercase tracking-[0.3em]">
                    Brewing Excellence since 2024
                </p>
            </div>
        </motion.div>
    );
}
