import { useState, useEffect } from 'react'
import './Hero.css'

const TYPING_SEQUENCE = [
  { text: 'Cybersecurity Analyst',  delay: 80 },
  { text: 'DevOps Engineer',        delay: 80 },
  { text: 'Infrastructure Hacker',  delay: 80 },
]

function useTypewriter(words, pause = 1800) {
  const [displayed, setDisplayed]   = useState('')
  const [wordIdx, setWordIdx]       = useState(0)
  const [charIdx, setCharIdx]       = useState(0)
  const [deleting, setDeleting]     = useState(false)

  useEffect(() => {
    const current = words[wordIdx].text
    const speed   = deleting ? 45 : words[wordIdx].delay

    const timer = setTimeout(() => {
      if (!deleting) {
        setDisplayed(current.slice(0, charIdx + 1))
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause)
        } else {
          setCharIdx(c => c + 1)
        }
      } else {
        setDisplayed(current.slice(0, charIdx - 1))
        if (charIdx - 1 === 0) {
          setDeleting(false)
          setCharIdx(0)
          setWordIdx(i => (i + 1) % words.length)
        } else {
          setCharIdx(c => c - 1)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [charIdx, deleting, wordIdx, words, pause])

  return displayed
}

const BOOT_LINES = [
  '> Initializing secure environment...',
  '> Loading threat intelligence modules...',
  '> Scanning infrastructure landscape...',
  '> All systems operational.',
]

export default function Hero() {
  const role = useTypewriter(TYPING_SEQUENCE)
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      i += 1
      setVisibleLines(i)
      if (i >= BOOT_LINES.length) clearInterval(id)
    }, 600)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="hero">
      {/* Grid background */}
      <div className="hero__grid" aria-hidden />

      {/* Glow orbs */}
      <div className="hero__orb hero__orb--1" aria-hidden />
      <div className="hero__orb hero__orb--2" aria-hidden />

      <div className="container hero__inner">
        {/* Terminal boot log */}
        <div className="hero__terminal">
          <div className="hero__terminal-bar">
            <span className="hero__dot hero__dot--red" />
            <span className="hero__dot hero__dot--yellow" />
            <span className="hero__dot hero__dot--green" />
            <span className="hero__terminal-title">bash — 80×24</span>
          </div>
          <div className="hero__terminal-body">
            {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
              <div key={i} className="hero__terminal-line">
                <span className={line.startsWith('>') ? 'hero__terminal-cmd' : ''}>
                  {line}
                </span>
              </div>
            ))}
            {visibleLines >= BOOT_LINES.length && (
              <div className="hero__terminal-line">
                <span className="hero__terminal-prompt">root@portfolio:~$</span>
                <span className="hero__terminal-cursor">▌</span>
              </div>
            )}
          </div>
        </div>

        {/* Main heading */}
        <div className="hero__content">
          <p className="hero__eyebrow">
            <span className="hero__eyebrow-bracket">{'< '}</span>
            Bienvenido a mi portafolio
            <span className="hero__eyebrow-bracket">{' />'}</span>
          </p>

          <h1 className="hero__name">
            <span className="hero__name-glitch" data-text="TU_NOMBRE">TU_NOMBRE</span>
          </h1>

          <h2 className="hero__role">
            <span className="hero__role-prefix">$ </span>
            <span className="hero__role-text">{role}</span>
            <span className="hero__role-cursor">▌</span>
          </h2>

          <p className="hero__description">
            Especialista en seguridad ofensiva, automatización de infraestructura y detección de
            amenazas. Construyo sistemas que resisten, detectan y responden.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">
              Ver proyectos →
            </a>
            <a href="#contact" className="btn btn-outline">
              Contactar
            </a>
          </div>

          {/* Status badges */}
          <div className="hero__status">
            <span className="hero__badge hero__badge--online">
              <span className="hero__badge-dot" />
              Disponible para oportunidades
            </span>
            <span className="hero__badge">
              📍 México
            </span>
            <span className="hero__badge">
              🕐 GMT-6
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  )
}
