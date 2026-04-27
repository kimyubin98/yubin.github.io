import './About.css'

const STATS = [
  { value: '1+',  label: 'Año de experiencia' },
  { value: '15+', label: 'Proyectos completados' },
  { value: '0',   label: 'Brechas sin parchear' },
  { value: '∞',   label: 'Curiosidad técnica' },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <p className="section-label">whoami</p>
          <h2 className="section-title">Sobre <span>mí</span></h2>
        </div>

        <div className="about__grid">
          {/* Text column */}
          <div className="about__text">
            <p className="about__intro">
              Profesional técnico con enfoque en la intersección de{' '}
              <strong>seguridad ofensiva</strong>, <strong>automatización de infraestructura</strong>{' '}
              y <strong>análisis de amenazas</strong>.
            </p>

            <p>
              Mi trabajo combina conocimiento profundo de sistemas Linux, redes y protocolos de
              seguridad con la capacidad de automatizar procesos complejos y construir pipelines
              robustos que resisten ataques reales.
            </p>

            <p>
              No solo identifico vulnerabilidades — construyo las defensas que las mitigan y
              los procesos que las previenen.
            </p>

            <div className="about__highlights">
              {[
                '🔍 Análisis de logs y detección de anomalías',
                '🔐 Pentesting y hardening de sistemas',
                '⚙️  Automatización con Bash, Python y Ansible',
                '🌐 Diseño y segmentación de redes',
                '🚀 CI/CD pipelines y contenedores Docker/K8s',
              ].map((item, i) => (
                <div key={i} className="about__highlight-item">
                  <span className="about__highlight-arrow">→</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats column */}
          <div className="about__side">
            <div className="about__stats">
              {STATS.map(({ value, label }) => (
                <div key={label} className="about__stat">
                  <span className="about__stat-value">{value}</span>
                  <span className="about__stat-label">{label}</span>
                </div>
              ))}
            </div>

            <div className="about__certs">
              <p className="about__certs-title">
                <span className="about__certs-prefix">$</span> certifications
              </p>
              {[
                { name: 'CompTIA Security+', status: 'in-progress' },
                { name: 'Certified Ethical Hacker', status: 'planned' },
                { name: 'AWS Solutions Architect', status: 'planned' },
              ].map(({ name, status }) => (
                <div key={name} className="about__cert">
                  <span className={`about__cert-status about__cert-status--${status}`} />
                  <span className="about__cert-name">{name}</span>
                  <span className="about__cert-tag">{status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
