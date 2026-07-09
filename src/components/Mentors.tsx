import React from "react";
import { motion } from "framer-motion";
import { Code, CpuCharge, ShieldSecurity, MedalStar, Verify } from "iconsax-react";

export const Mentors: React.FC = () => {
  return (
    <section id="mentors" style={{ padding: "160px 0", background: "transparent" }}>
      <div className="container">
        <div className="section-head" style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 60px" }}>
          <span className="eyebrow">06 · הצוות והמנחים</span>
          <h2 style={{ fontSize: "clamp(32px, 4.5vw, 54px)", margin: "16px 0", color: "#fff", letterSpacing: "-0.02em" }}>
            מי מלווה אתכם במסע
          </h2>
          <p style={{ fontSize: "18.5px", color: "var(--ink-1)", lineHeight: 1.7 }}>
            הצוות שלנו הוא לא סגל אקדמי — הוא מורכב מ<strong style={{ color: "#fff" }}>יזמים וסטארטאפיסטים</strong> עם עבר עשיר של הקמת מוצרים, ניהול משתמשים אמיתיים ושחרור אפליקציות לשוק. כל אחד מביא התמחות אחרת — ביחד, תקבלו פרספקטיבה של צוות פיתוח שלם.
          </p>
        </div>

        <div className="mentors-grid">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card skiper-hover-lift"
            style={{
              padding: "50px", borderRadius: "48px",
              border: "1px solid rgba(245,197,24,0.35)", position: "relative",
              boxShadow: "0 25px 60px rgba(0,0,0,0.6)", background: "linear-gradient(150deg, rgba(26, 21, 48, 0.2) 0%, rgba(15, 12, 28, 0.3) 100%)",
              marginBottom: "50px"
            }}
          >
            <div style={{ display: "flex", gap: "24px", alignItems: "center", marginBottom: "28px", borderBottom: "1px solid var(--line)", paddingBottom: "24px" }}>
              <div style={{ width: "90px", height: "90px", borderRadius: "36px", background: "linear-gradient(135deg, var(--gold-500), var(--purple-500))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "38px", color: "#000", fontWeight: 900, boxShadow: "0 10px 25px rgba(245,197,24,0.3)" }}>
                8200
              </div>
              <div>
                <span style={{ fontSize: "12.5px", fontWeight: 700, color: "var(--gold-500)", background: "rgba(245,197,24,0.12)", padding: "5px 14px", borderRadius: "99px", display: "inline-block", marginBottom: "8px", border: "1px solid rgba(245,197,24,0.25)" }}>
                  סגל המרצים והמובילים הטכנולוגיים
                </span>
                <h3 style={{ fontSize: "28px", color: "#fff", margin: "0 0 4px", letterSpacing: "-0.01em" }}>בוגרי יחידות הטכנולוגיה 8200 ואמ״ן</h3>
                <p style={{ fontSize: "15px", color: "var(--ink-2)", margin: 0, fontWeight: 500 }}>Startup Founders & Senior Tech Leads</p>
              </div>
            </div>

            <p style={{ fontSize: "16.5px", color: "var(--ink-1)", lineHeight: 1.75, marginBottom: "28px" }}>
              ההכשרה מובלת על ידי <strong style={{ color: "#fff" }}>יוצאי יחידות העלית הטכנולוגיות (8200 ואמ״ן)</strong>, המגיעים עם ניסיון מעשי עשיר בהקמת מוצרים דיגיטליים מאפס. המרצים שחררו בהצלחה <strong style={{ color: "#fff" }}>עשרות אפליקציות לחנויות</strong> עבור סטארטאפים וחברות מוצר מובילות, ומביאים איתם שילוב ייחודי של הנדסת תוכנה קלינית, UI/UX ברמת פיקסל-פרפקט ושליטה מוחלטת בכלי פיתוח מבוססי AI.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.03)", padding: "10px 18px", borderRadius: "16px", fontSize: "13.5px", fontWeight: 600, color: "#fff", border: "1px solid var(--line)" }}>
                <Verify size={18} variant="Bulk" color="var(--gold-500)" /> יוצאי 8200 ואמ״ן
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.03)", padding: "10px 18px", borderRadius: "16px", fontSize: "13.5px", fontWeight: 600, color: "#fff", border: "1px solid var(--line)" }}>
                <Verify size={18} variant="Bulk" color="var(--purple-300)" /> עיצוב ופיתוח עשרות אפליקציות
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.03)", padding: "10px 18px", borderRadius: "16px", fontSize: "13.5px", fontWeight: 600, color: "#fff", border: "1px solid var(--line)" }}>
                <Verify size={18} variant="Bulk" color="#00e5ff" /> רקע יזמי וטכנולוגי עשיר
              </span>
            </div>
          </motion.div>

          {/* Team Expertise Grid */}
          <div className="mentor-skills-grid">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="card skiper-hover-lift"
              style={{ padding: "36px 30px", borderRadius: "38px" }}
            >
              <div className="iconsax-box gold" style={{ width: "48px", height: "48px", borderRadius: "16px", marginBottom: "16px" }}>
                <Code size={26} variant="Bulk" color="var(--gold-500)" />
              </div>
              <h4 style={{ fontSize: "18px", color: "#fff", margin: "0 0 8px", fontWeight: 700 }}>יזמות ומוצר אמיתי</h4>
              <p style={{ fontSize: "14.5px", color: "var(--ink-2)", margin: 0, lineHeight: 1.6 }}>
                הצוות כולו עסק בהקמת סטארטאפים ובפיתוח מערכות אפליקטיביות אמיתיות — לא בסימולציות. הניסיון הזה נכנס לכל שיעור.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="card skiper-hover-lift"
              style={{ padding: "36px 30px", borderRadius: "38px" }}
            >
              <div className="iconsax-box purple" style={{ width: "48px", height: "48px", borderRadius: "16px", marginBottom: "16px" }}>
                <CpuCharge size={26} variant="Bulk" color="var(--purple-300)" />
              </div>
              <h4 style={{ fontSize: "18px", color: "#fff", margin: "0 0 8px", fontWeight: 700 }}>התמחויות משלימות</h4>
              <p style={{ fontSize: "14.5px", color: "var(--ink-2)", margin: 0, lineHeight: 1.6 }}>
                כל חבר צוות מביא תחום הכרחי אחר — Backend, AI, עסקים, UX, ו-Marketing — כדי שתקבלו ראייה של מוצר שלם.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="card skiper-hover-lift"
              style={{ padding: "36px 30px", borderRadius: "38px" }}
            >
              <div className="iconsax-box cyan" style={{ width: "48px", height: "48px", borderRadius: "16px", marginBottom: "16px" }}>
                <ShieldSecurity size={26} variant="Bulk" color="#00e5ff" />
              </div>
              <h4 style={{ fontSize: "18px", color: "#fff", margin: "0 0 8px", fontWeight: 700 }}>רקע יזמי עשיר</h4>
              <p style={{ fontSize: "14.5px", color: "var(--ink-2)", margin: 0, lineHeight: 1.6 }}>
                חברי הצוות הקימו, ניהלו ושחררו מוצרים דיגיטליים בתחומים שונים — מ-FinTech ועד פרופטק, מ-SaaS ועד consumer apps.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="card skiper-hover-lift"
              style={{ padding: "36px 30px", borderRadius: "38px" }}
            >
              <div className="iconsax-box gold" style={{ width: "48px", height: "48px", borderRadius: "16px", marginBottom: "16px" }}>
                <MedalStar size={26} variant="Bulk" color="var(--gold-500)" />
              </div>
              <h4 style={{ fontSize: "18px", color: "#fff", margin: "0 0 8px", fontWeight: 700 }}>ליווי מהשטח לשוק</h4>
              <p style={{ fontSize: "14.5px", color: "var(--ink-2)", margin: 0, lineHeight: 1.6 }}>
                מהרעיון לחנות — הצוות עבר את הדרך הזו בעצמו. כך תלמדו לא רק לבנות, אלא גם לחשוב כמו יזם שמוציא מוצר לעולם.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
