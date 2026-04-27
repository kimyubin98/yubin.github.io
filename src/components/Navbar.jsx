import { useState, useEffect } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { href: '#about',    label: 'about' },
  { href: '#projects', label: 'projects' },
  { href: '#skills',   label: 'skills' },
  { href: '#contact',  label: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-bracket">[</span>
          <span className="navbar__logo-name">r00t</span>
          <span className="navbar__logo-at">@</span>
          <span className="navbar__logo-host">portfolio</span>
          <span className="navbar__logo-bracket">]</span>
          <span className="navbar__logo-cursor">▌</span>
        </a>

        {/* Desktop links */}
        <ul className="navbar__links">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="navbar__link">
                <span className="navbar__link-prefix">~/</span>{label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline navbar__cta"
            >
              ↓ CV
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className={`navbar__burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="navbar__mobile">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="navbar__mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              ./{label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
