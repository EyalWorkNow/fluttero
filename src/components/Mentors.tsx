import React from "react";
import { motion } from "framer-motion";
import { Code, CpuCharge, ShieldSecurity, MedalStar, Verify } from "iconsax-react";

export const Mentors: React.FC = () => {
  return (
    <section id="mentors" style={{ padding: "120px 0", background: "transparent" }}>
      <div className="container">
        <div className="section-head" style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 60px" }}>
          <span className="eyebrow">06 · הצוות והמנחים</span>
          <h2 style={{ fontSize: "clamp(32px, 4.5vw, 54px)", margin: "16px 0", color: "#fff", letterSpacing: "-0.02em" }}>
            מי מלווה אתכם במסע
          </h2>
          <p style={{ fontSize: "18.5px", color: "var(--ink-1)", lineHeight: 1.6 }}>
            סגל המרצים מורכב מאנשי הנדסת תוכנה בכירים עם ניסיון קליני בהובלת מוצרים, ארכיטקטורת ענן ושליטה מוחלטת ב-AI.
          </p>
        </div>

        <div className="mentors-grid">
          {/* Main Mentor Card Eyal Atiya */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card skiper-hover-lift"
            style={{
              padding: "40px", borderRadius: "37px",
              border: "1px solid rgba(245,197,24,0.35)", position: "relative",
              boxShadow: "0 25px 60px rgba(0,0,0,0.6)", background: "linear-gradient(150deg, rgba(26, 21, 48, 0.8) 0%, rgba(15, 12, 28, 0.9) 100%)"
            }}
          >
            <div style={{ display: "flex", gap: "24px", alignItems: "center", marginBottom: "28px", borderBottom: "1px solid var(--line)", paddingBottom: "24px" }}>
              <div style={{ width: "90px", height: "90px", borderRadius: "28px", background: "linear-gradient(135deg, var(--gold-500), var(--purple-500))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "38px", color: "#000", fontWeight: 900, boxShadow: "0 10px 25px rgba(245,197,24,0.3)" }}>
                א.ע
              </div>
              <div>
                <span style={{ fontSize: "12.5px", fontWeight: 700, color: "var(--gold-500)", background: "rgba(245,197,24,0.12)", padding: "5px 14px", borderRadius: "99px", display: "inline-block", marginBottom: "8px", border: "1px solid rgba(245,197,24,0.25)" }}>
                  המנחה הראשי ויוצר התוכנית
                </span>
                <h3 style={{ fontSize: "28px", color: "#fff", margin: "0 0 4px", letterSpacing: "-0.01em" }}>אייל עטייה</h3>
                <p style={{ fontSize: "15px", color: "var(--ink-2)", margin: 0, fontWeight: 500 }}>Senior Mobile Tech Lead & AI Architect</p>
              </div>
            </div>

            <p style={{ fontSize: "16.5px", color: "var(--ink-1)", lineHeight: 1.75, marginBottom: "28px" }}>
              עם ניסיון קליני של מעל לעשור בפיתוח מערכות ענן ואפליקציות מובייל בחזית ההייטק. מתמחה בארכיטקטורות Flutter בעומסים קריטיים, שילוב מודלי GenAI בתהליכי קוד (AI-Driven Engineering), וליווי מפתחים ומנהלי צוותים מהקוד הראשון ועד להשקה גלובלית.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.03)", padding: "10px 18px", borderRadius: "16px", fontSize: "13.5px", fontWeight: 600, color: "#fff", border: "1px solid var(--line)" }}>
                <Verify size={18} variant="Bulk" color="var(--gold-500)" /> מוביל טכנולוגי בסטארטאפים
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.03)", padding: "10px 18px", borderRadius: "16px", fontSize: "13.5px", fontWeight: 600, color: "#fff", border: "1px solid var(--line)" }}>
                <Verify size={18} variant="Bulk" color="var(--purple-300)" /> ארכיטקטורת AI ומודלים
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.03)", padding: "10px 18px", borderRadius: "16px", fontSize: "13.5px", fontWeight: 600, color: "#fff", border: "1px solid var(--line)" }}>
                <Verify size={18} variant="Bulk" color="#00e5ff" /> 50+ פרויקטים בחנויות
              </span>
            </div>
          </motion.div>

          {/* Core Skills Grid */}
          <div className="mentor-skills-grid">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="card skiper-hover-lift"
              style={{ padding: "26px", borderRadius: "28px" }}
            >
              <div className="iconsax-box gold" style={{ width: "48px", height: "48px", borderRadius: "16px", marginBottom: "16px" }}>
                <Code size={26} variant="Bulk" color="var(--gold-500)" />
              </div>
              <h4 style={{ fontSize: "18px", color: "#fff", margin: "0 0 8px", fontWeight: 700 }}>קוד נקי ו-Best Practices</h4>
              <p style={{ fontSize: "14.5px", color: "var(--ink-2)", margin: 0, lineHeight: 1.6 }}>
                דגש הנדסי מחמיר על סטנדרטים בינלאומיים לכתיבת קוד סקיילבילי שמחזיק שנים.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="card skiper-hover-lift"
              style={{ padding: "26px", borderRadius: "28px" }}
            >
              <div className="iconsax-box purple" style={{ width: "48px", height: "48px", borderRadius: "16px", marginBottom: "16px" }}>
                <CpuCharge size={26} variant="Bulk" color="var(--purple-300)" />
              </div>
              <h4 style={{ fontSize: "18px", color: "#fff", margin: "0 0 8px", fontWeight: 700 }}>האצה עם כלי GenAI</h4>
              <p style={{ fontSize: "14.5px", color: "var(--ink-2)", margin: 0, lineHeight: 1.6 }}>
                שימוש מתקדם ב-Cursor, Lovable ו-Claude Code לקיצור תהליכי פיתוח פי 10.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="card skiper-hover-lift"
              style={{ padding: "26px", borderRadius: "28px" }}
            >
              <div className="iconsax-box cyan" style={{ width: "48px", height: "48px", borderRadius: "16px", marginBottom: "16px" }}>
                <ShieldSecurity size={26} variant="Bulk" color="#00e5ff" />
              </div>
              <h4 style={{ fontSize: "18px", color: "#fff", margin: "0 0 8px", fontWeight: 700 }}>אבטחה וביצועים קליניים</h4>
              <p style={{ fontSize: "14.5px", color: "var(--ink-2)", margin: 0, lineHeight: 1.6 }}>
                הטמעת אבטחת מידע קפדנית ושמירה על 60/120 FPS רציפים ומהירים.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="card skiper-hover-lift"
              style={{ padding: "26px", borderRadius: "28px" }}
            >
              <div className="iconsax-box gold" style={{ width: "48px", height: "48px", borderRadius: "16px", marginBottom: "16px" }}>
                <MedalStar size={26} variant="Bulk" color="var(--gold-500)" />
              </div>
              <h4 style={{ fontSize: "18px", color: "#fff", margin: "0 0 8px", fontWeight: 700 }}>ליווי הנדסי וקריירה</h4>
              <p style={{ fontSize: "14.5px", color: "var(--ink-2)", margin: 0, lineHeight: 1.6 }}>
                הכנת פורטפוליו עשיר, ביקורת קוד מקצועית והכנה לראיונות טכניים בהייטק.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
