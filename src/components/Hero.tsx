import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, TickCircle, Mobile, CpuCharge } from "iconsax-react";
import confetti from "canvas-confetti";

export const Hero: React.FC = () => {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ phone, source: "hero_quick_form" })
      });
      if (response.ok) {
        setSubmitted(true);
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      } else {
        alert("שגיאה ברישום. אנא נסה שוב.");
      }
    } catch (error) {
      console.error("Error submitting lead:", error);
      alert("שגיאה בחיבור לשרת.");
    }
  };

  return (
    <div className="hero-wrapper">
      <section className="hero">
        {/* Background Video */}
        <video
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="hero-video-bg"
        />

        {/* Video Dark Overlay for readability */}
        <div className="hero-video-overlay" />

        {/* Background Glow Orbs */}
        <div style={{ position: 'absolute', top: '15%', left: '10%', width: '450px', height: '450px', background: 'radial-gradient(circle, rgba(124,77,255,0.18) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0 }}></div>
        <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(245,197,24,0.12) 0%, transparent 70%)', filter: 'blur(70px)', pointerEvents: 'none', zIndex: 0 }}></div>

        {/* Floating Responsive Badges Container */}
        <div className="hero-badges-container">
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="hero-badge-item badge-left liquid-glass-premium"
          >
            <div className="iconsax-box gold" style={{ width: "32px", height: "32px", borderRadius: "8px", position: "relative", zIndex: 2 }}>
              <Mobile size={18} variant="Bulk" color="var(--gold-500)" />
            </div>
            <div style={{ position: "relative", zIndex: 2 }}>
              <span style={{ fontWeight: 800, fontSize: "13px", color: "#fff", display: "block", lineHeight: 1.2 }}>Flutter 3.24 & Dart</span>
              <span style={{ fontSize: "11px", color: "var(--gold-500)", fontWeight: 600 }}>קוד מובייל ו-Web אחיד</span>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="hero-badge-item badge-right liquid-glass-premium"
          >
            <div className="iconsax-box purple" style={{ width: "32px", height: "32px", borderRadius: "8px", position: "relative", zIndex: 2 }}>
              <CpuCharge size={18} variant="Bulk" color="var(--purple-300)" />
            </div>
            <div style={{ position: "relative", zIndex: 2 }}>
              <span style={{ fontWeight: 800, fontSize: "13px", color: "#fff", display: "block", lineHeight: 1.2 }}>GenAI Engineering</span>
              <span style={{ fontSize: "11px", color: "var(--purple-300)", fontWeight: 600 }}>Cursor · Lovable · Claude</span>
            </div>
          </motion.div>
        </div>

        <div className="container hero-grid" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-content">

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="display"
              style={{ fontSize: "clamp(38px, 5.5vw, 68px)", lineHeight: 1.1, margin: "10px 0 20px", letterSpacing: "-0.02em", fontWeight: 900, textShadow: "0 4px 24px rgba(0,0,0,0.7)" }}
            >
              הופכים רעיון לאפליקציית פרודקשן ב-3 חודשים עם{" "}
              <span style={{ background: "linear-gradient(135deg, var(--gold-500) 0%, #fff6b3 50%, #ffc107 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", textShadow: "0 0 50px rgba(245,197,24,0.3)" }}>Flutter</span> ו-AI.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lead"
              style={{ fontSize: "19px", color: "rgba(255,255,255,0.9)", maxWidth: "660px", margin: "0 auto 32px", lineHeight: 1.65, fontWeight: 400, textShadow: "0 2px 10px rgba(0,0,0,0.5)", textAlign: "center" }}
            >
              מסלול הנדסי קליני ומקיף לפיתוח אפליקציות מובייל ו-Web ל-iOS ו-Android בקוד אחד, הטמעת סוכני GenAI המאיצים את כתיבת הקוד פי 10, וליווי אישי צמוד עד להשקה רשמית בחנויות.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{ display: "flex", gap: "20px", alignItems: "center", justifyContent: "center", flexWrap: "wrap", width: "100%", marginTop: "12px" }}
            >
              {/* From Uiverse.io by marcelodolza */}
              <div style={{ position: "relative", zIndex: 10, display: "flex", alignItems: "center", height: "80px" }}>
                <label className="uiverse-area" onClick={() => {
                  confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
                  const el = document.getElementById("priceCard");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}>
                  <input type="checkbox" />
                  <div className="uiverse-area-button">
                    <svg width="423" height="274" viewBox="0 0 423 274" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M93.3368 136.663C49.6104 128.127 30.5087 134.168 2.08112 145.122" strokeLinecap="round"></path>
                      <path d="M94.6914 170.451C55.042 190.819 43.7361 207.401 28.1198 233.623" strokeLinecap="round"></path>
                      <path d="M147.365 181.074C124.487 219.412 123.652 239.483 124.252 270.021" strokeLinecap="round"></path>
                      <path d="M209.461 179.848L209.461 271.744" strokeLinecap="round"></path>
                      <path d="M271.59 181.074C294.468 219.412 295.303 239.483 294.703 270.021" strokeLinecap="round"></path>
                      <path d="M327.264 170.451C366.913 190.819 378.219 207.401 393.835 233.623" strokeLinecap="round"></path>
                      <path d="M329.618 136.663C373.345 128.127 392.446 134.168 420.874 145.122" strokeLinecap="round"></path>
                      <path d="M328.313 104.665C355.465 69.244 373.772 61.0955 402.313 50.4414" strokeLinecap="round"></path>
                      <path d="M268.666 93.3922C282.624 50.9621 297.219 37.204 320.646 17.6894" strokeLinecap="round"></path>
                      <path d="M209.461 93.5837L209.461 1.68781" strokeLinecap="round"></path>
                      <path d="M150.289 93.3922C136.331 50.9621 121.736 37.204 98.3089 17.6894" strokeLinecap="round"></path>
                      <path d="M93.6422 104.665C66.4898 69.244 48.1828 61.0955 19.6421 50.4414" strokeLinecap="round"></path>
                    </svg>
                    <button className="uiverse-button" type="button">
                      <div className="uiverse-wrap">
                        <span className="uiverse-particles">
                          <span className="uiverse-particle" style={{ "--a": "-45deg", "--x": "53%", "--y": "15%", "--d": "4em", "--f": "0.7", "--t": "0.15" } as React.CSSProperties}></span>
                          <span className="uiverse-particle" style={{ "--a": "150deg", "--x": "40%", "--y": "70%", "--d": "7.5em", "--f": "0.8", "--t": "0.08" } as React.CSSProperties}></span>
                          <span className="uiverse-particle" style={{ "--a": "10deg", "--x": "90%", "--y": "65%", "--d": "7em", "--f": "0.6", "--t": "0.25" } as React.CSSProperties}></span>
                          <span className="uiverse-particle" style={{ "--a": "-120deg", "--x": "15%", "--y": "10%", "--d": "4em" } as React.CSSProperties}></span>
                          <span className="uiverse-particle" style={{ "--a": "-175deg", "--x": "10%", "--y": "25%", "--d": "5.25em", "--f": "0.6", "--t": "0.32" } as React.CSSProperties}></span>
                          <span className="uiverse-particle" style={{ "--a": "-18deg", "--x": "80%", "--y": "25%", "--d": "4.75em", "--f": "0.5", "--t": "0.4" } as React.CSSProperties}></span>
                          <span className="uiverse-particle" style={{ "--a": "-30deg", "--x": "60%", "--y": "45%", "--d": "9em", "--f": "0.9", "--t": "0.5" } as React.CSSProperties}></span>
                          <span className="uiverse-particle" style={{ "--a": "175deg", "--x": "9%", "--y": "30%", "--d": "6em", "--f": "0.95", "--t": "0.6" } as React.CSSProperties}></span>
                          <span className="uiverse-particle" style={{ "--a": "-10deg", "--x": "89%", "--y": "25%", "--d": "4.5em", "--f": "0.55", "--t": "0.67" } as React.CSSProperties}></span>
                          <span className="uiverse-particle" style={{ "--a": "-140deg", "--x": "40%", "--y": "10%", "--d": "5em", "--f": "0.85", "--t": "0.75" } as React.CSSProperties}></span>
                          <span className="uiverse-particle" style={{ "--a": "90deg", "--x": "45%", "--y": "65%", "--d": "4em", "--f": "0.5", "--t": "0.83" } as React.CSSProperties}></span>
                          <span className="uiverse-particle" style={{ "--a": "30deg", "--x": "70%", "--y": "80%", "--d": "6.5em", "--f": "0.75", "--t": "0.92" } as React.CSSProperties}></span>
                        </span>

                        <div className="uiverse-electric"></div>
                        <div className="uiverse-glass"></div>
                        <div className="uiverse-reflex"></div>
                        <div className="uiverse-outline">
                          <div className="uiverse-rainbow"></div>
                        </div>

                        <div className="uiverse-text">
                          <p className="uiverse-state-1">
                            <span style={{ "--i": 1 } as React.CSSProperties}><span>G</span></span>
                            <span style={{ "--i": 2 } as React.CSSProperties}><span>e</span></span>
                            <span style={{ "--i": 3 } as React.CSSProperties}><span>t</span></span>
                            <span style={{ "--i": 4 } as React.CSSProperties}><span>S</span></span>
                            <span style={{ "--i": 5 } as React.CSSProperties}><span>t</span></span>
                            <span style={{ "--i": 6 } as React.CSSProperties}><span>a</span></span>
                            <span style={{ "--i": 7 } as React.CSSProperties}><span>r</span></span>
                            <span style={{ "--i": 8 } as React.CSSProperties}><span>t</span></span>
                            <span style={{ "--i": 9 } as React.CSSProperties}><span>e</span></span>
                            <span style={{ "--i": 10 } as React.CSSProperties}><span>d</span></span>
                          </p>
                          <p className="uiverse-state-2">
                            <span style={{ "--i": 1 } as React.CSSProperties}><span>ב</span></span>
                            <span style={{ "--i": 2 } as React.CSSProperties}><span>ו</span></span>
                            <span style={{ "--i": 3 } as React.CSSProperties}><span>א</span></span>
                            <span style={{ "--i": 4 } as React.CSSProperties}><span>ו</span></span>
                            <span style={{ "--i": 5, width: "7px" } as React.CSSProperties}><span> </span></span>
                            <span style={{ "--i": 6 } as React.CSSProperties}><span>נ</span></span>
                            <span style={{ "--i": 7 } as React.CSSProperties}><span>ת</span></span>
                            <span style={{ "--i": 8 } as React.CSSProperties}><span>ח</span></span>
                            <span style={{ "--i": 9 } as React.CSSProperties}><span>י</span></span>
                            <span style={{ "--i": 10 } as React.CSSProperties}><span>ל</span></span>
                            <span style={{ "--i": 11, width: "7px" } as React.CSSProperties}><span> </span></span>
                            <span style={{ "--i": 12 } as React.CSSProperties}><span>!</span></span>
                          </p>
                        </div>

                        <div className="uiverse-liquid">
                          <div className="uiverse-wave"></div>
                        </div>

                        <div className="uiverse-bg"></div>
                      </div>
                    </button>
                  </div>
                </label>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="quick-form liquid-glass-premium" style={{ display: "flex", gap: "12px", padding: "0 8px 0 12px", borderRadius: "99px", width: "460px", maxWidth: "100%", height: "80px", alignItems: "center" }}>
                  <input
                    type="tel"
                    placeholder="הזינו טלפון לקבלת סילבוס ותיאום ראיון קליטה"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{ flex: 1, background: "transparent", border: "none", color: "#fff", padding: "0 16px", fontSize: "15px", outline: "none", position: "relative", zIndex: 2 }}
                    required
                  />
                  <button type="submit" className="btn btn-gold" style={{ height: "64px", padding: "0 28px", borderRadius: "99px", fontWeight: 800, fontSize: "15px", display: "flex", alignItems: "center", gap: "6px", flexShrink: 0, position: "relative", zIndex: 2 }}>
                    <span>קבלו סילבוס</span>
                    <ArrowLeft size={16} variant="Bold" color="#181108" />
                  </button>
                </form>
              ) : (
                <div className="liquid-glass-premium" style={{ height: "80px", width: "460px", maxWidth: "100%", padding: "0 32px", borderRadius: "99px", color: "var(--gold-500)", fontWeight: 700, display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", justifyContent: "center" }}>
                  <TickCircle size={22} variant="Bulk" color="var(--gold-500)" style={{ position: "relative", zIndex: 2 }} />
                  <span style={{ position: "relative", zIndex: 2 }}>מעולה! הפרטים התקבלו.</span>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Uiverse Turbulence SVG Filters */}
      <svg className="svg-turbulence" aria-hidden="true" width="0" height="0">
        <defs>
          <filter id="turbulent-displace-0" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="260px" height="520px">
            <feTurbulence type="turbulence" baseFrequency="0.020" numOctaves="9" seed="1" result="n1"></feTurbulence>
            <feOffset in="n1" dx="0" dy="140" result="o1"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.020" numOctaves="9" seed="1" result="n2"></feTurbulence>
            <feOffset in="n2" dx="0" dy="-140" result="o2"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.020" numOctaves="9" seed="2" result="n3"></feTurbulence>
            <feOffset in="n3" dx="98" dy="0" result="o3"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.020" numOctaves="9" seed="2" result="n4"></feTurbulence>
            <feOffset in="n4" dx="-98" dy="0" result="o4"></feOffset>
            <feComposite in="o1" in2="o2" result="p1"></feComposite>
            <feComposite in="o3" in2="o4" result="p2"></feComposite>
            <feBlend in="p1" in2="p2" mode="color-dodge" result="cn"></feBlend>
            <feDisplacementMap in="SourceGraphic" in2="cn" scale="16" xChannelSelector="R" yChannelSelector="B"></feDisplacementMap>
          </filter>

          <filter id="turbulent-displace-1" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="260px" height="520px">
            <feTurbulence type="turbulence" baseFrequency="0.019" numOctaves="9" seed="3" result="n1"></feTurbulence>
            <feOffset in="n1" dx="0" dy="220" result="o1"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.019" numOctaves="9" seed="3" result="n2"></feTurbulence>
            <feOffset in="n2" dx="0" dy="-220" result="o2"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.021" numOctaves="9" seed="4" result="n3"></feTurbulence>
            <feOffset in="n3" dx="160" dy="0" result="o3"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.021" numOctaves="9" seed="4" result="n4"></feTurbulence>
            <feOffset in="n4" dx="-160" dy="0" result="o4"></feOffset>
            <feComposite in="o1" in2="o2" result="p1"></feComposite>
            <feComposite in="o3" in2="o4" result="p2"></feComposite>
            <feBlend in="p1" in2="p2" mode="color-dodge" result="cn"></feBlend>
            <feDisplacementMap in="SourceGraphic" in2="cn" scale="18" xChannelSelector="R" yChannelSelector="B"></feDisplacementMap>
          </filter>

          <filter id="turbulent-displace-2" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="260px" height="520px">
            <feTurbulence type="turbulence" baseFrequency="0.022" numOctaves="8" seed="5" result="n1"></feTurbulence>
            <feOffset in="n1" dx="0" dy="310" result="o1"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.022" numOctaves="8" seed="5" result="n2"></feTurbulence>
            <feOffset in="n2" dx="0" dy="-310" result="o2"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.018" numOctaves="9" seed="6" result="n3"></feTurbulence>
            <feOffset in="n3" dx="230" dy="0" result="o3"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.018" numOctaves="9" seed="6" result="n4"></feTurbulence>
            <feOffset in="n4" dx="-230" dy="0" result="o4"></feOffset>
            <feComposite in="o1" in2="o2" result="p1"></feComposite>
            <feComposite in="o3" in2="o4" result="p2"></feComposite>
            <feBlend in="p1" in2="p2" mode="color-dodge" result="cn"></feBlend>
            <feDisplacementMap in="SourceGraphic" in2="cn" scale="20" xChannelSelector="R" yChannelSelector="B"></feDisplacementMap>
          </filter>

          <filter id="turbulent-displace-3" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="260px" height="520px">
            <feTurbulence type="turbulence" baseFrequency="0.020" numOctaves="9" seed="7" result="n1"></feTurbulence>
            <feOffset in="n1" dx="0" dy="420" result="o1"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.020" numOctaves="9" seed="7" result="n2"></feTurbulence>
            <feOffset in="n2" dx="0" dy="-420" result="o2"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.023" numOctaves="8" seed="8" result="n3"></feTurbulence>
            <feOffset in="n3" dx="320" dy="0" result="o3"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.023" numOctaves="8" seed="8" result="n4"></feTurbulence>
            <feOffset in="n4" dx="-320" dy="0" result="o4"></feOffset>
            <feComposite in="o1" in2="o2" result="p1"></feComposite>
            <feComposite in="o3" in2="o4" result="p2"></feComposite>
            <feBlend in="p1" in2="p2" mode="color-dodge" result="cn"></feBlend>
            <feDisplacementMap in="SourceGraphic" in2="cn" scale="22" xChannelSelector="R" yChannelSelector="B"></feDisplacementMap>
          </filter>

          <filter id="turbulent-displace-4" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="260px" height="520px">
            <feTurbulence type="turbulence" baseFrequency="0.018" numOctaves="9" seed="9" result="n1"></feTurbulence>
            <feOffset in="n1" dx="0" dy="540" result="o1"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.018" numOctaves="9" seed="9" result="n2"></feTurbulence>
            <feOffset in="n2" dx="0" dy="-540" result="o2"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.021" numOctaves="9" seed="10" result="n3"></feTurbulence>
            <feOffset in="n3" dx="410" dy="0" result="o3"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.021" numOctaves="9" seed="10" result="n4"></feTurbulence>
            <feOffset in="n4" dx="-410" dy="0" result="o4"></feOffset>
            <feComposite in="o1" in2="o2" result="p1"></feComposite>
            <feComposite in="o3" in2="o4" result="p2"></feComposite>
            <feBlend in="p1" in2="p2" mode="color-dodge" result="cn"></feBlend>
            <feDisplacementMap in="SourceGraphic" in2="cn" scale="24" xChannelSelector="R" yChannelSelector="B"></feDisplacementMap>
          </filter>

          <filter id="turbulent-displace-5" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="260px" height="520px">
            <feTurbulence type="turbulence" baseFrequency="0.024" numOctaves="8" seed="11" result="n1"></feTurbulence>
            <feOffset in="n1" dx="0" dy="660" result="o1"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.024" numOctaves="8" seed="11" result="n2"></feTurbulence>
            <feOffset in="n2" dx="0" dy="-660" result="o2"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.017" numOctaves="9" seed="12" result="n3"></feTurbulence>
            <feOffset in="n3" dx="490" dy="0" result="o3"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.017" numOctaves="9" seed="12" result="n4"></feTurbulence>
            <feOffset in="n4" dx="-490" dy="0" result="o4"></feOffset>
            <feComposite in="o1" in2="o2" result="p1"></feComposite>
            <feComposite in="o3" in2="o4" result="p2"></feComposite>
            <feBlend in="p1" in2="p2" mode="color-dodge" result="cn"></feBlend>
            <feDisplacementMap in="SourceGraphic" in2="cn" scale="26" xChannelSelector="R" yChannelSelector="B"></feDisplacementMap>
          </filter>

          <filter id="turbulent-displace-6" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="260px" height="520px">
            <feTurbulence type="turbulence" baseFrequency="0.020" numOctaves="9" seed="13" result="n1"></feTurbulence>
            <feOffset in="n1" dx="0" dy="780" result="o1"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.020" numOctaves="9" seed="13" result="n2"></feTurbulence>
            <feOffset in="n2" dx="0" dy="-780" result="o2"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.022" numOctaves="8" seed="14" result="n3"></feTurbulence>
            <feOffset in="n3" dx="600" dy="0" result="o3"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.022" numOctaves="8" seed="14" result="n4"></feTurbulence>
            <feOffset in="n4" dx="-600" dy="0" result="o4"></feOffset>
            <feComposite in="o1" in2="o2" result="p1"></feComposite>
            <feComposite in="o3" in2="o4" result="p2"></feComposite>
            <feBlend in="p1" in2="p2" mode="color-dodge" result="cn"></feBlend>
            <feDisplacementMap in="SourceGraphic" in2="cn" scale="28" xChannelSelector="R" yChannelSelector="B"></feDisplacementMap>
          </filter>

          <filter id="turbulent-displace-7" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="260px" height="520px">
            <feTurbulence type="turbulence" baseFrequency="0.019" numOctaves="9" seed="15" result="n1"></feTurbulence>
            <feOffset in="n1" dx="0" dy="900" result="o1"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.019" numOctaves="9" seed="15" result="n2"></feTurbulence>
            <feOffset in="n2" dx="0" dy="-900" result="o2"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.021" numOctaves="9" seed="16" result="n3"></feTurbulence>
            <feOffset in="n3" dx="720" dy="0" result="o3"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.021" numOctaves="9" seed="16" result="n4"></feTurbulence>
            <feOffset in="n4" dx="-720" dy="0" result="o4"></feOffset>
            <feComposite in="o1" in2="o2" result="p1"></feComposite>
            <feComposite in="o3" in2="o4" result="p2"></feComposite>
            <feBlend in="p1" in2="p2" mode="color-dodge" result="cn"></feBlend>
            <feDisplacementMap in="SourceGraphic" in2="cn" scale="30" xChannelSelector="R" yChannelSelector="B"></feDisplacementMap>
          </filter>

          <filter id="turbulent-displace-8" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="260px" height="520px">
            <feTurbulence type="turbulence" baseFrequency="0.023" numOctaves="8" seed="17" result="n1"></feTurbulence>
            <feOffset in="n1" dx="0" dy="1040" result="o1"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.023" numOctaves="8" seed="17" result="n2"></feTurbulence>
            <feOffset in="n2" dx="0" dy="-1040" result="o2"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.018" numOctaves="9" seed="18" result="n3"></feTurbulence>
            <feOffset in="n3" dx="860" dy="0" result="o3"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.018" numOctaves="9" seed="18" result="n4"></feTurbulence>
            <feOffset in="n4" dx="-860" dy="0" result="o4"></feOffset>
            <feComposite in="o1" in2="o2" result="p1"></feComposite>
            <feComposite in="o3" in2="o4" result="p2"></feComposite>
            <feBlend in="p1" in2="p2" mode="color-dodge" result="cn"></feBlend>
            <feDisplacementMap in="SourceGraphic" in2="cn" scale="31" xChannelSelector="R" yChannelSelector="B"></feDisplacementMap>
          </filter>

          <filter id="turbulent-displace-9" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="260px" height="520px">
            <feTurbulence type="turbulence" baseFrequency="0.020" numOctaves="9" seed="19" result="n1"></feTurbulence>
            <feOffset in="n1" dx="0" dy="1180" result="o1"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.020" numOctaves="9" seed="19" result="n2"></feTurbulence>
            <feOffset in="n2" dx="0" dy="-1180" result="o2"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.022" numOctaves="8" seed="20" result="n3"></feTurbulence>
            <feOffset in="n3" dx="980" dy="0" result="o3"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.022" numOctaves="8" seed="20" result="n4"></feTurbulence>
            <feOffset in="n4" dx="-980" dy="0" result="o4"></feOffset>
            <feComposite in="o1" in2="o2" result="p1"></feComposite>
            <feComposite in="o3" in2="o4" result="p2"></feComposite>
            <feBlend in="p1" in2="p2" mode="color-dodge" result="cn"></feBlend>
            <feDisplacementMap in="SourceGraphic" in2="cn" scale="29" xChannelSelector="R" yChannelSelector="B"></feDisplacementMap>
          </filter>

          <filter id="turbulent-displace-10" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="260px" height="520px">
            <feTurbulence type="turbulence" baseFrequency="0.018" numOctaves="9" seed="21" result="n1"></feTurbulence>
            <feOffset in="n1" dx="0" dy="1320" result="o1"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.018" numOctaves="9" seed="21" result="n2"></feTurbulence>
            <feOffset in="n2" dx="0" dy="-1320" result="o2"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.024" numOctaves="8" seed="22" result="n3"></feTurbulence>
            <feOffset in="n3" dx="1120" dy="0" result="o3"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.024" numOctaves="8" seed="22" result="n4"></feTurbulence>
            <feOffset in="n4" dx="-1120" dy="0" result="o4"></feOffset>
            <feComposite in="o1" in2="o2" result="p1"></feComposite>
            <feComposite in="o3" in2="o4" result="p2"></feComposite>
            <feBlend in="p1" in2="p2" mode="color-dodge" result="cn"></feBlend>
            <feDisplacementMap in="SourceGraphic" in2="cn" scale="33" xChannelSelector="R" yChannelSelector="B"></feDisplacementMap>
          </filter>

          <filter id="turbulent-displace-11" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="260px" height="520px">
            <feTurbulence type="turbulence" baseFrequency="0.021" numOctaves="9" seed="23" result="n1"></feTurbulence>
            <feOffset in="n1" dx="0" dy="1460" result="o1"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.021" numOctaves="9" seed="23" result="n2"></feTurbulence>
            <feOffset in="n2" dx="0" dy="-1460" result="o2"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.019" numOctaves="9" seed="24" result="n3"></feTurbulence>
            <feOffset in="n3" dx="1260" dy="0" result="o3"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.019" numOctaves="9" seed="24" result="n4"></feTurbulence>
            <feOffset in="n4" dx="-1260" dy="0" result="o4"></feOffset>
            <feComposite in="o1" in2="o2" result="p1"></feComposite>
            <feComposite in="o3" in2="o4" result="p2"></feComposite>
            <feBlend in="p1" in2="p2" mode="color-dodge" result="cn"></feBlend>
            <feDisplacementMap in="SourceGraphic" in2="cn" scale="31" xChannelSelector="R" yChannelSelector="B"></feDisplacementMap>
          </filter>

          <filter id="turbulent-displace-12" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="260px" height="520px">
            <feTurbulence type="turbulence" baseFrequency="0.022" numOctaves="8" seed="25" result="n1"></feTurbulence>
            <feOffset in="n1" dx="0" dy="1600" result="o1"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.022" numOctaves="8" seed="25" result="n2"></feTurbulence>
            <feOffset in="n2" dx="0" dy="-1600" result="o2"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.020" numOctaves="9" seed="26" result="n3"></feTurbulence>
            <feOffset in="n3" dx="1400" dy="0" result="o3"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.020" numOctaves="9" seed="26" result="n4"></feTurbulence>
            <feOffset in="n4" dx="-1400" dy="0" result="o4"></feOffset>
            <feComposite in="o1" in2="o2" result="p1"></feComposite>
            <feComposite in="o3" in2="o4" result="p2"></feComposite>
            <feBlend in="p1" in2="p2" mode="color-dodge" result="cn"></feBlend>
            <feDisplacementMap in="SourceGraphic" in2="cn" scale="34" xChannelSelector="R" yChannelSelector="B"></feDisplacementMap>
          </filter>

          <filter id="turbulent-displace-13" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="260px" height="520px">
            <feTurbulence type="turbulence" baseFrequency="0.019" numOctaves="9" seed="27" result="n1"></feTurbulence>
            <feOffset in="n1" dx="0" dy="1740" result="o1"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.019" numOctaves="9" seed="27" result="n2"></feTurbulence>
            <feOffset in="n2" dx="0" dy="-1740" result="o2"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.023" numOctaves="8" seed="28" result="n3"></feTurbulence>
            <feOffset in="n3" dx="1540" dy="0" result="o3"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.023" numOctaves="8" seed="28" result="n4"></feTurbulence>
            <feOffset in="n4" dx="-1540" dy="0" result="o4"></feOffset>
            <feComposite in="o1" in2="o2" result="p1"></feComposite>
            <feComposite in="o3" in2="o4" result="p2"></feComposite>
            <feBlend in="p1" in2="p2" mode="color-dodge" result="cn"></feBlend>
            <feDisplacementMap in="SourceGraphic" in2="cn" scale="31" xChannelSelector="R" yChannelSelector="B"></feDisplacementMap>
          </filter>

          <filter id="turbulent-displace-14" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="260px" height="520px">
            <feTurbulence type="turbulence" baseFrequency="0.024" numOctaves="8" seed="29" result="n1"></feTurbulence>
            <feOffset in="n1" dx="0" dy="1880" result="o1"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.024" numOctaves="8" seed="29" result="n2"></feTurbulence>
            <feOffset in="n2" dx="0" dy="-1880" result="o2"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.018" numOctaves="9" seed="30" result="n3"></feTurbulence>
            <feOffset in="n3" dx="1680" dy="0" result="o3"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.018" numOctaves="9" seed="30" result="n4"></feTurbulence>
            <feOffset in="n4" dx="-1680" dy="0" result="o4"></feOffset>
            <feComposite in="o1" in2="o2" result="p1"></feComposite>
            <feComposite in="o3" in2="o4" result="p2"></feComposite>
            <feBlend in="p1" in2="p2" mode="color-dodge" result="cn"></feBlend>
            <feDisplacementMap in="SourceGraphic" in2="cn" scale="34" xChannelSelector="R" yChannelSelector="B"></feDisplacementMap>
          </filter>

          <filter id="turbulent-displace-15" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="260px" height="520px">
            <feTurbulence type="turbulence" baseFrequency="0.020" numOctaves="9" seed="31" result="n1"></feTurbulence>
            <feOffset in="n1" dx="0" dy="2020" result="o1"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.020" numOctaves="9" seed="31" result="n2"></feTurbulence>
            <feOffset in="n2" dx="0" dy="-2020" result="o2"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.022" numOctaves="8" seed="32" result="n3"></feTurbulence>
            <feOffset in="n3" dx="1820" dy="0" result="o3"></feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.022" numOctaves="8" seed="32" result="n4"></feTurbulence>
            <feOffset in="n4" dx="-1820" dy="0" result="o4"></feOffset>
            <feComposite in="o1" in2="o2" result="p1"></feComposite>
            <feComposite in="o3" in2="o4" result="p2"></feComposite>
            <feBlend in="p1" in2="p2" mode="color-dodge" result="cn"></feBlend>
            <feDisplacementMap in="SourceGraphic" in2="cn" scale="32" xChannelSelector="R" yChannelSelector="B"></feDisplacementMap>
          </filter>
        </defs>
      </svg>
    </div>
  );
};
