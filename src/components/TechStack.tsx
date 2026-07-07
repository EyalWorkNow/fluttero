import React from "react";
import { Mobile, Direct, Flash, Code, CpuCharge, Verify, TaskSquare, MagicStar, Chart, Award } from "iconsax-react";

const stackItems = [
  { icon: <Mobile size={20} variant="Bulk" color="var(--gold-500)" />, name: "Flutter 3.24", tip: "⚡️ Cross-Platform UI" },
  { icon: <Direct size={20} variant="Bulk" color="#00e5ff" />, name: "Dart 3.5", tip: "⚡️ High Performance" },
  { icon: <Flash size={20} variant="Bulk" color="#ff9100" />, name: "Firebase Cloud", tip: "☁️ Backend & Auth" },
  { icon: <Chart size={20} variant="Bulk" color="#f06292" />, name: "Figma UI/UX", tip: "🎨 Design Systems" },
  { icon: <Code size={20} variant="Bulk" color="var(--purple-300)" />, name: "Cursor AI", tip: "⚡️ AI Code Editor" },
  { icon: <MagicStar size={20} variant="Bulk" color="#ff4081" />, name: "Lovable GenAI", tip: "⚡️ Full-Stack GenAI" },
  { icon: <CpuCharge size={20} variant="Bulk" color="#00e5ff" />, name: "v0 by Vercel", tip: "⚡️ UI Generation" },
  { icon: <TaskSquare size={20} variant="Bulk" color="var(--gold-500)" />, name: "Claude Code", tip: "🧠 Advanced Reasoning" },
  { icon: <Verify size={20} variant="Bulk" color="#69f0ae" />, name: "App Store iOS", tip: "🚀 Apple Deployment" },
  { icon: <Award size={20} variant="Bulk" color="var(--gold-500)" />, name: "Google Play", tip: "🚀 Android Distribution" },
];

export const TechStack: React.FC = () => {
  const duplicatedItems = [...stackItems, ...stackItems, ...stackItems];

  return (
    <div className="marquee-wrap" style={{ padding: "30px 0", borderBottom: "none", background: "rgba(12, 10, 21, 0.4)" }}>
      <div className="marquee-track">
        {duplicatedItems.map((item, index) => (
          <div key={index} className="stack-badge skiper-tooltip-wrap" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 22px", borderRadius: "16px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", transition: "all 0.3s ease" }}>
            <span style={{ display: "flex", alignItems: "center" }}>{item.icon}</span>
            <span style={{ fontSize: "15px", fontWeight: 700, color: "var(--ink-0)", letterSpacing: "0.01em" }}>{item.name}</span>
            <div className="skiper-tooltip">
              {item.tip}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
