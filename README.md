<p align="center">
  <img src="build/icon.png" alt="WhichClaw" width="120" />
</p>

<h1 align="center">WhichClaw</h1>

<p align="center">
  <strong>One Hub. All Models. Every Coding Tool.</strong><br/>
  <sub>Visual AI Model Switching & Management for Developers</sub>
</p>

<p align="center">
  <a href="https://github.com/WhichClawTeam/WhichClaw/releases">
    <img src="https://img.shields.io/github/v/release/WhichClawTeam/WhichClaw?style=flat-square&color=00FF9D" alt="Release" />
  </a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-blue?style=flat-square" alt="Platform" />
  <img src="https://img.shields.io/github/license/WhichClawTeam/WhichClaw?style=flat-square" alt="License" />
</p>

<p align="center">
  <strong>English</strong> ·
  <a href="./docs/README.zh-CN.md">简体中文</a> ·
  <a href="./docs/README.zh-TW.md">繁體中文</a> ·
  <a href="./docs/README.ja.md">日本語</a> ·
  <a href="./docs/README.ko.md">한국어</a> ·
  <a href="./docs/README.es.md">Español</a> ·
  <a href="./docs/README.fr.md">Français</a> ·
  <a href="./docs/README.de.md">Deutsch</a> ·
  <a href="./docs/README.pt.md">Português</a> ·
  <a href="./docs/README.ru.md">Русский</a> ·
  <a href="./docs/README.ar.md">العربية</a>
</p>

---

## ✨ What is WhichClaw?

WhichClaw is a desktop application that provides a **visual, unified interface** for managing AI models across your coding tools. No more digging through config files — just point, click, and switch.

### The Problem

- 😫 Switching AI models in tools like OpenClaw requires editing config files manually
- 🔄 Each tool has its own model configuration format
- 🧩 No easy way to manage skills and extensions across tools

### The Solution

WhichClaw acts as a **central control panel** for all your AI-powered coding tools:

- 🎯 **One-Click Model Switching** — Visually switch AI models for any supported tool
- 🔀 **Dual Protocol** — OpenAI & Anthropic API support, switch models anytime anywhere
- 🚇 **Smart Tunnel Proxy** — Access geo-restricted APIs without a full VPN; only API traffic is proxied
- 🧩 **Skill Browser** — Discover, install, and manage AI skills across tools
- 🖥️ **Local Model Server** — Run open-source models (Qwen, DeepSeek, Llama) locally via llama.cpp
- 🌍 **28 Languages** — Full i18n support for a global audience
- 🎮 **Built-in AI Apps** — Interactive AI games and utilities like Reversi and AI Translate
- 🌃 **Cyberpunk Hacker UI** — Stunning neon-green terminal aesthetic that makes coding feel futuristic

## 🖼️ Screenshots

### Model Nexus — Manage all your AI models in one place
![Model Nexus](docs/1.png)

### App Manager — One-click model switching for all coding tools
![App Manager](docs/2.png)

### Local Server — Run open-source models locally with llama.cpp
![Local Server](docs/3.png)

### Skill Browser — Discover and install AI skills
![Skill Browser](docs/4.png)

## 🚀 Quick Start

### Download

Get the latest release for your platform:

| Platform | Download |
|----------|----------|
| Windows  | [WhichClaw-Setup.exe](https://github.com/WhichClawTeam/WhichClaw/releases/latest) |
| macOS    | [WhichClaw.dmg](https://github.com/WhichClawTeam/WhichClaw/releases/latest) |
| Linux    | [WhichClaw.AppImage](https://github.com/WhichClawTeam/WhichClaw/releases/latest) |

### Linux Notes

```bash
chmod +x WhichClaw-*.AppImage
./WhichClaw-*.AppImage
```

> If you encounter FUSE errors: `sudo apt install libfuse2`

## 🔧 Supported Tools

| Tool | Status | Model Switching | Protocol |
|------|--------|----------------|----------|
| OpenClaw | ✅ Supported | ✅ | OpenAI / Anthropic |
| Claude Code | ✅ Supported | ✅ | Anthropic |
| Cline | ✅ Supported | ✅ | OpenAI |
| Continue | ✅ Supported | ✅ | OpenAI |
| OpenCode | ✅ Supported | ✅ | OpenAI |
| Codex | ✅ Supported | ✅ | OpenAI |
| Roo Code | ✅ Supported | ✅ | OpenAI |
| ZeroClaw | ✅ Supported | ✅ | OpenAI |
| Aider | ✅ Supported | ✅ | OpenAI / Anthropic |

## 🏗️ Tech Stack

- **Electron** — Cross-platform desktop framework
- **React + TypeScript** — UI framework
- **Vanilla CSS** — Custom cyberpunk design system with CSS variables
- **Vite** — Build tool
- **llama.cpp** — Local model inference engine

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

We're especially looking for help with:
- 🍎 **macOS testing** — We haven't fully tested macOS builds yet
- 🔧 **New tool integrations** — Help us add support for more AI coding tools
- 🌐 **Translation improvements** — Native speakers welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📬 Contact

- 📧 Email: [hi@whichclaw.com](mailto:hi@whichclaw.com)
- 🐛 Bug Reports: [GitHub Issues](https://github.com/WhichClawTeam/WhichClaw/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/WhichClawTeam/WhichClaw/discussions)

## ⭐ Support

If you find WhichClaw useful, please consider giving it a ⭐ on GitHub — it helps others discover the project!

## 📄 License

[MIT](LICENSE)

---

<p align="center">
  Made with 💚 by the WhichClaw Team<br/>
  <sub>🌐 <a href="https://whichclaw.com">whichclaw.com</a></sub>
</p>
