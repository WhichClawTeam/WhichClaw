<p align="center">
  <img src="../build/icon.png" alt="WhichClaw" width="120" />
</p>

<h1 align="center">WhichClaw</h1>

<p align="center">
  <strong>One Hub. All Models. Every Coding Tool.</strong><br/>
  <sub>WhichClaw es una aplicación de escritorio que proporciona una</sub>
</p>

<p align="center">
  <a href="https://github.com/WhichClawTeam/WhichClaw/releases">
    <img src="https://img.shields.io/github/v/release/WhichClawTeam/WhichClaw?style=flat-square&color=00FF9D" alt="Release" />
  </a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-blue?style=flat-square" alt="Platform" />
  <img src="https://img.shields.io/github/license/WhichClawTeam/WhichClaw?style=flat-square" alt="License" />
</p>

<p align="center">
  <a href="../README.md">English</a> · <a href="./README.zh-CN.md">简体中�?/a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.ja.md">日本�?/a> · <a href="./README.ko.md">한국�?/a> · **Español** · <a href="./README.fr.md">Français</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.pt.md">Português</a> · <a href="./README.ru.md">Русский</a> · <a href="./README.ar.md">العربية</a>
</p>

---

## �?¿Qué es WhichClaw?

WhichClaw es una aplicación de escritorio que proporciona una **interfaz visual y unificada** para gestionar modelos de IA en tus herramientas de programación. Sin más archivos de configuración �?solo haz clic y cambia.

### El Problema

- 😫 Cambiar modelos de IA en herramientas como OpenClaw requiere editar archivos de configuración manualmente
- 🔄 Cada herramienta tiene su propio formato de configuración de modelos
- 🧩 No hay forma fácil de gestionar habilidades y extensiones entre herramientas

### La Solución

WhichClaw actúa como un **panel de control central** para todas tus herramientas de programación con IA:

- 🎯 **Cambio de Modelo con Un Clic** �?Cambia visualmente modelos de IA para cualquier herramienta compatible
- 🔀 **Protocolo Dual** �?Soporte OpenAI y Anthropic API, cambia modelos en cualquier momento
- 🚇 **Proxy Túnel Inteligente** �?Accede a APIs con restricción geográfica sin VPN completa; solo se proxifica el tráfico API
- 🧩 **Explorador de Habilidades** �?Descubre, instala y gestiona habilidades de IA
- 🖥�?**Servidor de Modelos Local** �?Ejecuta modelos de código abierto (Qwen, DeepSeek, Llama) localmente vía llama.cpp
- 🌍 **28 Idiomas** �?Soporte completo de internacionalización
- 🎮 **Apps de IA Integradas** �?Juegos y utilidades de IA interactivos como Reversi y AI Translate
- 🌃 **UI Hacker Cyberpunk** �?Estética de terminal neón verde que hace que programar se sienta futurista

## 🖼�?Capturas de pantalla

### Model Nexus �?Gestiona todos tus modelos de IA en un solo lugar
![Model Nexus](1.png)

### App Manager �?Cambio de modelo con un clic para todas las herramientas
![App Manager](2.png)

### Local Server �?Ejecuta modelos de código abierto localmente con llama.cpp
![Local Server](3.png)

### Skill Browser �?Descubre e instala habilidades de IA
![Skill Browser](4.png)

## 🚀 Inicio Rápido

### Descargar

Obtén la última versión para tu plataforma:

| Plataforma | Descargar |
|----------|----------|
| Windows  | [WhichClaw-Setup.exe](https://github.com/WhichClawTeam/WhichClaw/releases/latest) |
| macOS    | [WhichClaw.dmg](https://github.com/WhichClawTeam/WhichClaw/releases/latest) |
| Linux    | [WhichClaw.AppImage](https://github.com/WhichClawTeam/WhichClaw/releases/latest) |

### Notas de Linux

```bash
chmod +x WhichClaw-*.AppImage
./WhichClaw-*.AppImage
```

> Si encuentras errores de FUSE: `sudo apt install libfuse2`

## 🔧 Herramientas Compatibles

| Herramienta | Estado | Cambio de Modelo | Protocolo |
|------|--------|----------------|----------|
| OpenClaw | �?Compatible | �?| OpenAI / Anthropic |
| Claude Code | �?Compatible | �?| Anthropic |
| Cline | �?Compatible | �?| OpenAI |
| Continue | �?Compatible | �?| OpenAI |
| OpenCode | �?Compatible | �?| OpenAI |
| Codex | �?Compatible | �?| OpenAI |
| Roo Code | �?Compatible | �?| OpenAI |

## 🏗�?Stack Tecnológico

- **Electron** �?Framework de escritorio multiplataforma
- **React + TypeScript** �?Framework de UI
- **Vanilla CSS** �?Sistema de diseño cyberpunk personalizado
- **Vite** �?Herramienta de compilación
- **llama.cpp** �?Motor de inferencia de modelos local

## 🛠�?Desarrollo

```bash
npm install
npm run dev
npm run build
```

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! No dudes en abrir issues o enviar pull requests.

We're especially looking for help with:
- 🍎 **Pruebas en macOS** �?Aún no hemos probado completamente las builds de macOS
- 🔧 **Nuevas integraciones** �?Ayúdanos a agregar soporte para más herramientas de IA
- 🌐 **Mejoras de traducción** �?¡Hablantes nativos bienvenidos!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📬 Contact

- 📧 Email: [hi@whichclaw.com](mailto:hi@whichclaw.com)
- 🐛 Bug Reports: [GitHub Issues](https://github.com/WhichClawTeam/WhichClaw/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/WhichClawTeam/WhichClaw/discussions)

## �?Apoyo

Si WhichClaw te resulta útil, considera darle una �?en GitHub �?¡ayuda a que otros descubran el proyecto!

## 📄 Licencia

[MIT](../LICENSE)

---

<p align="center">
  Hecho con 💚 por el equipo de WhichClaw<br/>
  <sub>📧 <a href="mailto:hi@whichclaw.com">hi@whichclaw.com</a></sub>
</p>
