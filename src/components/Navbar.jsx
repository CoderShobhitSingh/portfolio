import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 12)
    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${scrolled ? 'border-white/10 bg-ink/85 backdrop-blur-md' : 'border-transparent bg-ink/50 backdrop-blur-sm'}`}>
      <nav className="mx-auto flex h-[72px] max-w-content items-center justify-between px-5 sm:px-8" aria-label="Main navigation">
        <a href="#home" className="font-mono text-sm font-semibold tracking-normal text-white" aria-label="Shobhit Singh, home">
          <span className="text-mint">&lt;</span>shobhit<span className="text-mint"> /&gt;</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link, index) => (
            <a key={link.href} href={link.href} className="font-mono text-xs text-muted transition-colors hover:text-mint">
              <span className="mr-1.5 text-mint/70">0{index + 1}.</span>{link.label}
            </a>
          ))}
          <a href="#contact" className="rounded border border-mint/40 px-4 py-2 font-mono text-xs text-mint transition hover:border-mint hover:bg-mint/10 active:scale-[0.98]">
            Let&apos;s talk
          </a>
        </div>
        <button
          type="button"
          className="grid size-10 place-items-center rounded border border-white/10 text-white md:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>
      {menuOpen && (
        <div className="border-t border-white/10 bg-ink/95 px-5 pb-5 pt-2 backdrop-blur-md md:hidden">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="block border-b border-white/5 py-3 font-mono text-sm text-muted transition-colors hover:text-mint">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}