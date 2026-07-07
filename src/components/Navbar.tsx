import React, { useState, useEffect } from "react";
import { Flash, MagicStar } from "iconsax-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%', width: '100%' }}>
        {/* לוגו בגדול */}
        <a href="#" className="brand" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/FLUTTERO.svg" alt="Fluttero Logo" style={{ height: '70px', width: 'auto', display: 'block', flexShrink: 0, filter: 'drop-shadow(0 0 16px rgba(0,229,255,0.4))' }} />
        </a>

        {/* 3 תחנות בלבד */}
        <nav className="nav-links" style={{ display: 'flex', gap: '28px', alignItems: 'center', whiteSpace: 'nowrap' }}>
          <a href="#syllabus" className="skiper-hover-lift" style={{ fontSize: '16px', fontWeight: 600, color: 'var(--ink-1)', transition: 'all 0.2s', textDecoration: 'none', padding: '6px 12px' }}>
            סילבוס הלימודים
          </a>
          <a href="#skiperShowcase" className="skiper-hover-lift" style={{ fontSize: '15.5px', fontWeight: 800, color: 'var(--gold-500)', transition: 'all 0.2s', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(245,197,24,0.12)', padding: '8px 18px', borderRadius: '99px', border: '1px solid rgba(245,197,24,0.35)', boxShadow: '0 0 20px rgba(245,197,24,0.2)' }}>
            <MagicStar size={18} variant="Bold" color="var(--gold-500)" />
            <span>כלי הפיתוח וה-AI</span>
          </a>
          <a href="#mentors" className="skiper-hover-lift" style={{ fontSize: '16px', fontWeight: 600, color: 'var(--ink-1)', transition: 'all 0.2s', textDecoration: 'none', padding: '6px 12px' }}>
            סגל המרצים
          </a>
        </nav>

        {/* CTA וזהו */}
        <div className="nav-cta" style={{ display: 'flex', alignItems: 'center' }}>
          <a href="#priceCard" className="btn btn-gold skiper-hover-lift" style={{ padding: '12px 28px', fontSize: '15px', borderRadius: '99px', display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', fontWeight: 800, boxShadow: '0 0 25px rgba(245,197,24,0.35)' }}>
            <Flash size={20} variant="Bold" color="#181108" />
            <span>הבטחת מקום במחזור</span>
          </a>
        </div>
      </div>
    </header>
  );
};
