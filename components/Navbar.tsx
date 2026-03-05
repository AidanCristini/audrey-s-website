'use client'

import { useState, useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'

const sections = [
  { id: 'accueil', label: 'Accueil' },
  {
    id: 'kinesiologie',
    label: 'La Kinésiologie',
    dropdown: [
      { targetId: 'kinesio-sub', label: 'Kinésiologie' },
      { targetId: 'adaptogenese-sub', label: 'Adaptogenèse' },
    ],
  },
  { id: 'seance', label: "Déroulement d'une séance" },
  { id: 'avis', label: 'Avis Clients' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('accueil')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isHome) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-40% 0px -55% 0px',
      }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [isHome])

  const scrollTo = useCallback((id: string) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      if (!isHome) return // let the browser navigate to /#id
      e.preventDefault()
      scrollTo(id)
    },
    [scrollTo, isHome]
  )

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <a href="/" className="navbar-brand">AUDREY GREFFE</a>
      <button
        className={`hamburger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={`navbar-nav${menuOpen ? ' open' : ''}`}>
        {sections.map(({ id, label, dropdown }) =>
          dropdown ? (
            <div key={id} className="nav-item-dropdown">
              <a
                href={`/#${id}`}
                className={`nav-link${isHome && activeSection === id ? ' active' : ''}`}
                onClick={(e) => handleClick(e, id)}
              >
                {label}
              </a>
              <div className="nav-dropdown">
                {dropdown.map((sub) => (
                  <a
                    key={sub.targetId}
                    className="nav-dropdown-link"
                    href={`/#${sub.targetId}`}
                    onClick={(e) => {
                      if (!isHome) return
                      e.preventDefault()
                      scrollTo(sub.targetId)
                    }}
                  >
                    {sub.label}
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <a
              key={id}
              href={`/#${id}`}
              className={`nav-link${isHome && activeSection === id ? ' active' : ''}`}
              onClick={(e) => handleClick(e, id)}
            >
              {label}
            </a>
          )
        )}
      </nav>
    </header>
  )
}
