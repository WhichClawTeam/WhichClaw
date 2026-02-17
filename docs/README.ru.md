<p align="center">
  <img src="../build/icon.png" alt="WhichClaw" width="120" />
</p>

<h1 align="center">WhichClaw</h1>

<p align="center">
  <strong>One Hub. All Models. Every Coding Tool.</strong><br/>
  <sub>WhichClaw �?это настольное приложение, предоставляющее</sub>
</p>

<p align="center">
  <a href="https://github.com/WhichClawTeam/WhichClaw/releases">
    <img src="https://img.shields.io/github/v/release/WhichClawTeam/WhichClaw?style=flat-square&color=00FF9D" alt="Release" />
  </a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-blue?style=flat-square" alt="Platform" />
  <img src="https://img.shields.io/github/license/WhichClawTeam/WhichClaw?style=flat-square" alt="License" />
</p>

<p align="center">
  <a href="../README.md">English</a> · <a href="./README.zh-CN.md">简体中�?/a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.ja.md">日本�?/a> · <a href="./README.ko.md">한국�?/a> · <a href="./README.es.md">Español</a> · <a href="./README.fr.md">Français</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.pt.md">Português</a> · **Русский** · <a href="./README.ar.md">العربية</a>
</p>

---

## �?Что такое WhichClaw?

WhichClaw �?это настольное приложение, предоставляющее **визуальный, унифицированный интерфейс** для управления ИИ-моделями во всех ваших инструментах разработки. Больше не нужно копаться в конфигурационных файлах �?просто нажмите и переключите.

### Проблема

- 😫 Переключение ИИ-моделей в инструментах вроде OpenClaw требует ручного редактирования конфигурационных файлов
- 🔄 У каждого инструмента свой формат конфигурации моделей
- 🧩 Нет удобного способа управлять навыками и расширениями между инструментами

### Решение

WhichClaw выступает **центральной панелью управления** для всех ваших ИИ-инструментов разработки:

- 🎯 **Переключение Модели в Один Клик** �?Визуально переключайте ИИ-модели для любого поддерживаемого инструмента
- 🔀 **Двойной Протокол** �?Поддержка OpenAI и Anthropic API, переключение моделей в любое время
- 🚇 **Умный Туннельный Прокси** �?Доступ к гео-ограниченным API без полного VPN; проксируется только API-трафик
- 🧩 **Браузер Навыков** �?Находите, устанавливайте и управляйте ИИ-навыками
- 🖥�?**Локальный Сервер Моделей** �?Запускайте open-source модели (Qwen, DeepSeek, Llama) локально через llama.cpp
- 🌍 **28 Языков** �?Полная поддержка интернационализации
- 🎮 **Встроенные ИИ-Приложения** �?Интерактивные ИИ-игры и утилиты, такие как Reversi и AI Translate
- 🌃 **Киберпанк Хакер UI** �?Потрясающая неоново-зелёная эстетика терминала для футуристического кодинга

## 🖼�?Скриншоты

### Model Nexus �?Управляйте всеми ИИ-моделями в одном месте
![Model Nexus](1.png)

### App Manager �?Переключение модели в один клик для всех инструментов
![App Manager](2.png)

### Local Server �?Запускайте open-source модели локально с llama.cpp
![Local Server](3.png)

### Skill Browser �?Находите и устанавливайте ИИ-навыки
![Skill Browser](4.png)

## 🚀 Быстрый Старт

### Скачать

Получите последний релиз для вашей платформы:

| Платформа | Скачать |
|----------|----------|
| Windows  | [WhichClaw-Setup.exe](https://github.com/WhichClawTeam/WhichClaw/releases/latest) |
| macOS    | [WhichClaw.dmg](https://github.com/WhichClawTeam/WhichClaw/releases/latest) |
| Linux    | [WhichClaw.AppImage](https://github.com/WhichClawTeam/WhichClaw/releases/latest) |

### Примечания для Linux

```bash
chmod +x WhichClaw-*.AppImage
./WhichClaw-*.AppImage
```

> При ошибках FUSE: `sudo apt install libfuse2`

## 🔧 Поддерживаемые Инструменты

| Инструмент | Статус | Смена Модели | Протокол |
|------|--------|----------------|----------|
| OpenClaw | �?Поддерживается | �?| OpenAI / Anthropic |
| Claude Code | �?Поддерживается | �?| Anthropic |
| Cline | �?Поддерживается | �?| OpenAI |
| Continue | �?Поддерживается | �?| OpenAI |
| OpenCode | �?Поддерживается | �?| OpenAI |
| Codex | �?Поддерживается | �?| OpenAI |
| Roo Code | �?Поддерживается | �?| OpenAI |

## 🏗�?Технологический Стек

- **Electron** �?Кроссплатформенный десктопный фреймворк
- **React + TypeScript** �?UI фреймворк
- **Vanilla CSS** �?Пользовательская дизайн-система в стиле киберпанк
- **Vite** �?Инструмент сборки
- **llama.cpp** �?Локальный движок инференса моделей

## 🛠�?Разработка

```bash
npm install
npm run dev
npm run build
```

## 🤝 Вклад

Вклады приветствуются! Не стесняйтесь открывать issues или отправлять pull requests.

We're especially looking for help with:
- 🍎 **Тестирование macOS** �?Мы ещё не полностью протестировали сборки macOS
- 🔧 **Новые интеграции** �?Помогите добавить поддержку большего количества ИИ-инструментов
- 🌐 **Улучшение переводов** �?Приглашаем носителей языка!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📬 Contact

- 📧 Email: [hi@whichclaw.com](mailto:hi@whichclaw.com)
- 🐛 Bug Reports: [GitHub Issues](https://github.com/WhichClawTeam/WhichClaw/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/WhichClawTeam/WhichClaw/discussions)

## �?Поддержка

Если WhichClaw вам полезен, поставьте �?на GitHub �?это помогает другим найти проект!

## 📄 Лицензия

[MIT](../LICENSE)

---

<p align="center">
  Сделано с 💚 командой WhichClaw<br/>
  <sub>📧 <a href="mailto:hi@whichclaw.com">hi@whichclaw.com</a></sub>
</p>
