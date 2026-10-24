const links = [
  { href: '#gallery', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

function Header() {
  return (
    <header className="sticky top-0 z-10 bg-cream border-b border-line shadow-soft">
      <nav className="max-w-[1200px] mx-auto p-4 flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:p-6">
        <a href="#hero" className="font-serif text-[1.4rem] text-ink">
          Sofia Lind
        </a>

        <ul className="flex gap-2 sm:gap-3">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block px-3 py-1.5 text-xs uppercase tracking-[0.1em] bg-white border border-line shadow-sm transition hover:bg-accent hover:border-accent hover:text-cream hover:-translate-y-0.5 hover:shadow-md sm:px-5 sm:py-2 sm:text-[0.85rem]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header