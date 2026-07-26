# قلم — Next.js پراجیکٹ ہدایات

## یہ پراجیکٹ کیا ہے
یہ آپ کے InPage طرز کے Urdu ایڈیٹر کا **Next.js** ورژن ہے۔ اصل ایڈیٹر
(`public/editor.html`) مکمل کام کرتا ہے — Next.js اسے فُل اسکرین پیج کے
طور پر لوڈ کرتا ہے۔

---

## 1) کمپیوٹر پر چلا کر دیکھنا (Local Testing)

```
cd qalam-nextjs
npm install
npm run dev
```
پھر براؤزر میں کھولیں: http://localhost:3000

---

## 2) ویب سائٹ کے طور پر پبلش کرنا (Free Hosting)

```
npm run build
```
اس سے `out` نامی فولڈر بنے گا۔ اسے مفت میں یہاں اپلوڈ کریں:
- **Vercel** (vercel.com) — Next.js کے لیے بہترین، بس GitHub سے connect کریں
- **Netlify** (netlify.com) — `out` فولڈر کو drag-and-drop کریں

اپلوڈ ہونے کے بعد آپ کو ایک لنک ملے گا (جیسے `qalam.vercel.app`) جو
کسی کو بھی بھیج کر ایڈیٹر استعمال کروا سکتے ہیں — موبائل ہو یا لیپ ٹاپ۔

---

## 3) Android ایپ (APK) بنانا

Web hosting کے بعد اسی لنک کو Android ایپ میں تبدیل کرنے کے دو آسان طریقے:

### طریقہ الف — PWA Builder (بغیر کوڈ کے)
1. pwabuilder.com پر جائیں
2. اپنا ہوسٹ کیا ہوا لنک ڈالیں (جیسے qalam.vercel.app)
3. "Package for Stores" پر کلک کریں → Android منتخب کریں
4. APK/AAB فائل ڈاؤن لوڈ ہو جائے گی

### طریقہ ب — Capacitor (زیادہ کنٹرول کے ساتھ)
```
npm install @capacitor/core @capacitor/android
npx cap init "Qalam" "com.yourname.qalam"
npx cap add android
npx cap sync android
npx cap open android
```
Android Studio میں یہ خود کھل جائے گا — وہاں سے Signed APK/AAB بنائیں۔

---

## 4) Play Store پر اپلوڈ کرنا
- play.google.com/console پر جائیں
- $25 ایک بار کی رجسٹریشن فیس ادا کریں
- AAB فائل اپلوڈ کریں، تفصیلات اور اسکرین شاٹس شامل کریں
- Publish کریں

---

## فائلوں کی فہرست
- `public/editor.html` — مکمل کام کرنے والا Urdu ایڈیٹر (InPage طرز)
- `pages/index.js` — Next.js پیج جو ایڈیٹر لوڈ کرتا ہے
- `next.config.js` — static export کی سیٹنگ (موبائل ایپ کے لیے ضروری)
- `package.json` — پراجیکٹ کی معلومات اور کمانڈز

اگر ایڈیٹر میں کوئی تبدیلی کرنی ہو تو صرف `public/editor.html` میں ترمیم
کریں — Next.js خود بخود اسے لوڈ کر لے گا۔
