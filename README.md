# ⛏️ Minecraft Cheap

[![Deployment Pipeline](https://github.com/leandrobattocchio/minecraft-cheap/actions/workflows/pipeline.yml/badge.svg)](https://github.com/leandrobattocchio/minecraft-cheap/actions/workflows/pipeline.yml)

A Minecraft-style 3D voxel builder that runs in the browser. Walk around in first person, place and remove blocks, and switch between textures.

🔗 **Live demo:** [minecraft-cheap.vercel.app](https://minecraft-cheap.vercel.app)

## ✨ Features

- 3D world rendered with **React Three Fiber** and Three.js
- Physics and collisions with **@react-three/cannon**
- First-person controls with keyboard and mouse
- Several block textures and an on-screen HUD
- Game state managed with **Zustand**

## ⚙️ CI/CD

Every push and pull request runs a **GitHub Actions** pipeline:

1. **Lint** with ESLint
2. **Build** with Vite
3. **Unit tests** with Jest and **end-to-end tests** with Cypress
4. **Deploy** to Vercel (only if every previous step passes)

## 🛠️ Tech stack

React · Three.js · React Three Fiber · Cannon (physics) · Zustand · Vite · Jest · Cypress · GitHub Actions

## 🎮 Controls

| Key | Action |
|---|---|
| `W` `A` `S` `D` | Move |
| `Space` | Jump |
| `Shift` | Run |
| Mouse | Look around |
| Click | Place block |
| `Alt` + click | Remove block |
| `1`–`5` | Change texture (dirt, glass, grass, log, wood) |
| `Tab` | Menu |

## 🚀 Run locally

```bash
git clone https://github.com/leandrobattocchio/minecraft-cheap.git
cd minecraft-cheap
npm install
npm run dev        # dev server
npm test           # unit tests (Jest)
npm run test:e2e   # E2E tests (Cypress)
```

---

Made by [Leandro Battocchio](https://leandrobattocchio.github.io) · [LinkedIn](https://www.linkedin.com/in/leandro-battocchio/)
