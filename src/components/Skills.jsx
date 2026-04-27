import './Skills.css'

const SKILL_GROUPS = [
  {
    group: 'Seguridad',
    icon: '🔐',
    skills: [
      { name: 'Pentesting / OSINT',    level: 75 },
      { name: 'Análisis de malware',   level: 60 },
      { name: 'Hardening Linux',       level: 85 },
      { name: 'Firewall / IDS/IPS',    level: 70 },
      { name: 'CTF / Red Team',        level: 65 },
    ],
  },
  {
    group: 'DevOps',
    icon: '⚙️',
    skills: [
      { name: 'Docker / Kubernetes',  level: 75 },
      { name: 'CI/CD Pipelines',      level: 70 },
      { name: 'Ansible / IaC',        level: 80 },
      { name: 'Linux Administration', level: 90 },
      { name: 'Monitoring / Logging', level: 75 },
    ],
  },
  {
    group: 'Desarrollo',
    icon: '💻',
    skills: [
      { name: 'Python',       level: 80 },
      { name: 'Bash / Shell', level: 85 },
      { name: 'SQL / NoSQL',  level: 65 },
      { name: 'APIs REST',    level: 70 },
      { name: 'Git / GitHub', level: 85 },
    ],
  },
  {
    group: 'Redes',
    icon: '🌐',
    skills: [
      { name: 'TCP/IP / Subnetting',  level: 85 },
      { name: 'Wireshark / Scapy',   level: 75 },
      { name: 'VPN / Proxy',         level: 70 },
      { name: 'DNS / DHCP / HTTP',   level: 80 },
      { name: 'Network Segmentation',level: 70 },
    ],
  },
]

const TOOLS = [
  'Nmap', 'Metasploit', 'Burp Suite', 'Wireshark', 'Nessus',
  'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Jenkins',
  'Elasticsearch', 'Grafana', 'Prometheus', 'Splunk',
  'Kali Linux', 'Ubuntu', 'CentOS', 'Git', 'VS Code',
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <p className="section-label">cat skills.json</p>
          <h2 className="section-title">Stack <span>Técnico</span></h2>
        </div>

        <div className="skills__grid">
          {SKILL_GROUPS.map(({ group, icon, skills }) => (
            <div key={group} className="skill-group">
              <h3 className="skill-group__title">
                <span>{icon}</span> {group}
              </h3>
              <div className="skill-group__bars">
                {skills.map(({ name, level }) => (
                  <SkillBar key={name} name={name} level={level} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools strip */}
        <div className="skills__tools">
          <p className="skills__tools-label">
            <span className="skills__tools-prefix">$</span> herramientas
          </p>
          <div className="skills__tools-list">
            {TOOLS.map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillBar({ name, level }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar__meta">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__level">{level}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{ '--target': `${level}%` }}
        />
      </div>
    </div>
  )
}
