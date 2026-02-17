<p align="center">
  <img src="../build/icon.png" alt="WhichClaw" width="120" />
</p>

<h1 align="center">WhichClaw</h1>

<p align="center">
  <strong>One Hub. All Models. Every Coding Tool.</strong><br/>
  <sub>WhichClaw 是一款桌面應用，為你�?AI 程式設計工具提供</sub>
</p>

<p align="center">
  <a href="https://github.com/WhichClawTeam/WhichClaw/releases">
    <img src="https://img.shields.io/github/v/release/WhichClawTeam/WhichClaw?style=flat-square&color=00FF9D" alt="Release" />
  </a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-blue?style=flat-square" alt="Platform" />
  <img src="https://img.shields.io/github/license/WhichClawTeam/WhichClaw?style=flat-square" alt="License" />
</p>

<p align="center">
  <a href="../README.md">English</a> · <a href="./README.zh-CN.md">简体中�?/a> · **繁體中文** · <a href="./README.ja.md">日本�?/a> · <a href="./README.ko.md">한국�?/a> · <a href="./README.es.md">Español</a> · <a href="./README.fr.md">Français</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.pt.md">Português</a> · <a href="./README.ru.md">Русский</a> · <a href="./README.ar.md">العربية</a>
</p>

---

## �?WhichClaw 是什麼？

WhichClaw 是一款桌面應用，為你�?AI 程式設計工具提供**視覺化、統一的模型管理介�?*。不再需要手動翻設定�?—�?點一下，就能切換�?
### 痛點

- 😫 �?OpenClaw 等工具中切換模型需要手動編輯設定檔
- 🔄 每個工具都有自己的模型設定格式
- 🧩 沒有方便的方式管理技能和擴充

### 解決方案

WhichClaw 是你所�?AI 程式設計工具�?*中央控制面板**�?
- 🎯 **一鍵切換模�?* �?視覺化切換任何支援工具的 AI 模型
- 🔀 **雙協議支�?* �?OpenAI & Anthropic API 支援，隨時隨地切換模�?- 🚇 **智慧隧道代理** �?無需全域 VPN 即可存取受限 API，僅代理 API 流量
- 🧩 **技能瀏覽�?* �?發現、安裝和管理 AI 技�?- 🖥�?**本地模型伺服�?* �?透過 llama.cpp 本地執行開源模型（Qwen、DeepSeek、Llama�?- 🌍 **28 種語言** �?完整國際化支�?- 🎮 **內建 AI 應用** �?互動�?AI 遊戲和工具，�?Reversi �?AI 翻譯
- 🌃 **賽博龐克駭客 UI** �?炫酷的霓虹綠終端美學，讓程式設計充滿未來�?
## 🖼�?截圖

### Model Nexus �?在一處管理所�?AI 模型
![Model Nexus](1.png)

### App Manager �?一鍵為所有程式設計工具切換模�?![App Manager](2.png)

### Local Server �?透過 llama.cpp 本地執行開源模型
![Local Server](3.png)

### Skill Browser �?發現和安�?AI 技�?![Skill Browser](4.png)

## 🚀 快速開�?
### 下載

取得適合你平台的最新版本：

| 平台 | 下載 |
|----------|----------|
| Windows  | [WhichClaw-Setup.exe](https://github.com/WhichClawTeam/WhichClaw/releases/latest) |
| macOS    | [WhichClaw.dmg](https://github.com/WhichClawTeam/WhichClaw/releases/latest) |
| Linux    | [WhichClaw.AppImage](https://github.com/WhichClawTeam/WhichClaw/releases/latest) |

### Linux 說明

```bash
chmod +x WhichClaw-*.AppImage
./WhichClaw-*.AppImage
```

> 如果遇到 FUSE 錯誤�?`sudo apt install libfuse2`

## 🔧 支援的工�?
| 工具 | 狀�?| 模型切換 | 協議 |
|------|--------|----------------|----------|
| OpenClaw | �?已支�?| �?| OpenAI / Anthropic |
| Claude Code | �?已支�?| �?| Anthropic |
| Cline | �?已支�?| �?| OpenAI |
| Continue | �?已支�?| �?| OpenAI |
| OpenCode | �?已支�?| �?| OpenAI |
| Codex | �?已支�?| �?| OpenAI |
| Roo Code | �?已支�?| �?| OpenAI |

## 🏗�?技術棧

- **Electron** �?跨平台桌面框�?- **React + TypeScript** �?UI 框架
- **Vanilla CSS** �?自訂賽博龐克設計系統
- **Vite** �?建置工具
- **llama.cpp** �?本地模型推理引擎

## 🛠�?開發

```bash
npm install
npm run dev
npm run build
```

## 🤝 貢獻

歡迎貢獻！隨時提�?Issue �?Pull Request�?
We're especially looking for help with:
- 🍎 **macOS 測試** �?我們還沒有完全測試 macOS 構建
- 🔧 **新工具整�?* �?幫助我們支援更�?AI 程式設計工具
- 🌐 **翻譯改�?* �?歡迎母語使用者！

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📬 Contact

- 📧 Email: [hi@whichclaw.com](mailto:hi@whichclaw.com)
- 🐛 Bug Reports: [GitHub Issues](https://github.com/WhichClawTeam/WhichClaw/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/WhichClawTeam/WhichClaw/discussions)

## �?支持

如果 WhichClaw 對你有幫助，請在 GitHub 上給�?�?—�?讓更多人發現這個專案！

## 📄 授權條款

[MIT](../LICENSE)

---

<p align="center">
  �?WhichClaw 團隊�?💚 打�?br/>
  <sub>📧 <a href="mailto:hi@whichclaw.com">hi@whichclaw.com</a></sub>
</p>
