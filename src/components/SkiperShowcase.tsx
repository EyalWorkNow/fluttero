import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code, Direct, Mobile, Chart, Flash, MagicStar, CpuCharge, TaskSquare, Award, Verify, Star1 } from "iconsax-react";
import { cn } from "../lib/utils";

type CharacterProps = {
  char: string;
  index: number;
  centerIndex: number;
  scrollYProgress: any;
};

const CharacterV1: React.FC<CharacterProps> = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(scrollYProgress, [0, 0.6], [distanceFromCenter * 50, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.6], [distanceFromCenter * 45, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.2, 1]);

  return (
    <motion.span
      className={cn("inline-block font-black text-white", isSpace && "w-3")}
      style={{
        x,
        rotateX,
        opacity,
        display: "inline-block",
        textShadow: "0 0 30px rgba(245, 197, 24, 0.3)"
      }}
    >
      {isSpace ? "\u00A0" : char}
    </motion.span>
  );
};



const Bracket: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 27 78"
      className={className}
      style={{ width: "28px", height: "54px", flexShrink: 0, ...style }}
    >
      <path
        fill="var(--gold-500)"
        d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
      ></path>
    </svg>
  );
};
export const SkiperShowcase: React.FC = () => {
  const targetRef1 = useRef<HTMLDivElement | null>(null);
  const targetRef2 = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: targetRef1,
    offset: ["start end", "center center"]
  });


  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Dynamic RAF scaling loop to make the center card larger
  useEffect(() => {
    let rafId: number;

    const updateCardScaling = () => {
      const track = trackRef.current;
      if (!track) {
        rafId = requestAnimationFrame(updateCardScaling);
        return;
      }

      const viewportCenter = window.innerWidth / 2;
      const cards = track.children;

      for (let i = 0; i < cards.length; i++) {
        const card = cards[i] as HTMLElement;
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(cardCenter - viewportCenter);
        
        // Dynamic scale & opacity calculation based on distance from screen center
        // Center card scales to 1.15, outer cards scale down to 0.8
        const maxDist = window.innerWidth < 768 ? 260 : 450;
        const scale = Math.max(0.8, 1.15 - (distance / maxDist) * 0.35);
        const opacity = Math.max(0.4, 1.0 - (distance / maxDist) * 0.6);

        card.style.transform = `scale(${scale})`;
        card.style.opacity = `${opacity}`;
        card.style.transition = "transform 0.1s ease-out, opacity 0.1s ease-out";
      }

      rafId = requestAnimationFrame(updateCardScaling);
    };

    rafId = requestAnimationFrame(updateCardScaling);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const isMobile = windowWidth < 768;

  const text = "FLUTTER & AI ARCHITECTURE";
  const words = text.split(" ");
  const characters = text.split("");
  const centerIndex = Math.floor(characters.length / 2);
  let charGlobalIndex = 0;

  const techStack = [
    {
      icon: <Mobile size={32} variant="Bulk" color="var(--gold-500)" />,
      label: "Flutter 3.24",
      desc: "פיתוח אפליקציות Cross-Platform ברמת Native ל-iOS ו-Android. נלמד ארכיטקטורה נקייה, ביצועי 120fps ואנימציות מרהיבות."
    },
    {
      icon: <Direct size={32} variant="Bulk" color="#00e5ff" />,
      label: "Dart SDK",
      desc: "שפת הפיתוח הרשמית מבית Google. נשלוט ב-Null Safety, תכנות אסינכרוני, Streams וניהול מצב תעשייתי."
    },
    {
      icon: <MagicStar size={32} variant="Bulk" color="#ff4081" />,
      label: "Antigravity",
      desc: "סביבת ה-AI המתקדמת של DeepMind לפיתוח Agentic Coding, תיקון באגים וכתיבת קוד אינטראקטיבי בזמן שיא."
    },
    {
      icon: <TaskSquare size={32} variant="Bulk" color="var(--gold-500)" />,
      label: "Claude Code",
      desc: "פיתוח Full-Stack מואץ בעזרת מודלי Anthropic. הפיכת איפיון ללוגיקה עסקית ובדיקות אוטומטיות ללא מאמץ."
    },
    {
      icon: <Code size={32} variant="Bulk" color="var(--purple-300)" />,
      label: "Cursor AI",
      desc: "עורך הקוד המהפכני מבוסס AI. נלמד עבודה עם Agents וקידוד מהיר עם קונטקסט פרויקט מלא."
    },
    {
      icon: <Chart size={32} variant="Bulk" color="#f06292" />,
      label: "Figma UI/UX",
      desc: "אפיון ועיצוב מערכות UI יוקרתיות, והמרתן לקוד Pixel-Perfect מדויק ב-Flutter."
    },
    {
      icon: <CpuCharge size={32} variant="Bulk" color="#00e5ff" />,
      label: "Lovable GenAI",
      desc: "יצירת אבות-טיפוס ואפליקציות שלמות מתוך פרומפטים בשפה טבעית וחיבורן החלק לפרויקט."
    },
    {
      icon: <Flash size={32} variant="Bulk" color="#ff9100" />,
      label: "v0 by Vercel",
      desc: "יצירת רכיבי UI מרהיבים וחדשניים בשניות באמצעות AI והתאמתם המושלמת למסכי Mobile."
    },
    {
      icon: <Verify size={32} variant="Bulk" color="#69f0ae" />,
      label: "Firebase Cloud",
      desc: "תשתית ענן לניהול מסדי נתונים בזמן אמת (Firestore), אימות משתמשים (Auth) ואחסון קבצים מאובטח."
    },
    {
      icon: <Award size={32} variant="Bulk" color="var(--gold-500)" />,
      label: "App Store & Play",
      desc: "תהליך הפריסה המלא, העלאת האפליקציות לחנויות של Apple ו-Google והכנה לפרודקשן מסחרי."
    },
  ];

  // Duplicate cards 3 times for a mathematically perfect seamless infinite loop
  const loopingStack = [...techStack, ...techStack, ...techStack];


  return (
    <section id="skiperShowcase" className="skiper-showcase-section" style={{ position: 'relative', padding: '180px 0', overflow: 'hidden' }}>

      <div className="container relative z-10">
        {/* Honor Badge for SVG Stroke Animation */}
        <div ref={targetRef1} className="skiper31-block">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "rgba(245, 197, 24, 0.12)", padding: "8px 20px", borderRadius: "99px", border: "1px solid var(--gold-500)", marginBottom: "24px", boxShadow: "0 0 30px rgba(245,197,24,0.3)" }}
          >
            <Star1 size={20} variant="Bulk" color="var(--gold-500)" /> 
            <span style={{ fontSize: "14px", fontWeight: 800, letterSpacing: "0.02em", color: "var(--gold-500)" }}>
              ⭐ כלי הפיתוח וה-AI · שליטה מלאה בסביבות עבודה מודרניות
            </span>
          </motion.div>

          <h2 className="skiper31-title" style={{ perspective: "800px", marginTop: "16px", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, direction: "ltr", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px 14px" }}>
            {words.map((word, wIdx) => {
              const wordChars = word.split("");
              return (
                <span key={wIdx} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
                  {wordChars.map((char, cIdx) => {
                    const globalIdx = charGlobalIndex++;
                    return (
                      <CharacterV1
                        key={cIdx}
                        char={char}
                        index={globalIdx}
                        centerIndex={centerIndex}
                        scrollYProgress={scrollYProgress1}
                      />
                    );
                  })}
                </span>
              );
            })}
          </h2>
          
          <p className="skiper31-hint" style={{ fontSize: "18px", color: "var(--ink-1)", fontWeight: 500, maxWidth: "680px", margin: "24px auto 0", lineHeight: 1.6 }}>
            הכירו את כלי הפיתוח, סביבות העבודה וטכנולוגיות ה-AI שנלמד ונשלוט בהם במהלך ההכשרה הקלינית שלנו
          </p>
        </div>

        {/* Skiper 31 Section 2: Liquid Glass Cards Grid */}
        <div ref={targetRef2} className="skiper31-block" style={{ marginTop: "130px" }}>
          <div className="skiper31-bracket-header" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "20px", marginBottom: "50px", textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", width: "100%" }}>
              <Bracket />
              <span style={{ fontSize: "clamp(22px, 3.5vw, 36px)", fontWeight: 900, color: "#fff", letterSpacing: "0.02em", textShadow: "0 0 30px rgba(124,77,255,0.4)" }}>
                ארגז הכלים והטכנולוגיות שנלמד ונשלוט בהם
              </span>
              <Bracket style={{ transform: "scaleX(-1)" }} />
            </div>

            {/* Liquid Glass Max Specs Banner */}
            <div style={{ 
              display: "inline-flex", 
              flexWrap: "wrap", 
              alignItems: "center", 
              justifyContent: "center", 
              gap: "10px", 
              background: "rgba(255, 255, 255, 0.03)", 
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              padding: "10px 24px", 
              borderRadius: "99px", 
              border: "1px solid rgba(255, 255, 255, 0.08)", 
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5), inset 0 1px 2px rgba(255,255,255,0.1)", 
              marginTop: "10px" 
            }}>
              <span style={{ fontSize: "13px", fontWeight: 800, color: "#00e5ff", letterSpacing: "0.03em" }}>💎 LIQUID GLASS ENGINE MAX:</span>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#fff", border: "1px solid rgba(0, 229, 255, 0.4)", background: "rgba(0, 229, 255, 0.06)", padding: "4px 12px", borderRadius: "12px", textShadow: "0 0 8px rgba(0, 229, 255, 0.5)" }}>Refraction</span>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#fff", border: "1px solid rgba(124, 77, 255, 0.4)", background: "rgba(124, 77, 255, 0.06)", padding: "4px 12px", borderRadius: "12px", textShadow: "0 0 8px rgba(124, 77, 255, 0.5)" }}>Depth</span>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#fff", border: "1px solid rgba(255, 64, 129, 0.4)", background: "rgba(255, 64, 129, 0.06)", padding: "4px 12px", borderRadius: "12px", textShadow: "0 0 8px rgba(255, 64, 129, 0.5)" }}>Dispersion</span>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#fff", border: "1px solid rgba(245, 197, 24, 0.4)", background: "rgba(245, 197, 24, 0.06)", padding: "4px 12px", borderRadius: "12px", textShadow: "0 0 8px rgba(245, 197, 24, 0.5)" }}>Frost 32px</span>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#fff", border: "1px solid rgba(0, 230, 118, 0.4)", background: "rgba(0, 230, 118, 0.06)", padding: "4px 12px", borderRadius: "12px", textShadow: "0 0 8px rgba(0, 230, 118, 0.5)" }}>Splay</span>
            </div>
          </div>

          <div style={{ 
            marginTop: "50px",
            position: "relative",
            width: "100vw",
            marginLeft: "calc(-50vw + 50%)",
            marginRight: "calc(-50vw + 50%)",
            overflow: "hidden",
            padding: "40px 0"
          }}>
            {/* Left Fade Gradient */}
            <div style={{
              position: "absolute",
              top: 0, bottom: 0, left: 0,
              width: "clamp(80px, 15vw, 240px)",
              background: "linear-gradient(to right, #07060b 0%, rgba(7,6,11,0.85) 40%, transparent 100%)",
              zIndex: 20,
              pointerEvents: "none"
            }} />
            {/* Right Fade Gradient */}
            <div style={{
              position: "absolute",
              top: 0, bottom: 0, right: 0,
              width: "clamp(80px, 15vw, 240px)",
              background: "linear-gradient(to left, #07060b 0%, rgba(7,6,11,0.85) 40%, transparent 100%)",
              zIndex: 20,
              pointerEvents: "none"
            }} />

            {/* Marquee Track */}
            <div className="carousel-marquee-outer">
              <div ref={trackRef} className="carousel-marquee-track">
                {loopingStack.map((item, index) => (
                  <div key={index} style={{ width: isMobile ? "280px" : "320px", flexShrink: 0 }}>
                    <div 
                      className="liquid-glass-card skiper-hover-lift"
                      style={{ 
                        width: "100%", 
                        height: "100%", 
                        padding: "32px 24px",
                        borderRadius: "38px",
                        margin: 0,
                        border: "1px solid rgba(255,255,255,0.08)",
                        background: "linear-gradient(155deg, rgba(26, 21, 48, 0.75) 0%, rgba(13, 11, 24, 0.9) 100%)",
                        minHeight: "360px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between"
                      }}
                    >
                      <div className="liquid-glass-content" style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <div>
                          <div className="liquid-glass-badge-row" style={{ marginBottom: "18px" }}>
                            <div className="liquid-glass-icon-box" style={{ width: "48px", height: "48px", borderRadius: "16px" }}>
                              {item.icon}
                            </div>
                          </div>
                          <h3 className="liquid-glass-title" style={{ fontSize: "20px", marginBottom: "10px", color: "#fff", fontWeight: 700 }}>
                            {item.label}
                          </h3>
                          <p className="liquid-glass-desc" style={{ fontSize: "14.5px", lineHeight: 1.6, color: "var(--ink-2)" }}>
                            {item.desc}
                          </p>
                        </div>
                        <div className="liquid-glass-footer" style={{ borderTop: "1px solid var(--line)", paddingTop: "12px", marginTop: "16px" }}>
                          <span style={{ fontSize: "12px", color: "var(--gold-500)", fontWeight: 600 }}>⚡ נלמד ומתורגל לעומק</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
