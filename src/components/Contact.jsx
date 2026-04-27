import { useState } from 'react'
import './Contact.css'

const SOCIAL_LINKS = [
  { label: 'GitHub',   href: 'https://github.com/tu-usuario',    icon: '⬡', handle: '@tu-usuario' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/tu-perfil', icon: '◈', handle: '/in/tu-perfil' },
  { label: 'Email',    href: 'mailto:tu@email.com',               icon: '◉', handle: 'tu@email.com' },
  { label: 'TryHackMe',href: 'https://tryhackme.com/p/tu-usuario',icon: '◆', handle: '@tu-usuario' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    // Conecta aquí tu servicio: Formspree, EmailJS, etc.
    // await fetch('https://formspree.io/f/TU_ID', { method: 'POST', body: JSON.stringify(form), headers: { 'Content-Type': 'application/json' } })
    setSent(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <p className="section-label">./contact --open</p>
          <h2 className="section-title">Hablemos de <span>trabajo</span></h2>
        </div>

        <div className="contact__grid">
          {/* Left: info */}
          <div className="contact__info">
            <p className="contact__pitch">
              Estoy abierto a roles de <strong>Cybersecurity Analyst</strong>,{' '}
              <strong>DevOps Engineer</strong> o <strong>Site Reliability Engineer</strong>.
            </p>
            <p className="contact__sub">
              Si buscas a alguien que entienda tanto la infraestructura como las amenazas que la
              afectan — y que pueda automatizar la respuesta a ambas — hablemos.
            </p>

            <div className="contact__links">
              {SOCIAL_LINKS.map(({ label, href, icon, handle }) => (
                <a key={label} href={href} className="contact__link" target="_blank" rel="noopener noreferrer">
                  <span className="contact__link-icon">{icon}</span>
                  <div>
                    <span className="contact__link-label">{label}</span>
                    <span className="contact__link-handle">{handle}</span>
                  </div>
                  <span className="contact__link-arrow">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="contact__form-wrapper">
            {sent ? (
              <div className="contact__success">
                <p className="contact__success-icon">✓</p>
                <p className="contact__success-title">Mensaje enviado</p>
                <p className="contact__success-sub">Te responderé en menos de 24h.</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__field">
                  <label htmlFor="name" className="contact__label">// nombre</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="contact__input"
                    placeholder="Tu nombre"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="email" className="contact__label">// email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="contact__input"
                    placeholder="tu@empresa.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="message" className="contact__label">// mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    className="contact__input contact__textarea"
                    placeholder="Cuéntame sobre la oportunidad..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary contact__submit">
                  Enviar mensaje →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
