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
  
  // Interactive discount state variables
  const [price, setPrice] = useState(7000);
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });

  // Update window variable so the text element can sync
  if (typeof window !== "undefined") {
    (window as any).__flutteroPrice = price;
  }

  const handlePriceDiscountClick = () => {
    if (price > 6200) {
      const newPrice = price - 1;
      setPrice(newPrice);
      if (typeof window !== "undefined") {
        (window as any).__flutteroPrice = newPrice;
      }
      confetti({
        particleCount: 20,
        spread: 30,
        colors: ["#ffd700", "#ff9100"],
        origin: { y: 0.8 }
      });
    }
  };

  const handlePriceDiscountMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (price <= 6200) {
      const btn = e.currentTarget;
      const rect = btn.getBoundingClientRect();
      const btnCenterX = rect.left + rect.width / 2;
      const btnCenterY = rect.top + rect.height / 2;

      // Distance between mouse and button center
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const distX = btnCenterX - mouseX;
      const distY = btnCenterY - mouseY;
      const distance = Math.sqrt(distX * distX + distY * distY);

      // Repulsion radius: 100px
      if (distance < 110) {
        const angle = Math.atan2(distY, distX);
        // Force increases the closer the mouse gets
        const force = (110 - distance) * 2.2;
        const moveX = Math.cos(angle) * force;
        const moveY = Math.sin(angle) * force;

        setBtnPos((prev) => {
          // Bound within bounds so it stays visible on screen (within 200px of original)
          const newX = Math.min(Math.max(prev.x + moveX, -220), 220);
          const newY = Math.min(Math.max(prev.y + moveY, -140), 140);
          return { x: newX, y: newY };
        });
      }
    }
  };

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

              <div style={{ textAlign: "left", position: "relative" }}>
                <span style={{ fontSize: "14px", color: "var(--ink-2)", textDecoration: "line-through", display: "block", marginBottom: "2px" }}>₪11,800</span>
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                  <b style={{ fontSize: "52px", color: "#fff", fontFamily: "Outfit", fontWeight: 900, letterSpacing: "-0.03em" }}>
                    ₪{(() => {
                      // Retrieve dynamic price from local state or global window if needed, let's declare states above
                      return typeof window !== "undefined" && (window as any).__flutteroPrice !== undefined ? (window as any).__flutteroPrice.toLocaleString() : "7,000";
                    })()}
                  </b>
                  <span style={{ color: "var(--gold-500)", fontSize: "14px", fontWeight: 700, background: "rgba(245,197,24,0.12)", padding: "4px 10px", borderRadius: "8px" }}>הרשמה מוקדמת</span>
                </div>
                <span style={{ fontSize: "13px", color: "var(--ink-2)", display: "block", marginTop: "4px" }}>ניתן לחלק עד 12 תשלומים ללא ריבית</span>
                
                {/* Premium Animated Easter Egg Discount Button */}
                <div 
                  className="premium-btn-container"
                  style={{
                    transform: `translate(${btnPos.x}px, ${btnPos.y}px) scale(${1 + (7000 - price) * 0.005})`,
                    transition: price > 6200 ? "transform 0.1s ease" : "transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    position: "relative",
                    zIndex: 99,
                    width: "250px"
                  }}
                  onMouseMove={handlePriceDiscountMouseMove}
                >
                  <div className="premium-button-wrapper" onClick={handlePriceDiscountClick}>
                    {/* Top Left Triangle */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 23 23"
                      height="23"
                      width="23"
                      className="premium-triangle top-left"
                    >
                      <g filter="url(#filter_tl)">
                        <path
                          fill="rgba(245, 197, 24, 0.25)"
                          d="M3 5C3 3.89543 3.89543 3 5 3H14.8964C16.2776 3 16.8985 4.73063 15.8323 5.60869V5.60869C12.2852 8.52981 9.01946 11.7766 6.07776 15.3067L5.77906 15.6651C4.83801 16.7944 3 16.1289 3 14.659V5Z"
                        ></path>
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23" width="23" y="0" x="0" id="filter_tl">
                          <feFlood result="BackgroundImageFix" floodOpacity="0"></feFlood>
                          <feColorMatrix result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" type="matrix" in="SourceAlpha"></feColorMatrix>
                          <feOffset dy="-1" dx="-1"></feOffset>
                          <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                          <feComposite operator="out" in2="hardAlpha"></feComposite>
                          <feColorMatrix values="0 0 0 0 0.96 0 0 0 0 0.77 0 0 0 0 0.09 0 0 0 1 0" type="matrix"></feColorMatrix>
                          <feBlend result="effect1" in2="BackgroundImageFix" mode="normal"></feBlend>
                        </filter>
                      </defs>
                    </svg>

                    {/* Top Right Triangle */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 23 23"
                      height="23"
                      width="23"
                      className="premium-triangle top-right"
                    >
                      <g filter="url(#filter_tr)">
                        <path
                          shapeRendering="crispEdges"
                          fill="rgba(245, 197, 24, 0.25)"
                          d="M4.16769 5.60869C3.10148 4.73063 3.72236 3 5.1036 3H15C16.1046 3 17 3.89543 17 5V14.659C17 16.1289 15.162 16.7944 14.2209 15.6651L13.9222 15.3067C10.9805 11.7767 7.71477 8.52981 4.16769 5.60869V5.60869Z"
                        ></path>
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23" width="23" y="0" x="0.6" id="filter_tr">
                          <feFlood result="BackgroundImageFix" floodOpacity="0"></feFlood>
                          <feColorMatrix result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" type="matrix" in="SourceAlpha"></feColorMatrix>
                          <feOffset dy="-1" dx="-1"></feOffset>
                          <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                          <feComposite operator="out" in2="hardAlpha"></feComposite>
                          <feColorMatrix values="0 0 0 0 0.96 0 0 0 0 0.77 0 0 0 0 0.09 0 0 0 1 0" type="matrix"></feColorMatrix>
                          <feBlend result="effect1" in2="BackgroundImageFix" mode="normal"></feBlend>
                        </filter>
                      </defs>
                    </svg>

                    {/* Bottom Left Triangle */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 23 23"
                      height="23"
                      width="23"
                      className="premium-triangle bottom-left"
                    >
                      <g filter="url(#filter_bl)">
                        <path
                          fill="rgba(245, 197, 24, 0.25)"
                          d="M3 5.1036C3 3.72236 4.73063 3.10148 5.60869 4.16769V4.16769C8.52981 7.71477 11.7766 10.9805 15.3067 13.9222L15.6651 14.2209C16.7944 15.162 16.1289 17 14.659 17H5C3.89543 17 3 16.1046 3 15V5.1036Z"
                        ></path>
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23" width="23" y="0.6" x="0" id="filter_bl">
                          <feFlood result="BackgroundImageFix" floodOpacity="0"></feFlood>
                          <feColorMatrix result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" type="matrix" in="SourceAlpha"></feColorMatrix>
                          <feOffset dy="-1" dx="-1"></feOffset>
                          <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                          <feComposite operator="out" in2="hardAlpha"></feComposite>
                          <feColorMatrix values="0 0 0 0 0.96 0 0 0 0 0.77 0 0 0 0 0.09 0 0 0 1 0" type="matrix"></feColorMatrix>
                          <feBlend result="effect1" in2="BackgroundImageFix" mode="normal"></feBlend>
                        </filter>
                      </defs>
                    </svg>

                    {/* Bottom Right Triangle */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 23 23"
                      height="23"
                      width="23"
                      className="premium-triangle bottom-right"
                    >
                      <g filter="url(#filter_br)">
                        <path
                          fill="rgba(245, 197, 24, 0.25)"
                          d="M4.09531 14.7192C8.33931 11.5921 12.0714 7.82422 15.1579 3.55058V3.55058C15.7358 2.75044 17 3.15923 17 4.14622V15C17 16.1046 16.1046 17 15 17H4.30554C3.25692 17 2.81695 15.6612 3.66115 15.0392L4.09531 14.7192Z"
                        ></path>
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23" width="23" y="0.1" x="0.2" id="filter_br">
                          <feFlood result="BackgroundImageFix" floodOpacity="0"></feFlood>
                          <feColorMatrix result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" type="matrix" in="SourceAlpha"></feColorMatrix>
                          <feOffset dy="-1" dx="-1"></feOffset>
                          <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                          <feComposite operator="out" in2="hardAlpha"></feComposite>
                          <feColorMatrix values="0 0 0 0 0.96 0 0 0 0 0.77 0 0 0 0 0.09 0 0 0 1 0" type="matrix"></feColorMatrix>
                          <feBlend result="effect1" in2="BackgroundImageFix" mode="normal"></feBlend>
                        </filter>
                      </defs>
                    </svg>

                    <div className="premium-ring-layer">
                      <div className="premium-outer-button">
                        <div className="premium-inner-button">
                          <span>
                            {price > 6200 ? "🎁 לחצו להנחה נוספת!" : "🛑 המבצע נגמר!"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                  placeholder="שם מלא"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="hero-input-pop"
                  required
                />
                <div className="form-separator" style={{ width: "1px", height: "30px", background: "rgba(255,255,255,0.25)", flexShrink: 0 }} />
                <input
                  type="tel"
                  placeholder="מספר פלאפון"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="hero-input-pop"
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
