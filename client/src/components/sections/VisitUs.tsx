import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export function VisitUs() {
  return (
    <section id="visit-us" className="py-24 bg-[#2C1810] text-[#F5E6D3]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Contact Info */}
        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-5xl font-heading text-[#D4A574]">Visit Us</h2>
            <p className="text-xl font-serif text-[#F5E6D3]/80">We're open daily to serve you.</p>
          </div>

          <div className="space-y-8 font-serif">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[#D4A574] mt-1 shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-[#F5E6D3]">Location</h3>
                <p className="text-[#F5E6D3]/70">123 Coffee Lane, Brew District<br/>Seattle, WA 98101</p>
                <a href="#" className="text-[#D4A574] text-sm mt-2 inline-flex items-center hover:underline">
                  Get Directions <Navigation className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-[#D4A574] mt-1 shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-[#F5E6D3]">Hours</h3>
                <p className="text-[#F5E6D3]/70">Mon - Fri: 7am - 8pm</p>
                <p className="text-[#F5E6D3]/70">Sat - Sun: 8am - 9pm</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-[#D4A574] mt-1 shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-[#F5E6D3]">Contact</h3>
                <p className="text-[#F5E6D3]/70">(555) 123-4567</p>
                <p className="text-[#F5E6D3]/70">hello@theroastedbean.com</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button className="bg-[#D4A574] hover:bg-[#C09060] text-[#2C1810] font-bold rounded-none px-6">
              Call Us
            </Button>
            <Button variant="outline" className="border-[#D4A574] text-[#D4A574] hover:bg-[#D4A574] hover:text-[#2C1810] rounded-none px-6 bg-transparent">
              WhatsApp
            </Button>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="h-[400px] w-full bg-[#3D2317] rounded-sm relative overflow-hidden group">
          {/* Decorative placeholder for map */}
          <div className="absolute inset-0 flex items-center justify-center text-[#D4A574]/20">
            <MapPin className="w-32 h-32" />
          </div>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.4674786733276!2d-122.3320706842368!3d47.60620957918507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ab43493e9e3%3A0x868b846506d88c24!2sPike%20Place%20Market!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{border:0, filter: 'sepia(0.5) contrast(1.2) opacity(0.8)'}} 
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
