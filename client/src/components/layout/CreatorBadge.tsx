import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CreatorBadge() {
    const [isExpanded, setIsExpanded] = useState(false);

    const creatorInfo = {
        name: "Mizan Shaikh",
        github: "https://github.com/MizanShaikh19",
        linkedin: "https://www.linkedin.com/in/almizanshaikh1912",
        email: "almizanshaikh6@gmail.com",
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3 pointer-events-none">
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 0.8, y: 20, filter: "blur(10px)" }}
                        className="pointer-events-auto overflow-hidden rounded-2xl border border-[#D4A574]/30 bg-[#1A0F0A]/80 backdrop-blur-xl shadow-2xl p-5 min-w-[260px]"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h4 className="text-[#F5E6D3] font-heading text-xl">Design & Dev</h4>
                                <p className="text-[#D4A574] text-xs font-serif uppercase tracking-widest leading-none mt-1">
                                    By {creatorInfo.name}
                                </p>
                            </div>
                            <button
                                onClick={() => setIsExpanded(false)}
                                className="text-[#F5E6D3]/40 hover:text-[#F5E6D3] transition-colors"
                                aria-label="Close"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <p className="text-[#F5E6D3]/70 text-sm font-serif italic">
                                Get a premium website like this for your business.
                            </p>

                            <div className="grid grid-cols-3 gap-2">
                                <a
                                    href={creatorInfo.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-white/5 hover:bg-[#D4A574]/20 text-[#F5E6D3] transition-all group"
                                    title="GitHub"
                                >
                                    <Github size={18} className="group-hover:scale-110 transition-transform" />
                                    <span className="text-[10px] uppercase tracking-tighter opacity-60">Code</span>
                                </a>
                                <a
                                    href={creatorInfo.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-white/5 hover:bg-[#D4A574]/20 text-[#F5E6D3] transition-all group"
                                    title="LinkedIn"
                                >
                                    <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                                    <span className="text-[10px] uppercase tracking-tighter opacity-60">Social</span>
                                </a>
                                <a
                                    href={`mailto:${creatorInfo.email}`}
                                    className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-white/5 hover:bg-[#D4A574]/20 text-[#F5E6D3] transition-all group"
                                    title="Email"
                                >
                                    <Mail size={18} className="group-hover:scale-110 transition-transform" />
                                    <span className="text-[10px] uppercase tracking-tighter opacity-60">Hire Me</span>
                                </a>
                            </div>

                            <Button
                                variant="outline"
                                className="w-full border-[#D4A574]/30 text-[#D4A574] hover:bg-[#D4A574] hover:text-[#1A0F0A] font-serif text-sm h-10 group"
                                onClick={() => window.open(creatorInfo.linkedin, '_blank')}
                            >
                                Let's Talk
                                <ExternalLink size={14} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                layout
                onClick={() => setIsExpanded(!isExpanded)}
                className="pointer-events-auto flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#D4A574]/50 bg-[#1A0F0A]/90 hover:bg-[#2C1810] text-[#D4A574] shadow-[0_0_20px_rgba(212,165,116,0.2)] backdrop-blur-md transition-all group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <span className="w-2 h-2 rounded-full bg-[#D4A574] animate-pulse" />
                <span className="text-xs font-serif tracking-widest uppercase font-bold">
                    {isExpanded ? "Close" : "Interested in a website?"}
                </span>
            </motion.button>
        </div>
    );
}
