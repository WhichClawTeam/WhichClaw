<p align="center">
  <img src="../build/icon.png" alt="WhichClaw" width="120" />
</p>

<h1 align="center">WhichClaw</h1>

<p align="center">
  <strong>One Hub. All Models. Every Coding Tool.</strong><br/>
  <sub>Un panneau de contrôle cyberpunk pour l'ère de l'IA.</sub>
</p>

<p align="center">
  <a href="https://github.com/WhichClawTeam/WhichClaw/releases">
    <img src="https://img.shields.io/github/v/release/WhichClawTeam/WhichClaw?style=flat-square&color=00FF9D" alt="Release" />
  </a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-blue?style=flat-square" alt="Platform" />
  <img src="https://img.shields.io/github/license/WhichClawTeam/WhichClaw?style=flat-square" alt="License" />
</p>

<p align="center">
  <a href="../README.md">English</a> · <a href="./README.zh-CN.md">简体中文</a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.ja.md">日本語</a> · <a href="./README.ko.md">한국어</a> · <a href="./README.es.md">Español</a> · <strong>Français</strong> · <a href="./README.de.md">Deutsch</a> · <a href="./README.pt.md">Português</a> · <a href="./README.ru.md">Русский</a> · <a href="./README.ar.md">العربية</a>
</p>

---

## ✨ Qu'est-ce que WhichClaw ?

WhichClaw est une application de bureau qui fournit une **interface visuelle et unifiée** pour gérer les modèles d'IA dans vos outils de programmation. Plus besoin de fouiller dans les fichiers de configuration — cliquez et changez.

### Le Problème

- 😫 Changer de modèle d'IA dans des outils comme OpenClaw nécessite d'éditer manuellement des fichiers de configuration
- 🔄 Chaque outil a son propre format de configuration de modèle
- 🧩 Pas de moyen simple de gérer les skills et extensions entre les outils

### La Solution

WhichClaw agit comme un **panneau de contrôle central** pour tous vos outils de programmation IA :

- 🎯 **Changement en Un Clic** — Changez visuellement de modèle d'IA pour tout outil supporté
- 🔀 **Double Protocole** — Support OpenAI & Anthropic API, changez de modèle à tout moment
- 🚇 **Proxy Tunnel Intelligent** — Accédez aux APIs géo-restreintes sans VPN complet
- 🧩 **Navigateur de Skills** — Découvrez, installez et gérez les skills d'IA
- 🖥️ **Serveur Local** — Exécutez des modèles open-source (Qwen, DeepSeek, Llama) localement via llama.cpp
- 🌍 **28 Langues** — Support complet d'internationalisation
- 🎮 **Apps IA Intégrées** — Jeux et utilitaires comme Reversi et AI Translate
- 🌃 **UI Cyberpunk** — Esthétique de terminal néon vert

## 🖼️ Captures d'écran

### Model Nexus — Gérez tous vos modèles d'IA en un seul endroit
![Model Nexus](1.png)

### App Manager — Changement de modèle en un clic pour tous les outils
![App Manager](2.png)

### Local Server — Exécutez des modèles open-source localement avec llama.cpp
![Local Server](3.png)

### Skill Browser — Découvrez et installez des skills d'IA
![Skill Browser](4.png)

## 🚀 Démarrage Rapide

### Téléchargement

| Plateforme | Téléchargement |
|----------|----------|
| Windows  | [WhichClaw-Setup.exe](https://github.com/WhichClawTeam/WhichClaw/releases/latest) |
| macOS    | [WhichClaw.dmg](https://github.com/WhichClawTeam/WhichClaw/releases/latest) |
| Linux    | [WhichClaw.AppImage](https://github.com/WhichClawTeam/WhichClaw/releases/latest) |

### Notes Linux

```bash
chmod +x WhichClaw-*.AppImage
./WhichClaw-*.AppImage
```

> En cas d'erreur FUSE : `sudo apt install libfuse2`

## 🔧 Outils Supportés

| Outil | Statut | Changement de Modèle | Protocole |
|------|--------|----------------|----------|
| OpenClaw | ✅ Supporté | ✅ | OpenAI / Anthropic |
| Claude Code | ✅ Supporté | ✅ | Anthropic |
| Cline | ✅ Supporté | ✅ | OpenAI |
| Continue | ✅ Supporté | ✅ | OpenAI |
| OpenCode | ✅ Supporté | ✅ | OpenAI |
| Codex | ✅ Supporté | ✅ | OpenAI |
| Roo Code | ✅ Supporté | ✅ | OpenAI |
| ZeroClaw | ✅ Supporté | ✅ | OpenAI |
| Aider | ✅ Supporté | ✅ | OpenAI / Anthropic |

## 🏗️ Stack Technique

- **Electron** — Framework de bureau multiplateforme
- **React + TypeScript** — Framework UI
- **Vanilla CSS** — Système de design cyberpunk personnalisé
- **Vite** — Outil de build
- **llama.cpp** — Moteur d'inférence de modèles local

## 🛠️ Développement

```bash
npm install
npm run dev
npm run build
```

## 🤝 Contribuer

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir des issues ou soumettre des pull requests.

We're especially looking for help with:
- 🍎 **Tests macOS** — Nous n'avons pas encore entièrement testé les builds macOS
- 🔧 **Nouvelles intégrations** — Aidez-nous à supporter plus d'outils d'IA
- 🌐 **Améliorations de traduction** — Locuteurs natifs bienvenus !

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📬 Contact

- 📧 Email: [hi@whichclaw.com](mailto:hi@whichclaw.com)
- 🐛 Bug Reports: [GitHub Issues](https://github.com/WhichClawTeam/WhichClaw/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/WhichClawTeam/WhichClaw/discussions)

## ⭐ Soutien

Si WhichClaw vous est utile, donnez-lui une ⭐ sur GitHub !

## 📄 Licence

[MIT](../LICENSE)

---

<p align="center">
  Fait avec 💚 par l'équipe WhichClaw<br/>
  <sub>📧 <a href="mailto:hi@whichclaw.com">hi@whichclaw.com</a></sub>
</p>
