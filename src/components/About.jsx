function About() {
  return (
    <section
      id="about"
      className="max-w-[1200px] mx-auto px-4 py-14 border-t border-line flex flex-col items-start gap-8 sm:px-6 md:flex-row md:items-center md:justify-center md:gap-16 md:py-20"
    >
      <img
        src="/images/about.jpg"
        alt="Photographer holding a camera"
        className="w-full max-w-[340px] aspect-[4/5] object-cover bg-white p-3 border border-line shadow-soft"
      />

      <div className="flex-1 max-w-[500px]">
        <p className="uppercase tracking-[0.15em] text-[0.8rem] text-stone mb-2">
          About
        </p>
        <h2 className="font-serif text-[1.8rem] leading-tight mb-6 md:text-[2.2rem]">
          Hi, I'm Sofia.
        </h2>
        <p className="text-stone">
          I'm a photographer based in Stockholm, drawn to natural light, quiet landscapes and honest portraits. I travel to capture moments that feel calm, warm and real.
        </p>
      </div>
    </section>
  )
}

export default About