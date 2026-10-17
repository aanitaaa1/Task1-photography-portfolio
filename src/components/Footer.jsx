const links = [
  { href: '#gallery', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

function Footer() {
  return (
    <footer className="bg-surface border-t border-line py-12 px-6 flex flex-col items-center gap-4 text-center">
      <p className="font-serif text-[1.4rem]">Sofia Lind</p>

      <ul className="flex gap-6">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-stone text-[0.8rem] uppercase tracking-[0.1em] hover:text-accent"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <p className="text-[0.8rem] text-stone">© 2026 Sofia Lind Photography</p>
    </footer>
  )
}

export default Footer