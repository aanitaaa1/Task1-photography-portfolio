function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[85vh] flex flex-col justify-center items-center text-center px-4 py-14 text-cream bg-cover bg-center bg-[linear-gradient(rgba(26,26,26,0.35),rgba(26,26,26,0.35)),url('/images/hero.jpg')]"
    >
      <p className="uppercase tracking-[0.15em] text-[0.8rem] mb-2">
        Photography · Stockholm
      </p>

      <h1 className="font-serif text-[2.2rem] leading-tight mb-6 md:text-5xl">
        Photography that tells a story.
      </h1>

      <p className="max-w-[600px]">
        Natural light portraits, travel and landscapes, captured with warmth and simplicity.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <a
          href="#gallery"
          className="inline-block px-7 py-3.5 uppercase tracking-[0.1em] text-[0.8rem] border border-cream text-cream transition hover:bg-cream hover:text-ink"
        >
          View work
        </a>
        <a
          href="#contact"
          className="inline-block px-7 py-3.5 uppercase tracking-[0.1em] text-[0.8rem] border border-accent bg-accent text-cream transition hover:bg-accent-dark hover:border-accent-dark"
        >
          Book a shoot
        </a>
      </div>
    </section>
  )
}

export default Hero