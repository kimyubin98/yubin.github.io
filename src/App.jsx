import { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "Plataforma Proxmox Cloud",
    description: "Sistema tipo AWS para crear y administrar VMs automáticamente.",
    tags: ["Proxmox", "API", "Cloud"],
  },
  {
    id: 2,
    title: "Automatización de Logs",
    description: "Script para analizar intentos fallidos de login.",
    tags: ["Python", "Security", "Logs"],
  },
  {
    id: 3,
    title: "Cableado Estructurado",
    description: "Diseño profesional de red física.",
    tags: ["Networking", "Infraestructura"],
  },
];

export default function App() {
  const [search, setSearch] = useState("");

  const filteredProjects = projectsData.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1> Mis Proyectos</h1>

      <input
        type="text"
        placeholder="Buscar proyecto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          marginBottom: "20px",
          width: "100%",
        }}
      />

      <div style={{ display: "grid", gap: "20px" }}>
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <div>
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  style={{
                    marginRight: "10px",
                    fontSize: "12px",
                    color: "blue",
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>

            <button style={{ marginTop: "10px" }}>Ver más</button>
          </div>
        ))}
      </div>
    </div>
  );
}