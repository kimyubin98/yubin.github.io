import { useState } from 'react'
import './Projects.css'

const PROJECTS = [
  {
    id: 'log-analyzer',
    title: 'Sistema de Análisis de Logs',
    category: 'Security · Automation',
    problem: 'Organización con miles de eventos diarios sin visibilidad de amenazas activas. Los SOC tier-1 perdían horas revisando logs manualmente.',
    solution: 'Pipeline automatizado en Python que normaliza logs de múltiples fuentes (syslog, Apache, SSH), aplica reglas de correlación y genera alertas clasificadas por severidad.',
    impact: 'Reducción del 80% en tiempo de respuesta a incidentes. Detección de 3 intentos de intrusión que pasaron desapercibidos.',
    tech: ['Python', 'Bash', 'Elasticsearch', 'Grafana', 'Docker'],
    highlight: 'IMPACTO: -80% MTTR',
    status: 'Producción',
    link: 'https://github.com/tu-usuario/log-analyzer',
  },
  {
    id: 'infra-hardening',
    title: 'Hardening Automatizado de Servidores',
    category: 'DevOps · Security',
    problem: 'Flota de 40+ servidores Linux con configuraciones inconsistentes y sin compliance con CIS Benchmark. Auditoría externa fallida.',
    solution: 'Playbooks Ansible que aplican +200 controles del CIS Benchmark Level 2, deshabilitan servicios innecesarios, configuran firewall y gestión de cuentas privilegiadas.',
    impact: 'Score de compliance pasó de 42% a 96%. Proceso de onboarding de nuevos servidores reducido de 8h a 12 minutos.',
    tech: ['Ansible', 'Linux', 'CIS Benchmark', 'Python', 'Jinja2'],
    highlight: 'COMPLIANCE: 42% → 96%',
    status: 'Producción',
    link: 'https://github.com/tu-usuario/server-hardening',
  },
  {
    id: 'network-monitor',
    title: 'Monitor de Red con Detección de Anomalías',
    category: 'Network · Security',
    problem: 'Empresa SMB sin visibilidad del tráfico interno. Dispositivos no autorizados conectándose a la red sin ser detectados.',
    solution: 'Sistema de monitoreo pasivo con scripts Python que analizan tráfico ARP/DHCP, mantienen inventario de dispositivos autorizados y alertan via Slack ante anomalías.',
    impact: 'Detectó 12 dispositivos no autorizados en la primera semana. Implementado como solución permanente de bajo costo.',
    tech: ['Python', 'Scapy', 'Nmap', 'Slack API', 'SQLite'],
    highlight: '12 DISPOSITIVOS DETECTADOS',
    status: 'Completado',
    link: 'https://github.com/tu-usuario/net-monitor',
  },
  {
    id: 'ci-cd-pipeline',
    title: 'CI/CD Pipeline Seguro',
    category: 'DevOps · Security',
    problem: 'Equipo de desarrollo desplegando código sin revisiones de seguridad. Secretos hardcodeados encontrados en el repo.',
    solution: 'Pipeline GitLab CI/CD con stages de SAST (Semgrep), detección de secretos (Gitleaks), análisis de dependencias (Trivy) y despliegue automatizado solo si pasan todos los gates.',
    impact: 'Cero secretos expuestos desde implementación. 30+ vulnerabilidades detectadas antes de llegar a producción.',
    tech: ['GitLab CI', 'Docker', 'Semgrep', 'Trivy', 'Kubernetes'],
    highlight: '30+ VULNS BLOQUEADAS',
    status: 'Producción',
    link: 'https://github.com/tu-usuario/secure-pipeline',
  },
]

const STATUS_COLORS = {
  'Producción': 'green',
  'Completado':  'blue',
  'En progreso': 'yellow',
}

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <p className="section-label">ls -la ./projects</p>
          <h2 className="section-title">Casos <span>Profesionales</span></h2>
        </div>

        <div className="projects__grid">
          {PROJECTS.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              index={i}
              isOpen={active === p.id}
              onToggle={() => setActive(active === p.id ? null : p.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, isOpen, onToggle }) {
  const { title, category, problem, solution, impact, tech, highlight, status, link } = project
  const statusColor = STATUS_COLORS[status] || 'muted'

  return (
    <article className={`project-card ${isOpen ? 'project-card--open' : ''}`}>
      {/* Card header */}
      <div className="project-card__header" onClick={onToggle}>
        <div className="project-card__meta">
          <span className="project-card__index">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div>
            <h3 className="project-card__title">{title}</h3>
            <p className="project-card__category">{category}</p>
          </div>
        </div>
        <div className="project-card__right">
          <span className={`project-card__status project-card__status--${statusColor}`}>
            {status}
          </span>
          <span className={`project-card__chevron ${isOpen ? 'project-card__chevron--open' : ''}`}>
            ›
          </span>
        </div>
      </div>

      {/* Highlight bar */}
      <div className="project-card__highlight">
        <span className="project-card__highlight-text">
          <span className="project-card__highlight-icon">◈</span> {highlight}
        </span>
      </div>

      {/* Expandable body */}
      {isOpen && (
        <div className="project-card__body">
          <div className="project-card__sections">
            <div className="project-card__section">
              <p className="project-card__section-label">// PROBLEMA</p>
              <p className="project-card__section-text">{problem}</p>
            </div>
            <div className="project-card__section">
              <p className="project-card__section-label">// SOLUCIÓN</p>
              <p className="project-card__section-text">{solution}</p>
            </div>
            <div className="project-card__section">
              <p className="project-card__section-label">// IMPACTO</p>
              <p className="project-card__section-text project-card__impact">{impact}</p>
            </div>
          </div>

          <div className="project-card__footer">
            <div className="project-card__tech">
              {tech.map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline project-card__link"
            >
              Ver código →
            </a>
          </div>
        </div>
      )}
    </article>
  )
}
