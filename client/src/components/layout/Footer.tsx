import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1A0F0A] text-[#D4A574] py-16 px-4 border-t border-[#3D2317]">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-8">
        
        <h2 className="text-4xl font-heading text-[#F5E6D3]">The Roasted Bean</h2>
        
        <div className="flex gap-6">
          <a href="#" className="p-3 bg-[#2C1810] rounded-full hover:bg-[#D4A574] hover:text-[#2C1810] transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="p-3 bg-[#2C1810] rounded-full hover:bg-[#D4A574] hover:text-[#2C1810] transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="p-3 bg-[#2C1810] rounded-full hover:bg-[#D4A574] hover:text-[#2C1810] transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
        </div>

        <div className="font-serif text-[#F5E6D3]/50 text-sm space-y-2">
          <p>123 Coffee Lane, Brew District, Seattle, WA 98101</p>
          <p>&copy; {new Date().getFullYear()} The Roasted Bean. All rights reserved.</p>
        </div>

        <div className="pt-8 border-t border-[#3D2317] w-full max-w-md">
           <p className="text-xs text-[#F5E6D3]/30 uppercase tracking-widest">
             Website by Replit Design
           </p>
        </div>
      </div>
    </footer>
  );
}
