<p align="center">
  <img src="../build/icon.png" alt="WhichClaw" width="120" />
</p>

<h1 align="center">WhichClaw</h1>

<p align="center">
  <strong>One Hub. All Models. Every Coding Tool.</strong><br/>
  <sub>WhichClaw هو تطبيق سطح مكتب يوفر</sub>
</p>

<p align="center">
  <a href="https://github.com/WhichClawTeam/WhichClaw/releases">
    <img src="https://img.shields.io/github/v/release/WhichClawTeam/WhichClaw?style=flat-square&color=00FF9D" alt="Release" />
  </a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-blue?style=flat-square" alt="Platform" />
  <img src="https://img.shields.io/github/license/WhichClawTeam/WhichClaw?style=flat-square" alt="License" />
</p>

<p align="center">
  <a href="../README.md">English</a> · <a href="./README.zh-CN.md">简体中�?/a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.ja.md">日本�?/a> · <a href="./README.ko.md">한국�?/a> · <a href="./README.es.md">Español</a> · <a href="./README.fr.md">Français</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.pt.md">Português</a> · <a href="./README.ru.md">Русский</a> · **العربية**
</p>

---

## �?ما هو WhichClaw؟

WhichClaw هو تطبيق سطح مكتب يوفر **واجهة مرئية وموحدة** لإدارة نماذج الذكاء الاصطناعي عبر أدوات البرمجة الخاصة بك. لا مزيد من البحث في ملفات التكوين �?فقط انقر وبدّل.

### المشكلة

- 😫 تبديل نماذج الذكاء الاصطناعي في أدوات مثل OpenClaw يتطلب تعديل ملفات التكوين يدوياً
- 🔄 كل أداة لها تنسيق تكوين النماذج الخاص بها
- 🧩 لا توجد طريقة سهلة لإدارة المهارات والإضافات عبر الأدوات

### الحل

WhichClaw يعمل كـ **لوحة تحكم مركزية** لجميع أدوات البرمجة بالذكاء الاصطناعي:

- 🎯 **تبديل النموذج بنقرة واحدة** �?بدّل نماذج الذكاء الاصطناعي بصرياً لأي أداة مدعومة
- 🔀 **بروتوكول مزدوج** �?دعم OpenAI و Anthropic API، بدّل النماذج في أي وقت
- 🚇 **وكيل نفق ذكي** �?الوصول إلى واجهات برمجة التطبيقات المحظورة جغرافياً بدون VPN كامل
- 🧩 **متصفح المهارات** �?اكتشف وثبّت وأدر مهارات الذكاء الاصطناعي
- 🖥�?**خادم النماذج المحلي** �?شغّل نماذج مفتوحة المصدر (Qwen، DeepSeek، Llama) محلياً عبر llama.cpp
- 🌍 **28 لغة** �?دعم كامل للتدويل
- 🎮 **تطبيقات ذكاء اصطناعي مدمجة** �?ألعاب وأدوات تفاعلية مثل Reversi و AI Translate
- 🌃 **واجهة هاكر سايبربانك** �?جمالية طرفية بالنيون الأخضر تجعل البرمجة مستقبلية

## 🖼�?لقطات الشاشة

### Model Nexus �?أدر جميع نماذج الذكاء الاصطناعي في مكان واحد
![Model Nexus](1.png)

### App Manager �?تبديل النموذج بنقرة واحدة لجميع الأدوات
![App Manager](2.png)

### Local Server �?شغّل نماذج مفتوحة المصدر محلياً مع llama.cpp
![Local Server](3.png)

### Skill Browser �?اكتشف وثبّت مهارات الذكاء الاصطناعي
![Skill Browser](4.png)

## 🚀 البداية السريعة

### تحميل

احصل على أحدث إصدار لمنصتك:

| المنصة | تحميل |
|----------|----------|
| Windows  | [WhichClaw-Setup.exe](https://github.com/WhichClawTeam/WhichClaw/releases/latest) |
| macOS    | [WhichClaw.dmg](https://github.com/WhichClawTeam/WhichClaw/releases/latest) |
| Linux    | [WhichClaw.AppImage](https://github.com/WhichClawTeam/WhichClaw/releases/latest) |

### ملاحظات Linux

```bash
chmod +x WhichClaw-*.AppImage
./WhichClaw-*.AppImage
```

> إذا واجهت أخطاء FUSE: `sudo apt install libfuse2`

## 🔧 الأدوات المدعومة

| الأداة | الحالة | تبديل النموذج | البروتوكول |
|------|--------|----------------|----------|
| OpenClaw | �?مدعوم | �?| OpenAI / Anthropic |
| Claude Code | �?مدعوم | �?| Anthropic |
| Cline | �?مدعوم | �?| OpenAI |
| Continue | �?مدعوم | �?| OpenAI |
| OpenCode | �?مدعوم | �?| OpenAI |
| Codex | �?مدعوم | �?| OpenAI |
| Roo Code | �?مدعوم | �?| OpenAI |

## 🏗�?المكدس التقني

- **Electron** �?إطار عمل سطح مكتب متعدد المنصات
- **React + TypeScript** �?إطار عمل واجهة المستخدم
- **Vanilla CSS** �?نظام تصميم سايبربانك مخصص
- **Vite** �?أداة البناء
- **llama.cpp** �?محرك استدلال النماذج المحلي

## 🛠�?التطوير

```bash
npm install
npm run dev
npm run build
```

## 🤝 المساهمة

المساهمات مرحب بها! لا تتردد في فتح issues أو إرسال pull requests.

We're especially looking for help with:
- 🍎 **اختبار macOS** �?لم نختبر بناء macOS بالكامل بعد
- 🔧 **تكاملات جديدة** �?ساعدنا في إضافة دعم لمزيد من أدوات الذكاء الاصطناعي
- 🌐 **تحسين الترجمات** �?المتحدثون الأصليون مرحب بهم!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📬 Contact

- 📧 Email: [hi@whichclaw.com](mailto:hi@whichclaw.com)
- 🐛 Bug Reports: [GitHub Issues](https://github.com/WhichClawTeam/WhichClaw/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/WhichClawTeam/WhichClaw/discussions)

## �?الدعم

إذا وجدت WhichClaw مفيداً، فكّر في إعطائه �?على GitHub �?يساعد الآخرين على اكتشاف المشروع!

## 📄 الرخصة

[MIT](../LICENSE)

---

<p align="center">
  صنع بـ 💚 من فريق WhichClaw<br/>
  <sub>📧 <a href="mailto:hi@whichclaw.com">hi@whichclaw.com</a></sub>
</p>
