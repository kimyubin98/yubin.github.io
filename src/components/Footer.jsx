import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__copy">
          <span className="footer__prefix">//</span> {year} — Tu Nombre. Construido con React + Vite.
        </span>
        <span className="footer__tag">
          <span className="footer__dot" /> Hecho con ☕ y curiosidad técnica
        </span>
      </div>
    </footer>
  )
}
