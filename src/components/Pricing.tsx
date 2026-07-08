import React, { useState } from "react";
import { motion } from "framer-motion";
import { TickCircle, Verify, Code, CpuCharge, MedalStar } from "iconsax-react";
import confetti from "canvas-confetti";

const features = [
  { icon: <Code size={28} variant="Bulk" color="var(--gold-500)" />, title: "לומדים מקוד קליני שבפרודקשן", desc: "לא עוד תרגילים תיאורטיים מיושנים. אנו בונים יחד מערכות סקיילביליות אמיתיות, כולל ארכיטקטורת ענן וניהול סטייט מורכב." },
  { icon: <CpuCharge size={28} variant="Bulk" color="var(--purple-300)" />, title: "ארכיטקטורת GenAI מואצת", desc: "נלמד איך להפעיל את Cursor, Lovable, v0 ו-Claude Code כסוכנים הנדסיים המכפילים את פרודוקטיביות הפיתוח והדיבוג פי 10." },
  { icon: <MedalStar size={28} variant="Bulk" color="#00e5ff" />, title: "תיק עבודות בפרסום רשמי", desc: "כל סטודנט מסיים את ההכשרה עם אפליקציה קלינית חיה ב-App Store וב-Google Play המהווה הוכחת יכולת ניצחת מול מגייסים." },
  { icon: <Verify size={28} variant="Bulk" color="var(--gold-500)" />, title: "קהילת מהנדסים וליווי אישי לחיים", desc: "גישה קבועה לקהילת הבוגרים של Fluttero, עדכוני קוד שוטפים וליווי טכנולוגי בפרויקטים ובאבני דרך בקריירה." }
];

const faqs = [
  { q: "האם נדרש ניסיון קודם בפיתוח תוכנה?", a: "כן, המסלול מיועד לבעלי רקע בסיסי לפחות באחת משפות התכנות (כגון JavaScript, Python, C#, Java, TypeScript) שרוצים להתמחות בפיתוח מובייל מתקדם וארכיטקטורת AI." },
  { q: "כיצד משתלבים כלי ה-GenAI במתודיקת הלימוד?", a: "אנו לא לומדים רק לכתוב קוד ידנית, אלא רוכשים מיומנויות של AI Engineers: תכנון פרומפטים מערכתיים ב-Cursor, אוטומציית ווידג'טים ובניית לוגיקה עסקית תוך דקות." },
  { q: "מה קורה במידה ונבצר ממני להשתתף במפגש חי?", a: "כל המפגשים מוקלטים ב-4K באיכות אולפן ועולים לאזור האישי תוך 24 שעות, כולל סיכומים הנדסיים, קוד סורס מלא ומתועד ב-GitHub ומטלות תרגול." },
  { q: "איזו תעודה מקבלים בסיום ההכשרה?", a: "בוגרים אשר יעמדו בכל משימות הליבה ויעלו את אפליקציית הגמר לחנויות הרשמיות יזכו לתעודת מוסמך Senior Flutter & AI Developer המוכרת על ידי חברות שותפות." }
];

export const Pricing: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;

    try {
      const formData = new URLSearchParams();
      formData.append("form-name", "lead");
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("source", "pricing_registration");

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString()
      });

      if (response.ok) {
        setSubmitted(true);
        confetti({ particleCount: 150, spread: 100, origin: { y: 0.5 } });
      } else {
        alert("שגיאה ברישום. אנא נסה שוב.");
      }
    } catch (error) {
      console.error("Error submitting lead:", error);
      alert("שגיאה בחיבור לשרת.");
    }
  };

  return (
    <div style={{ background: "transparent" }}>
      {/* Why Us Section */}
      <section id="features" style={{ padding: "120px 0", borderBottom: "none" }}>
        <div className="container">
          <div className="section-head" style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 60px" }}>
            <span className="eyebrow">04 · היתרון ההנדסי</span>
            <h2 style={{ fontSize: "clamp(32px, 4.5vw, 54px)", margin: "16px 0", color: "#fff", letterSpacing: "-0.02em" }}>
              למה לבחור במסלול של <span style={{ color: "var(--gold-500)" }}>Fluttero</span>
            </h2>
            <p style={{ fontSize: "18.5px", color: "var(--ink-1)", lineHeight: 1.6 }}>
              כשתוכנית הלימודים מתוכננת מתוך דרישות הליבה הקשוחות של חברות הטכנולוגיה המובילות, התוצאות מאיצות קריירה.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {features.map((feat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card skiper-hover-lift"
                style={{ padding: "40px 34px", borderRadius: "42px" }}
              >
                <div className="iconsax-box gold" style={{ width: "56px", height: "56px", borderRadius: "24px", marginBottom: "22px" }}>
                  {feat.icon}
                </div>
                <h3 style={{ fontSize: "21px", color: "#fff", marginBottom: "12px", fontWeight: 700 }}>{feat.title}</h3>
                <p style={{ fontSize: "15px", color: "var(--ink-2)", lineHeight: 1.65, margin: 0 }}>{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Card with Skiper UI Border Glow */}
      <section id="priceCard" style={{ padding: "140px 0", background: "radial-gradient(circle at center, rgba(124,77,255,0.08) 0%, transparent 70%)" }}>
        <div className="container" style={{ maxWidth: "880px" }}>
          <div className="section-head" style={{ textAlign: "center", marginBottom: "60px" }}>
            <span className="eyebrow">05 · תאריכים והרשמה</span>
            <h2 style={{ fontSize: "clamp(34px, 5vw, 58px)", margin: "16px 0", color: "#fff", letterSpacing: "-0.02em" }}>
              הצטרפו למחזור קרובים
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="skiper-border-glow card"
            style={{
              padding: "60px 50px", borderRadius: "52px",
              boxShadow: "0 35px 90px rgba(0,0,0,0.85)", position: "relative", overflow: "hidden",
              background: "linear-gradient(155deg, rgba(26, 21, 48, 0.9) 0%, rgba(13, 11, 24, 0.95) 100%)"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "28px", borderBottom: "1px solid var(--line)", paddingBottom: "38px", marginBottom: "38px" }}>
              <div>
                <h3 style={{ fontSize: "36px", color: "#fff", margin: "0 0 8px", letterSpacing: "-0.02em" }}>מסלול Senior Flutter & AI</h3>
                <p style={{ fontSize: "16px", color: "var(--ink-1)", margin: 0 }}>הכשרה קלינית מקיפה + פרויקט לפרודקשן בחנויות הרשמיות</p>
              </div>

              <div style={{ textAlign: "left" }}>
                <span style={{ fontSize: "14px", color: "var(--ink-2)", textDecoration: "line-through", display: "block", marginBottom: "2px" }}>₪11,800</span>
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                  <b style={{ fontSize: "52px", color: "#fff", fontFamily: "Outfit", fontWeight: 900, letterSpacing: "-0.03em" }}>₪7,000</b>
                  <span style={{ color: "var(--gold-500)", fontSize: "14px", fontWeight: 700, background: "rgba(245,197,24,0.12)", padding: "4px 10px", borderRadius: "8px" }}>הרשמה מוקדמת</span>
                </div>
                <span style={{ fontSize: "13px", color: "var(--ink-2)", display: "block", marginTop: "4px" }}>ניתן לחלק עד 12 תשלומים ללא ריבית</span>
              </div>
            </div>

            <div className="price-features-grid">
              <div style={{ display: "flex", alignItems: "center", gap: "14px", color: "#fff", fontSize: "16px", fontWeight: 600 }}>
                <TickCircle size={24} variant="Bulk" color="var(--gold-500)" style={{ flexShrink: 0 }} />
                <span>12 שבועות של הכשרה קלינית מעשית ואינטנסיבית</span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "14px", color: "#fff", fontSize: "16px", fontWeight: 600 }}>
                <TickCircle size={24} variant="Bulk" color="var(--gold-500)" style={{ flexShrink: 0 }} />
                <span>שיעורי LIVE אינטראקטיביים + הקלטות 4K לכל החיים</span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "14px", color: "#fff", fontSize: "16px", fontWeight: 600 }}>
                <TickCircle size={24} variant="Bulk" color="var(--gold-500)" style={{ flexShrink: 0 }} />
                <span>רישיונות ושימוש בכלים מבוססי AI (Cursor / Lovable)</span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "14px", color: "#fff", fontSize: "16px", fontWeight: 600 }}>
                <TickCircle size={24} variant="Bulk" color="var(--gold-500)" style={{ flexShrink: 0 }} />
                <span>ליווי הנדסי אישי עד להשקה רשמית ב-App Store</span>
              </div>
            </div>

             {/* Registration Form */}
            {!submitted ? (
              <form onSubmit={handleRegister} className="price-form">
                <input
                  type="text"
                  placeholder="שם פרטי"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <div className="form-separator" style={{ width: "1px", height: "30px", background: "rgba(255,255,255,0.15)", flexShrink: 0 }} />
                <input
                  type="tel"
                  placeholder="מספר טלפון"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-gold">
                  <span>הבטחת מקום במחזור</span>
                </button>
              </form>
            ) : (
              <div style={{ padding: "26px", background: "rgba(245,197,24,0.12)", border: "1px solid var(--gold-500)", borderRadius: "35px", color: "var(--gold-500)", fontWeight: 700, textAlign: "center", fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
                <TickCircle size={28} variant="Bulk" color="var(--gold-500)" />
                <span>מעולה! רשמנו את פרטיך. צוות הרישום ייצור איתך קשר בהקדם לשיחת התאמה וקליטה!</span>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" style={{ padding: "160px 0", borderTop: "none" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="section-head" style={{ textAlign: "center", marginBottom: "60px" }}>
            <span className="eyebrow">07 · שאלות ותשובות</span>
            <h2 style={{ fontSize: "clamp(32px, 4.5vw, 52px)", margin: "16px 0", color: "#fff", letterSpacing: "-0.02em" }}>
              כל מה שרציתם לדעת
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="card"
                  style={{
                    padding: "30px 38px", borderRadius: "35px",
                    cursor: "pointer", transition: "all 0.3s ease",
                    border: isOpen ? "1px solid rgba(245,197,24,0.4)" : "1px solid var(--line)"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontWeight: 700, fontSize: "18px", color: "#fff" }}>
                    <span>{faq.q}</span>
                    <span style={{ fontSize: "24px", color: "var(--gold-500)", fontFamily: "Outfit", fontWeight: 800 }}>{isOpen ? "−" : "+"}</span>
                  </div>
                  {isOpen && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      style={{ fontSize: "15.5px", color: "var(--ink-1)", lineHeight: 1.65, marginTop: "16px", paddingTop: "16px", borderTop: "1px solid var(--line)", marginBottom: 0 }}
                    >
                      {faq.a}
                    </motion.p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
