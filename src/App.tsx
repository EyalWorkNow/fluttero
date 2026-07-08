import { ReactLenis } from "lenis/react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TechStack } from "./components/TechStack";
import { SkiperShowcase } from "./components/SkiperShowcase";

import { Mentors } from "./components/Mentors";
import { Pricing } from "./components/Pricing";
import { Footer } from "./components/Footer";
import { AccessibilityWidget } from "./components/AccessibilityWidget";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const LinePath: React.FC<{ scrollYProgress: any }> = ({ scrollYProgress }) => {
  // Map scroll progress to path length from 0 to 1
  const pathLength = useTransform(scrollYProgress, [0.01, 0.99], [0, 1]);

  return (
    <svg
      viewBox="0 0 1200 8000"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="skiper19-stroke-svg"
    >
      <motion.path
        d="M 600,0 
C 800,200 1000,400 800,600 
C 600,800 400,700 500,550
C 600,400 800,500 850,700
C 900,1000 400,1200 300,1400
C 200,1600 100,1700 200,1850
C 300,2000 500,1900 450,1750
C 400,1600 250,1700 200,1900
C 100,2200 700,2400 800,2600
C 900,2800 1000,3000 900,3150
C 800,3300 700,3200 750,3050
C 800,2900 950,3000 900,3250
C 800,3600 300,3800 250,4100
C 200,4400 100,4600 200,4750
C 300,4900 450,4800 400,4650
C 350,4500 200,4600 150,4800
C 50,5100 800,5400 900,5700
C 1000,6000 1100,6200 950,6400
C 800,6600 750,6500 800,6350
C 850,6200 950,6300 900,6550
C 800,6900 300,7100 200,7400
C 100,7700 400,7900 600,8000"
        stroke="url(#skiperGradientGlobal)"
        strokeWidth="12"
        strokeLinecap="round"
        style={{
          pathLength,
        }}
      />
      <defs>
        <linearGradient id="skiperGradientGlobal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5c518" />
          <stop offset="35%" stopColor="#ff4081" />
          <stop offset="70%" stopColor="#7c4dff" />
          <stop offset="100%" stopColor="#00e5ff" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export function App() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <ReactLenis root>
      <div className="app-wrapper" style={{ minHeight: "100vh", background: "var(--bg-void)", color: "var(--ink-0)" }}>
        <Navbar />
        <main>
          <Hero />
          
          {/* Global Winding SVG Scroll Animation Wrapper */}
          <div ref={containerRef} style={{ position: "relative", width: "100%", overflow: "hidden", background: "var(--bg-void)" }}>
            <div className="skiper19-container" style={{ zIndex: 0 }}>
              <LinePath scrollYProgress={scrollYProgress} />
            </div>
            
            <TechStack />
            <SkiperShowcase />

            <Mentors />
            <Pricing />
          </div>
        </main>
        <Footer />
        <AccessibilityWidget />
      </div>
    </ReactLenis>
  );
}

export default App;
