import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const AccessibilityWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Accessibility Options State
  const [zoomLevel, setZoomLevel] = useState(100); // 100%, 110%, 120%, 130%
  const [highContrast, setHighContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [readableFont, setReadableFont] = useState(false);
  const [underlineLinks, setUnderlineLinks] = useState(false);
  const [stopAnimations, setStopAnimations] = useState(false);

  // Apply styles to document body / html
  useEffect(() => {
    const html = document.documentElement;

    // 1. Text Zoom
    html.style.fontSize = zoomLevel === 100 ? "" : `${zoomLevel}%`;

    // 2. High Contrast
    if (highContrast) {
      html.classList.add("acc-high-contrast");
    } else {
      html.classList.remove("acc-high-contrast");
    }

    // 3. Grayscale
    if (grayscale) {
      html.classList.add("acc-grayscale");
    } else {
      html.classList.remove("acc-grayscale");
    }

    // 4. Readable Font
    if (readableFont) {
      html.classList.add("acc-readable-font");
    } else {
      html.classList.remove("acc-readable-font");
    }

    // 5. Underline Links
    if (underlineLinks) {
      html.classList.add("acc-underline-links");
    } else {
      html.classList.remove("acc-underline-links");
    }

    // 6. Stop Animations
    if (stopAnimations) {
      html.classList.add("acc-stop-animations");
    } else {
      html.classList.remove("acc-stop-animations");
    }
  }, [zoomLevel, highContrast, grayscale, readableFont, underlineLinks, stopAnimations]);

  const resetAll = () => {
    setZoomLevel(100);
    setHighContrast(false);
    setGrayscale(false);
    setReadableFont(false);
    setUnderlineLinks(false);
    setStopAnimations(false);
  };

  return (
    <>
      {/* Floating Accessibility Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="תפריט נגישות"
        style={{
          position: "fixed",
          bottom: "24px",
          left: "24px",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, var(--gold-500) 0%, #ffc107 100%)",
          color: "#181108",
          border: "none",
          boxShadow: "0 8px 32px rgba(245, 197, 24, 0.4)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
          outline: "none",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        className="accessibility-btn"
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.08)";
          e.currentTarget.style.boxShadow = "0 12px 40px rgba(245, 197, 24, 0.55)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 8px 32px rgba(245, 197, 24, 0.4)";
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ width: "28px", height: "28px" }}
        >
          <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
        </svg>
      </button>

      {/* Accessibility Panel Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 250 }}
            className="liquid-glass-premium"
            style={{
              position: "fixed",
              bottom: "96px",
              left: "24px",
              width: "320px",
              borderRadius: "24px",
              padding: "24px",
              color: "#fff",
              zIndex: 9998,
              direction: "rtl",
              textAlign: "right",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                paddingBottom: "12px",
              }}
            >
              <h3 style={{ fontSize: "19px", margin: 0, fontWeight: 800, color: "var(--gold-500)" }}>
                נגישות האתר
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="סגור תפריט נגישות"
                style={{
                  background: "transparent",
                  border: "none",
                  color: "rgba(255, 255, 255, 0.5)",
                  cursor: "pointer",
                  fontSize: "20px",
                  padding: "4px",
                }}
              >
                &times;
              </button>
            </div>

            {/* Options List */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              
              {/* Text Size Control */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "14px", fontWeight: 600 }}>גודל הגופן</span>
                <div style={{ display: "flex", gap: "6px" }}>
                  <button
                    onClick={() => setZoomLevel((prev) => Math.max(100, prev - 10))}
                    disabled={zoomLevel <= 100}
                    style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      border: "none",
                      color: "#fff",
                      padding: "6px 12px",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontSize: "12px",
                      fontWeight: 700,
                      opacity: zoomLevel <= 100 ? 0.4 : 1,
                    }}
                  >
                    A-
                  </button>
                  <span style={{ fontSize: "13px", fontWeight: 700, minWidth: "40px", textAlign: "center", alignSelf: "center" }}>
                    {zoomLevel}%
                  </span>
                  <button
                    onClick={() => setZoomLevel((prev) => Math.min(130, prev + 10))}
                    disabled={zoomLevel >= 130}
                    style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      border: "none",
                      color: "#fff",
                      padding: "6px 12px",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontSize: "12px",
                      fontWeight: 700,
                      opacity: zoomLevel >= 130 ? 0.4 : 1,
                    }}
                  >
                    A+
                  </button>
                </div>
              </div>

              {/* High Contrast */}
              <label style={{ display: "flex", alignItems: "center", justifyItems: "start", gap: "10px", cursor: "pointer" }}>
                <input
                  type="checkbox"
                  checked={highContrast}
                  onChange={(e) => setHighContrast(e.target.checked)}
                  style={{ width: "18px", height: "18px", accentColor: "var(--gold-500)" }}
                />
                <span style={{ fontSize: "14px" }}>ניגודיות גבוהה</span>
              </label>

              {/* Grayscale */}
              <label style={{ display: "flex", alignItems: "center", justifyItems: "start", gap: "10px", cursor: "pointer" }}>
                <input
                  type="checkbox"
                  checked={grayscale}
                  onChange={(e) => setGrayscale(e.target.checked)}
                  style={{ width: "18px", height: "18px", accentColor: "var(--gold-500)" }}
                />
                <span style={{ fontSize: "14px" }}>מונוכרום (גווני אפור)</span>
              </label>

              {/* Readable Font */}
              <label style={{ display: "flex", alignItems: "center", justifyItems: "start", gap: "10px", cursor: "pointer" }}>
                <input
                  type="checkbox"
                  checked={readableFont}
                  onChange={(e) => setReadableFont(e.target.checked)}
                  style={{ width: "18px", height: "18px", accentColor: "var(--gold-500)" }}
                />
                <span style={{ fontSize: "14px" }}>גופן קריא וברור</span>
              </label>

              {/* Underline Links */}
              <label style={{ display: "flex", alignItems: "center", justifyItems: "start", gap: "10px", cursor: "pointer" }}>
                <input
                  type="checkbox"
                  checked={underlineLinks}
                  onChange={(e) => setUnderlineLinks(e.target.checked)}
                  style={{ width: "18px", height: "18px", accentColor: "var(--gold-500)" }}
                />
                <span style={{ fontSize: "14px" }}>הדגשת קישורים (קו תחתון)</span>
              </label>

              {/* Stop Animations */}
              <label style={{ display: "flex", alignItems: "center", justifyItems: "start", gap: "10px", cursor: "pointer" }}>
                <input
                  type="checkbox"
                  checked={stopAnimations}
                  onChange={(e) => setStopAnimations(e.target.checked)}
                  style={{ width: "18px", height: "18px", accentColor: "var(--gold-500)" }}
                />
                <span style={{ fontSize: "14px" }}>ביטול אנימציות ותנועה</span>
              </label>

            </div>

            {/* Reset Button */}
            <button
              onClick={resetAll}
              style={{
                width: "100%",
                marginTop: "20px",
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "#fff",
                padding: "10px",
                borderRadius: "12px",
                cursor: "pointer",
                fontSize: "13px",
                fontWeight: 700,
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)")}
            >
              אפס הגדרות נגישות
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
