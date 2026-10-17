const labelClass = 'text-[0.7rem] uppercase tracking-[0.12em] text-stone mb-1.5'
const fieldClass =
  'w-full px-3 py-2.5 border border-line bg-cream text-ink text-[0.95rem] leading-snug focus:outline-none focus:border-accent focus:ring-3 focus:ring-accent/15'

function Contact() {
  return (
    <section id="contact" className="max-w-[640px] mx-auto px-4 py-14 sm:px-6 md:py-20">
      <p className="uppercase tracking-[0.15em] text-[0.8rem] text-stone mb-2">
        Contact
      </p>
      <h2 className="font-serif text-[1.8rem] leading-tight mb-6 md:text-[2.2rem]">
        Book a shoot
      </h2>
      <p className="text-stone mb-8 text-balance">
        Tell me a little about what you have in mind, and I'll get back to you within two days.
      </p>

      <form className="flex flex-col gap-5 bg-white p-5 border border-line shadow-soft sm:p-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="name" className={labelClass}>Name</label>
            <input type="text" id="name" name="name" required className={`${fieldClass} h-11`} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className={labelClass}>Email</label>
            <input type="email" id="email" name="email" required className={`${fieldClass} h-11`} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="session" className={labelClass}>Session type</label>
            <select id="session" name="session" className={`${fieldClass} h-11`}>
              <option>Portrait</option>
              <option>Lifestyle</option>
              <option>Travel</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="date" className={labelClass}>Preferred date</label>
            <input type="date" id="date" name="date" className={`${fieldClass} h-11`} />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className={labelClass}>Message</label>
          <textarea id="message" name="message" rows="4" className={`${fieldClass} resize-y`}></textarea>
        </div>

        <button
          type="submit"
          className="self-start px-9 py-3.5 uppercase tracking-[0.1em] text-[0.8rem] border border-accent bg-accent text-cream cursor-pointer transition hover:bg-accent-dark hover:border-accent-dark"
        >
          Send
        </button>
      </form>
    </section>
  )
}

export default Contact