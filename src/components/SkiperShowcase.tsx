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



const Bracket: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 27 78"
      className={className}
      style={{ width: "28px", height: "54px", flexShrink: 0 }}
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


  const [rotation, setRotation] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startRotation = useRef(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  // Orbit Carousel Settings
  const zDepth = isMobile ? 260 : isTablet ? 380 : 540;
  const cardWidth = isMobile ? 180 : isTablet ? 230 : 280;
  const cardHeight = isMobile ? 240 : isTablet ? 280 : 320;
  const backfaceVisible = false;
  const pauseOnHover = true;

  const numItems = 10; // techStack.length
  const angleSlice = 360 / numItems;

  useEffect(() => {
    if (isHovering && pauseOnHover) return;

    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.15) % 360);
    }, 30);

    return () => clearInterval(interval);
  }, [isHovering, pauseOnHover]);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    startRotation.current = rotation;
    setIsHovering(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const deltaX = e.clientX - startX.current;
    const newRotation = startRotation.current + deltaX * 0.4;
    setRotation(newRotation);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
    startRotation.current = rotation;
    setIsHovering(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const deltaX = e.touches[0].clientX - startX.current;
    const newRotation = startRotation.current + deltaX * 0.4;
    setRotation(newRotation);
  };

  const handleCardClick = (index: number) => {
    const targetRotation = -index * angleSlice;
    setRotation(targetRotation);
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
              <Bracket className="scale-x-[-1]" />
            </div>

            {/* Liquid Glass Max Specs Banner */}
            <div style={{ display: "inline-flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "10px", background: "rgba(0, 229, 255, 0.08)", padding: "8px 20px", borderRadius: "99px", border: "1px solid rgba(0, 229, 255, 0.3)", boxShadow: "0 0 25px rgba(0, 229, 255, 0.15)", marginTop: "10px" }}>
              <span style={{ fontSize: "13px", fontWeight: 800, color: "#00e5ff" }}>💎 LIQUID GLASS ENGINE MAX:</span>
              <span style={{ fontSize: "13px", fontWeight: 700, color: "#fff", background: "rgba(255,255,255,0.12)", padding: "3px 12px", borderRadius: "12px" }}>Refraction</span>
              <span style={{ fontSize: "13px", fontWeight: 700, color: "#fff", background: "rgba(255,255,255,0.12)", padding: "3px 12px", borderRadius: "12px" }}>Depth</span>
              <span style={{ fontSize: "13px", fontWeight: 700, color: "#fff", background: "rgba(255,255,255,0.12)", padding: "3px 12px", borderRadius: "12px" }}>Dispersion</span>
              <span style={{ fontSize: "13px", fontWeight: 700, color: "#fff", background: "rgba(255,255,255,0.12)", padding: "3px 12px", borderRadius: "12px" }}>Frost 32px</span>
              <span style={{ fontSize: "13px", fontWeight: 700, color: "#fff", background: "rgba(255,255,255,0.12)", padding: "3px 12px", borderRadius: "12px" }}>Splay</span>
            </div>
          </div>

          <div
            className="relative w-full flex flex-col items-center justify-center cursor-grab active:cursor-grabbing"
            style={{ 
              perspective: '1400px', 
              height: `${cardHeight + 120}px`,
              marginTop: '40px',
              touchAction: 'none',
              userSelect: 'none',
              overflow: 'visible'
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
              setIsHovering(false);
              isDragging.current = false;
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={() => {
              setTimeout(() => {
                isDragging.current = false;
              }, 50);
              setIsHovering(false);
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => {
              setTimeout(() => {
                isDragging.current = false;
              }, 50);
              setIsHovering(false);
            }}
          >
            {/* Rotating Group */}
            <motion.div
              className="relative"
              style={{
                width: cardWidth,
                height: cardHeight,
                transformStyle: 'preserve-3d',
              }}
              animate={{ rotateY: rotation }}
              transition={{ type: 'tween', duration: 0.5, ease: 'easeOut' }}
            >
              {techStack.map((item, index) => {
                const angle = (index * angleSlice * Math.PI) / 180;
                const x = Math.sin(angle) * zDepth;
                const z = Math.cos(angle) * zDepth;

                return (
                  <motion.div
                    key={index}
                    className="absolute"
                    style={{
                      width: cardWidth,
                      height: cardHeight,
                      left: '50%',
                      top: '50%',
                      marginLeft: -cardWidth / 2,
                      marginTop: -cardHeight / 2,
                      transformStyle: 'preserve-3d',
                      backfaceVisibility: backfaceVisible ? 'visible' : 'hidden',
                    }}
                    animate={{
                      x,
                      z,
                      rotateY: -rotation,
                    }}
                    transition={{ type: 'tween', duration: 0.5, ease: 'easeOut' }}
                    onClick={() => handleCardClick(index)}
                    whileHover={{ scale: 1.08 }}
                  >
                    <div 
                      className="liquid-glass-card"
                      style={{ 
                        width: "100%", 
                        height: "100%", 
                        padding: isMobile ? "20px 16px" : "32px 24px",
                        borderRadius: "38px",
                        margin: 0,
                        border: "1px solid rgba(255,255,255,0.08)",
                        background: "linear-gradient(155deg, rgba(26, 21, 48, 0.75) 0%, rgba(13, 11, 24, 0.9) 100%)"
                      }}
                    >
                      <div className="liquid-glass-content" style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <div>
                          <div className="liquid-glass-badge-row" style={{ marginBottom: isMobile ? "12px" : "18px" }}>
                            <div className="liquid-glass-icon-box" style={{ width: isMobile ? "38px" : "48px", height: isMobile ? "38px" : "48px", borderRadius: isMobile ? "12px" : "16px" }}>
                              {item.icon}
                            </div>
                          </div>
                          <h3 className="liquid-glass-title" style={{ fontSize: isMobile ? "16px" : "20px", marginBottom: isMobile ? "6px" : "10px", color: "#fff", fontWeight: 700 }}>{item.label}</h3>
                          <p className="liquid-glass-desc" style={{ fontSize: isMobile ? "13px" : "14.5px", lineHeight: 1.55, color: "var(--ink-2)", display: "-webkit-box", WebkitLineClamp: isMobile ? 4 : 5, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{item.desc}</p>
                        </div>
                        <div className="liquid-glass-footer" style={{ borderTop: "1px solid var(--line)", paddingTop: isMobile ? "8px" : "12px", marginTop: "10px" }}>
                          <span style={{ fontSize: isMobile ? "11px" : "12px", color: "var(--gold-500)", fontWeight: 600 }}>⚡ נלמד ומתורגל לעומק</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Manual Controls Tip */}
            <div style={{ textAlign: "center", marginTop: "32px", fontSize: "14px", color: "var(--ink-2)", fontWeight: 500 }}>
              <span>💡 לחצו על כלי כלשהו כדי להביא אותו לחזית · העבירו עכבר כדי להשהות את הסיבוב · גררו לסיבוב ידני</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
