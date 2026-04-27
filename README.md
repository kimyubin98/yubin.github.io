# yubin.github.io Portfolio

Portafolio profesional enfocado en **DevOps, Automatización y Ciberseguridad**.
Este sitio presenta proyectos reales, habilidades técnicas y formas de contacto para colaboración o contratación.

## Demo en vivo

👉 https://yubin.github.io/

---

## Sobre el proyecto

Este es un **Single Page Application (SPA)** desarrollado con **React**, diseñado como una landing page técnica para reclutadores y equipos de ingeniería.

El objetivo es mostrar:

* Experiencia práctica en infraestructura y seguridad
* Proyectos reales (automatización, pentesting, etc.)
* Stack tecnológico orientado a DevOps

---

## ⚙️ Tecnologías utilizadas

* ⚛️ React
* ⚡ Vite
* 🎨 CSS modular / custom styles
* 🧩 Component-based architecture

---

## 📁 Estructura del proyecto

```
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
│
├── styles/
│   └── globals.css
│
├── App.jsx
└── main.jsx
```

---

## 🧩 Arquitectura

La aplicación está construida bajo un enfoque modular:

* Cada sección del sitio es un componente independiente
* `App.jsx` orquesta el layout general
* Separación clara entre lógica, UI y estilos

---

## 🚀 Instalación y ejecución local

Clona el repositorio:

```bash
git clone https://github.com/TU_USUARIO/yubin.github.io.git
cd yubin.github.io
```

Instala dependencias:

```bash
npm install
```

Ejecuta en modo desarrollo:

```bash
npm run dev
```

---

## 📦 Build para producción

```bash
npm run build
```

Vista previa del build:

```bash
npm run preview
```

---

## 🌍 Deploy

Este proyecto puede ser desplegado en:

* GitHub Pages
* Vercel
* Netlify

### GitHub Pages (ejemplo)

```bash
npm run build
npm run deploy
```

---

## 🔐 Enfoque en seguridad

Este portafolio refleja prácticas de ciberseguridad como:

* Estructura limpia y mantenible
* Separación de responsabilidades
* Preparado para integrar headers de seguridad
* Posible integración con herramientas de análisis (OWASP, ZAP)

---

## 📊 Proyectos destacados

Incluye proyectos como:

* Automatización con Ansible
* Auditorías de seguridad web
* Uso de herramientas de pentesting (Kali Linux)
* Scripts para análisis de logs y detección de incidentes

---

## 📬 Contacto

Si estás interesado en colaborar o contratar:

* 💼 LinkedIn https://www.linkedin.com/in/k1m7ubin/
* 📧 Email    heji980302@gmail.com
* 🌐 Sitio web pentesting.yubinsecure.com

---

## 🧠 Objetivo profesional

Busco oportunidades en:

* DevOps Engineering
* Cloud & Infrastructure
* Cybersecurity / Pentesting

---

## 📄 Licencia

MIT License

---

## ✨ Notas finales

Este proyecto está en constante mejora, integrando nuevas tecnologías, prácticas DevOps y enfoques de seguridad ofensiva/defensiva.

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
