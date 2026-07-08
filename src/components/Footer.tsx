import React from "react";
import { Call, Sms, Location, Heart } from "iconsax-react";

export const Footer: React.FC = () => {
  return (
    <footer style={{ background: "var(--bg-deep)", padding: "80px 0 40px", borderTop: "none" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "40px", marginBottom: "60px" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <img src="/FLUTTERO.svg" alt="Fluttero" style={{ height: "36px" }} />
          </div>
          <p style={{ fontSize: "14.5px", color: "var(--ink-2)", lineHeight: 1.65, maxWidth: "320px" }}>
            המסלול ההנדסי המקיף בישראל לפיתוח אפליקציות מובייל ו-Web ל-iOS ו-Android עם Flutter ושילוב ארכיטקטורת GenAI מאיצת קריירה.
          </p>
        </div>

        <div>
          <h4 style={{ fontSize: "18px", color: "#fff", marginBottom: "16px", fontWeight: 700 }}>ניווט מהיר</h4>
          <ul style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "14.5px", color: "var(--ink-1)" }}>
            <li><a href="#skiperShowcase" style={{ transition: "color 0.2s" }}>ארכיטקטורת 3D וטכנולוגיות</a></li>
            <li><a href="#mentors" style={{ transition: "color 0.2s" }}>סגל המרצים</a></li>
            <li><a href="#features" style={{ transition: "color 0.2s" }}>היתרון ההנדסי</a></li>
            <li><a href="#priceCard" style={{ transition: "color 0.2s" }}>תשלומים והרשמה</a></li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: "18px", color: "#fff", marginBottom: "16px", fontWeight: 700 }}>יצירת קשר וייעוץ</h4>
          <ul style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "14.5px", color: "var(--ink-1)" }}>
            <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div className="iconsax-box gold" style={{ width: "36px", height: "36px", borderRadius: "10px" }}>
                <Call size={18} variant="Bulk" color="var(--gold-500)" />
              </div>
              <span>050-0000000</span>
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div className="iconsax-box purple" style={{ width: "36px", height: "36px", borderRadius: "10px" }}>
                <Sms size={18} variant="Bulk" color="var(--purple-300)" />
              </div>
              <span>info@fluttero.co.il</span>
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div className="iconsax-box gold" style={{ width: "36px", height: "36px", borderRadius: "10px" }}>
                <Location size={18} variant="Bulk" color="var(--gold-500)" />
              </div>
              <span>תל אביב · לימודים קליניים ושידור חי</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container" style={{ textAlign: "center", paddingTop: "30px", borderTop: "none", color: "var(--ink-2)", fontSize: "13.5px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
        <span>© 2026 Fluttero. כל הזכויות שמורות למסלול הכשרת המהנדסים.</span>
        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          נבנה ברמה הנדסית עם <Heart size={16} variant="Bold" color="var(--gold-500)" /> ו-Skiper UI
        </span>
      </div>
    </footer>
  );
};
