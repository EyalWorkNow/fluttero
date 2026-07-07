import React from "react";
import { motion } from "framer-motion";
import { Book, Code, CpuCharge, MedalStar, DocumentText } from "iconsax-react";

const stages = [
  {
    num: "01",
    icon: <Book size={28} variant="Bulk" color="var(--gold-500)" />,
    title: "יסודות Flutter ו-Dart",
    desc: "הכרת סביבת הפיתוח, תחביר Dart קליני, מודל הווידג'טים וארכיטקטורת רכיבים במסך.",
    tag: "שבועות 1-3",
    color: "gold"
  },
  {
    num: "02",
    icon: <Code size={28} variant="Bulk" color="var(--purple-300)" />,
    title: "עיצוב, אנימציות ו-State Management",
    desc: "בניית ממשקים מתקדמים, ניהול מצב עם Riverpod/Bloc ואנימציות חלקות ב-60fps.",
    tag: "שבועות 4-6",
    color: "purple"
  },
  {
    num: "03",
    icon: <CpuCharge size={28} variant="Bulk" color="#00e5ff" />,
    title: "בקאנד עם Firebase ו-AI Dev Tools",
    desc: "חיבור מסדי נתונים בענן, אימות משתמשים והטמעת ארכיטקטורת Cursor, Lovable ו-v0.",
    tag: "שבועות 7-9",
    color: "cyan"
  },
  {
    num: "04",
    icon: <MedalStar size={28} variant="Bulk" color="var(--gold-500)" />,
    title: "פרויקט גמר והעלאה לחנויות הרשמיות",
    desc: "פיתוח אפליקציה מלאה מקצה-לקצה, בדיקות אבטחה ופרסום רשמי ב-App Store וב-Google Play.",
    tag: "שבועות 10-12",
    color: "gold"
  }
];

const lessons = [
  { id: "01", title: "מבוא ל-Flutter והתקנת סביבת עבודה", desc: "התקנת Flutter SDK, VS Code, Cursor והרצת אפליקציה ראשונה על סימולטור ועל מכשיר אמיתי." },
  { id: "02", title: "שפת Dart - עקרונות תכנות מונחה עצמים", desc: "משתנים, פונקציות, מחלקות, הורשה, אסינכרוניות (Future/Stream) ושימוש ב-Null Safety." },
  { id: "03", title: "עץ הווידג'טים - StatelessWidget vs StatefulWidget", desc: "הבנת מחזור החיים של ווידג'טים, פריסות בסיס (Row, Column, Stack) וניהול מצב מקומי עם setState." },
  { id: "04", title: "עיצוב ממשк משתמש - Responsive Layouts", desc: "בניית מסכים המותאמים לגדלי מסך שונים, שימוש ב-MediaQuery, LayoutBuilder וערכות נושא (Themes)." },
  { id: "05", title: "ניווט ומעבר בין מסכים - GoRouter", desc: "ניהול נתיבים מתקדם, העברת נתונים בין מסכים, מסכי טאבים (BottomNav) ומגירות צד." },
  { id: "06", title: "עבודה עם רשימות ונתונים - ListView & GridView", desc: "תצוגת נתונים דינמית ויעילה עם ListView.builder, אינפיניטי סקרול ורענון במשיכה (Pull to Refresh)." },
  { id: "07", title: "טפסים, ולידציות וקלט משתמש", desc: "ניהול טפסים מורכבים, אבטחת קלט, התאמת מקלדת ושימוש בבקרים (TextEditingController)." },
  { id: "08", title: "אנימציות בסיסיות ומתקדמות - Implicit & Explicit", desc: "אנימציות מעבר חלקות (AnimatedContainer, Hero), ובניית אנימציות מורכבות עם AnimationController." },
  { id: "09", title: "אנימציות מותאמות אישית - Lottie & Rive", desc: "שילוב קבצי אנימציה מקצועיים ממעצבים, שליטה באינטראקציות ויצירת חווית משתמש עשירה ומעוררת השראה." },
  { id: "10", title: "State Management מתקדם עם Riverpod", desc: "הארכיטקטורה המודרנית והמומלצת לניהול מצב ב-Flutter: Providers, Consumer, וניהול תלות נקייה." },
  { id: "11", title: "ארכיטקטורת קוד נקייה (Clean Architecture)", desc: "הפרדה בין השכבות: Data, Domain, Presentation, כתיבת קוד תחזוקתי ומודולרי לפרויקטים גדולים." },
  { id: "12", title: "עבודה עם רשת וממשקי ה-API (REST & JSON)", desc: "ביצוע קריאות HTTP מול שרתים חיצוניים, פענוח נתונים מסובכים וניהול שגיאות ובקשות רשת." },
  { id: "13", title: "שמירת מידע מקומית - SharedPreferences & Hive", desc: "אחסון נתונים על המכשיר לחוויית אופליין חלקה, מטמון מקומי וניהול הגדרות משתמש." },
  { id: "14", title: "חיבור ל-Firebase Authentication", desc: "מערכת הרשמה והתחברות מאובטחת: אימייל וסיסמה, התחברות מהירה עם Google, Apple ו-SMS." },
  { id: "15", title: "מסד נתונים בזמן אמת - Cloud Firestore", desc: "ניהול אוסף מסמכים בזמן אמת, סנכרון נתונים חי בין מכשירים ושילוב שאילתות מתקדמות." },
  { id: "16", title: "אחסון קבצים ומדיה - Firebase Storage", desc: "העלאת תמונות, סרטונים וקבצים מורכבים מהאפליקציה לענן, ודחיסת קבצים לשמירה על ביצועים." },
  { id: "17", title: "התראות דחיפה - Firebase Cloud Messaging (FCM)", desc: "שליחת התראות פוש מותאמות אישית למשתמשים, טיפול בלחיצה וסנכרון פעילות ברקע." },
  { id: "18", title: "שילוב כלי AI בפיתוח - Cursor & Claude Code", desc: "כיצד להשתמש בעורכי קוד מבוססי AI, יצירת ווידג'טים מורכבים בשניות, ודיבוג חכם של שגיאות." },
  { id: "19", title: "יצירת ממשקים עם Lovable ו-v0 והמרתם ל-Flutter", desc: "תהליך עבודה מודרני: יצירת עיצובים מרהיבים ב-UI Generators והמרתם המהירה לקוד Dart פרודקשן." },
  { id: "20", title: "בדיקות תוכנה - Unit Tests & Widget Tests", desc: "כתיבת בדיקות אוטומטיות לוודא את אמינות הקוד, מניעת באגים ברגרסיה ובדיקת לוגיקה עסקית." },
  { id: "21", title: "שיפור ביצועים ואופטימיזציה של זיכרון", desc: "שימוש ב-DevTools לזיהוי זליגות זיכרון, הקטנת נפח האפליקציה ושמירה על 60/120 FPS רציפים." },
  { id: "22", title: "הכנה לחנויות - אישורים, אייקונים ומסכי טעינה", desc: "יצירת ה-Splash Screen, אייקונים מעוצבים לכל הגדלים, והכנת חבילות השחרור ל-iOS ו-Android." },
  { id: "23", title: "העלאה ל-App Store ול-Google Play", desc: "פתיחת חשבונות מפתח, מעבר ביקורת של Apple ו-Google, והפצה רשמית למשתמשים ברחבי העולם." },
  { id: "24", title: "פרויקט גמר ותעודת סיום", desc: "הצגת פרויקטי הגמר של הסטודנטים בפני פאנל מומחים מהתעשייה, קבלת משוב וחלוקת תעודות מוסמך." }
];

export const Syllabus: React.FC = () => {
  return (
    <section id="syllabus" style={{ padding: "120px 0", background: "transparent" }}>
      <div className="container">
        <div className="section-head" style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 60px" }}>
          <span className="eyebrow">01 · תוכנית הלימודים</span>
          <h2 style={{ fontSize: "clamp(32px, 4.5vw, 54px)", margin: "16px 0", color: "#fff", letterSpacing: "-0.02em" }}>
            סילבוס קורס פיתוח עם <span style={{ color: "var(--gold-500)" }}>Flutter ו-AI</span>
          </h2>
          <p style={{ fontSize: "18.5px", color: "var(--ink-1)", lineHeight: 1.6 }}>
            מסלול הכשרה מקיף של 12 שבועות המשלב לימודי ליבה הנדסיים עמוקים יחד עם כלי פיתוח ה-AI המאיצים בעולם.
          </p>
        </div>

        {/* 4 Stages */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", marginBottom: "80px" }}>
          {stages.map((stg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card skiper-hover-lift"
              style={{ padding: "30px", borderRadius: "30px", position: "relative", display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div className={`iconsax-box ${stg.color}`} style={{ width: "52px", height: "52px" }}>
                  {stg.icon}
                </div>
                <span style={{ fontSize: "12px", fontWeight: 700, padding: "5px 14px", background: "rgba(255,255,255,0.04)", color: "var(--ink-1)", borderRadius: "99px", border: "1px solid var(--line)" }}>{stg.tag}</span>
              </div>
              <div>
                <span style={{ fontSize: "13px", fontWeight: 800, color: "var(--gold-500)", fontFamily: "Outfit", display: "block", marginBottom: "4px" }}>שלב {stg.num}</span>
                <h3 style={{ fontSize: "20px", color: "#fff", marginBottom: "10px" }}>{stg.title}</h3>
                <p style={{ fontSize: "15px", color: "var(--ink-2)", lineHeight: 1.65, margin: 0 }}>{stg.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 24 Lessons Grid */}
        <div style={{ textAlign: "center", marginBottom: "40px", display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
          <DocumentText size={26} variant="Bulk" color="var(--gold-500)" />
          <h3 style={{ fontSize: "28px", color: "#fff", margin: 0, letterSpacing: "-0.01em" }}>פירוט 24 המפגשים והנושאים הנלמדים</h3>
        </div>

        <div className="syllabus-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "20px" }}>
          {lessons.map((les, idx) => (
            <motion.div
              key={les.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: (idx % 6) * 0.05 }}
              className="lesson card skiper-hover-lift"
              style={{ padding: "24px", borderRadius: "24px", display: "flex", gap: "16px", alignItems: "flex-start", background: "rgba(255,255,255,0.02)" }}
            >
              <span style={{ fontSize: "17px", fontWeight: 800, color: "var(--gold-500)", background: "rgba(245,197,24,0.08)", padding: "8px 12px", borderRadius: "18px", fontFamily: "Outfit", flexShrink: 0, border: "1px solid rgba(245,197,24,0.18)" }}>
                {les.id}
              </span>
              <div>
                <h4 style={{ fontSize: "17px", color: "#fff", margin: "0 0 8px", fontWeight: 700 }}>{les.title}</h4>
                <p style={{ fontSize: "14.5px", color: "var(--ink-2)", lineHeight: 1.6, margin: 0 }}>{les.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
