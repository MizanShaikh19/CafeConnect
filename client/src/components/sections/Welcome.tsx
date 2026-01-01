export function Welcome() {
  return (
    <section className="py-20 px-4 md:px-8 bg-[#F5E6D3] text-[#2C1810]">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-6">
          <h2 className="text-5xl md:text-6xl font-heading text-[#6B4423]">Welcome Home</h2>
          <div className="w-24 h-1 bg-[#D4A574] mx-auto rounded-full" />
        </div>

        <p className="text-lg md:text-xl leading-relaxed font-serif text-[#2C1810]/80">
          Nestled in the heart of the city, The Roasted Bean began as a simple dream: to create a space where time slows down. We roast our beans in small batches, bake our pastries fresh every morning, and believe that the perfect cup of coffee is best enjoyed with good company.
        </p>

        <div className="relative py-10 px-8 md:px-16 mt-8">
          <span className="absolute top-0 left-0 text-8xl text-[#D4A574]/30 font-serif leading-none">"</span>
          <blockquote className="text-3xl md:text-4xl font-heading leading-relaxed text-[#6B4423]">
            We believe in warmth, community, and the magic that happens over a steaming cup of coffee.
          </blockquote>
          <span className="absolute bottom-0 right-0 text-8xl text-[#D4A574]/30 font-serif leading-none">"</span>
          <cite className="block mt-6 text-lg font-serif not-italic text-[#D4A574]">— Eleanor, Owner & Head Barista</cite>
        </div>
      </div>
    </section>
  );
}
