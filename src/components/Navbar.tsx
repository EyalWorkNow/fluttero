import React, { useState, useEffect } from "react";
import { Flash, MagicStar } from "iconsax-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`site-header liquid-glass-premium ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%', width: '100%' }}>
          {/* לוגו בגדול */}
          <a href="#" className="brand" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src="/FLUTTERO.svg" alt="Fluttero Logo" style={{ height: '70px', width: 'auto', display: 'block', flexShrink: 0, filter: 'drop-shadow(0 0 16px rgba(0,229,255,0.4))' }} />
          </a>

          {/* דסקטופ לינקים */}
          <nav className="desktop-nav-links" style={{ display: 'flex', gap: '28px', alignItems: 'center', whiteSpace: 'nowrap' }}>

            <a href="#skiperShowcase" className="skiper-hover-lift" style={{ fontSize: '15.5px', fontWeight: 800, color: 'var(--gold-500)', transition: 'all 0.2s', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(245,197,24,0.12)', padding: '8px 18px', borderRadius: '99px', border: '1px solid rgba(245,197,24,0.35)', boxShadow: '0 0 20px rgba(245,197,24,0.2)' }}>
              <MagicStar size={18} variant="Bold" color="var(--gold-500)" />
              <span>כלי הפיתוח וה-AI</span>
            </a>
            <a href="#mentors" className="skiper-hover-lift" style={{ fontSize: '16px', fontWeight: 600, color: 'var(--ink-1)', transition: 'all 0.2s', textDecoration: 'none', padding: '6px 12px' }}>
              סגל המרצים
            </a>
          </nav>

          {/* דסקטופ CTA וכפתור המבורגר */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div className="desktop-cta" style={{ display: 'flex', alignItems: 'center' }}>
              <a href="#priceCard" className="btn btn-gold skiper-hover-lift" style={{ padding: '12px 28px', fontSize: '15px', borderRadius: '99px', display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', fontWeight: 800, boxShadow: '0 0 25px rgba(245,197,24,0.35)' }}>
                <Flash size={20} variant="Bold" color="#181108" />
                <span>הבטחת מקום במחזור</span>
              </a>
            </div>

            {/* כפתור המבורגר לניידים */}
            <button 
              className="mobile-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "14px",
                width: "48px",
                height: "48px",
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0
              }}
            >
              <div style={{ width: "22px", height: "14px", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative" }}>
                <span style={{ display: "block", height: "2px", width: "100%", background: "#fff", transition: "all 0.3s ease", transform: menuOpen ? "rotate(45deg) translate(5px, 4px)" : "none", transformOrigin: "center" }}></span>
                <span style={{ display: "block", height: "2px", width: "100%", background: "#fff", transition: "all 0.3s ease", opacity: menuOpen ? 0 : 1 }}></span>
                <span style={{ display: "block", height: "2px", width: "100%", background: "#fff", transition: "all 0.3s ease", transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none", transformOrigin: "center" }}></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* תפריט מובייל נפתח */}
      <div 
        className={`mobile-menu-overlay ${menuOpen ? "open" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(12, 10, 21, 0.98)",
          backdropFilter: "blur(20px)",
          zIndex: 999,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "32px",
          transition: "opacity 0.4s ease, transform 0.4s ease",
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? "translateY(0)" : "translateY(-100%)",
          pointerEvents: menuOpen ? "auto" : "none"
        }}
      >

        <a href="#skiperShowcase" onClick={() => setMenuOpen(false)} style={{ fontSize: '20px', fontWeight: 800, color: 'var(--gold-500)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(245,197,24,0.1)', padding: '12px 24px', borderRadius: '99px', border: '1px solid rgba(245,197,24,0.3)' }}>
          <MagicStar size={20} variant="Bold" color="var(--gold-500)" />
          <span>כלי הפיתוח וה-AI</span>
        </a>
        <a href="#mentors" onClick={() => setMenuOpen(false)} style={{ fontSize: '22px', fontWeight: 700, color: '#fff', textDecoration: 'none', transition: 'color 0.2s' }}>
          סגל המרצים
        </a>
        <a href="#priceCard" onClick={() => setMenuOpen(false)} className="btn btn-gold" style={{ padding: '16px 36px', fontSize: '18px', borderRadius: '99px', display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', fontWeight: 800, marginTop: "20px" }}>
          <Flash size={22} variant="Bold" color="#181108" />
          <span>הבטחת מקום במחזור</span>
        </a>
      </div>
    </>
  );
};
