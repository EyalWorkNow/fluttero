import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code, Direct, Mobile, Chart, Flash, MagicStar, CpuCharge, TaskSquare, Award, Verify, Star1, ArrowLeft2, ArrowRight2 } from "iconsax-react";
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
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [containerCenter, setContainerCenter] = useState(0);
  const [cardPositions, setCardPositions] = useState<{ [key: number]: number }>({});
  const [isPaused, setIsPaused] = useState(false);
  const rafRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);

  const updatePositions = () => {
    if (scrollContainerRef.current) {
      const containerRect = scrollContainerRef.current.getBoundingClientRect();
      const center = containerRect.left + containerRect.width / 2;
      setContainerCenter(center);

      const positions: { [key: number]: number } = {};
      const children = scrollContainerRef.current.children;
      for (let i = 0; i < children.length; i++) {
        const child = children[i] as HTMLElement;
        const rect = child.getBoundingClientRect();
        const childCenter = rect.left + rect.width / 2;
        positions[i] = childCenter;
      }
      setCardPositions(positions);
    }
  };

  // Continuous auto-scroll loop
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    // scroll speed in px/frame (at 60fps ~0.5px/frame = ~30px/sec)
    const speed = 0.6;

    const autoScroll = () => {
      if (!isPausedRef.current && el) {
        // Scroll in RTL direction — scrollLeft is negative in RTL, we go more negative
        el.scrollLeft -= speed;
        // When we hit the leftmost position, jump back to the middle (seamless loop)
        // We doubled the content via duplication so we can loop
        if (el.scrollLeft <= 0) {
          // Jump silently to the middle (half the scroll width)
          el.scrollLeft = el.scrollWidth / 2;
        }
        updatePositions();
      }
      rafRef.current = requestAnimationFrame(autoScroll);
    };

    // Start in middle so we can scroll both ways
    el.scrollLeft = -(el.scrollWidth / 2);
    rafRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      updatePositions();
    };
    window.addEventListener("resize", handleResize);
    const timer = setTimeout(updatePositions, 100);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  const isMobile = windowWidth < 768;

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const cardWidth = isMobile ? 280 : 320;
      const gap = 24;
      const offset = (cardWidth + gap) * (direction === "left" ? 1 : -1);
      scrollContainerRef.current.scrollBy({
        left: offset,
        behavior: "smooth"
      });
      setTimeout(updatePositions, 50);
      setTimeout(updatePositions, 150);
      setTimeout(updatePositions, 300);
    }
  };

  const handleScrollEvent = () => {
    updatePositions();
  };

  const pauseScroll = () => {
    isPausedRef.current = true;
    setIsPaused(true);
  };

  const resumeScroll = () => {
    isPausedRef.current = false;
    setIsPaused(false);
  };

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

  // Duplicate cards for seamless infinite loop
  const loopingStack = [...techStack, ...techStack];


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
          }}>
            {/* Left Fade Gradient — fixed to viewport left edge */}
            <div style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: "clamp(80px, 15vw, 220px)",
              background: "linear-gradient(to right, #07060b 0%, rgba(7, 6, 11, 0.7) 50%, transparent 100%)",
              zIndex: 20,
              pointerEvents: "none"
            }} />

            {/* Right Fade Gradient — fixed to viewport right edge */}
            <div style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              width: "clamp(80px, 15vw, 220px)",
              background: "linear-gradient(to left, #07060b 0%, rgba(7, 6, 11, 0.7) 50%, transparent 100%)",
              zIndex: 20,
              pointerEvents: "none"
            }} />

            {/* Scrollable Container */}
            <div
              ref={scrollContainerRef}
              className="hide-scrollbar"
              onScroll={handleScrollEvent}
              onMouseEnter={pauseScroll}
              onMouseLeave={resumeScroll}
              onTouchStart={pauseScroll}
              onTouchEnd={resumeScroll}
              style={{
                display: "flex",
                overflowX: "auto",
                gap: "24px",
                padding: "40px 0",
                direction: "rtl",
                width: "100%",
                WebkitOverflowScrolling: "touch",
                cursor: isPaused ? "grab" : "default"
              }}
            >
              {loopingStack.map((item, index) => {
                const cardCenter = cardPositions[index] || 0;
                const distance = Math.abs(cardCenter - containerCenter);
                const maxDistance = isMobile ? 320 : 600;
                
                // Scale ranges from 1 at the center down to 0.78 at the boundaries
                const scale = containerCenter 
                  ? Math.max(0.78, 1 - (distance / maxDistance) * 0.22) 
                  : (index === 0 ? 1 : 0.85);

                // Opacity ranges from 1 at the center down to 0.4 at the boundaries
                const opacity = containerCenter 
                  ? Math.max(0.4, 1 - (distance / maxDistance) * 0.6) 
                  : (index === 0 ? 1 : 0.5);

                return (
                  <div
                    key={index}
                    style={{
                      width: isMobile ? "280px" : "320px",
                      flexShrink: 0,
                      transform: `scale(${scale})`,
                      opacity: opacity,
                      transition: "transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)",
                      transformStyle: "preserve-3d"
                    }}
                  >
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
                );
              })}
            </div>

            {/* Carousel Navigation Arrows */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginTop: "16px", marginBottom: "20px" }}>
              <button
                onClick={() => handleScroll("right")}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                  position: "relative",
                  zIndex: 20
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0, 229, 255, 0.1)";
                  e.currentTarget.style.borderColor = "#00e5ff";
                  e.currentTarget.style.boxShadow = "0 0 15px rgba(0, 229, 255, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
                }}
              >
                <ArrowRight2 size={24} variant="Outline" color="#fff" />
              </button>
              <button
                onClick={() => handleScroll("left")}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                  position: "relative",
                  zIndex: 20
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0, 229, 255, 0.1)";
                  e.currentTarget.style.borderColor = "#00e5ff";
                  e.currentTarget.style.boxShadow = "0 0 15px rgba(0, 229, 255, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
                }}
              >
                <ArrowLeft2 size={24} variant="Outline" color="#fff" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
