const express = require("express");
const path = require("path");
const fs = require("fs");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;
const LEADS_FILE = path.join(__dirname, "leads.json");

app.use(express.json());
// Serve production static assets from dist/ folder
app.use(express.static(path.join(__dirname, "dist")));

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

function readLeads() {
  try {
    if (!fs.existsSync(LEADS_FILE)) return [];
    const raw = fs.readFileSync(LEADS_FILE, "utf8").trim();
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error("Failed to read leads.json", err);
    return [];
  }
}

function writeLeads(leads) {
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), "utf8");
}

// Capture a lead from any of the on-page forms
app.post("/api/lead", (req, res) => {
  const { name, phone, email, message, source } = req.body || {};

  if (!phone || String(phone).trim().length < 7) {
    return res.status(400).json({ ok: false, error: "מספר טלפון תקין הוא שדה חובה" });
  }

  const lead = {
    id: Date.now(),
    name: (name || "").trim(),
    phone: String(phone).trim(),
    email: (email || "").trim(),
    message: (message || "").trim(),
    source: source || "unknown",
    createdAt: new Date().toISOString(),
  };

  const leads = readLeads();
  leads.push(lead);
  writeLeads(leads);

  console.log(`[lead] ${lead.name || "ללא שם"} · ${lead.phone} · via ${lead.source}`);

  // Send email notification to eyalatiyawork@gmail.com
  const mailOptions = {
    from: process.env.EMAIL_USER || "eyalatiyawork@gmail.com",
    to: "eyalatiyawork@gmail.com",
    subject: `🚀 ליד חדש מ-Fluttero! (${lead.name || "ללא שם"})`,
    html: `
      <div style="direction: rtl; text-align: right; font-family: sans-serif; padding: 20px; background-color: #f9f9f9; border-radius: 10px; border: 1px solid #7c4dff;">
        <h2 style="color: #7c4dff; margin-top: 0;">ליד חדש התקבל באתר Fluttero!</h2>
        <hr style="border: 0; border-top: 1px solid #ddd; margin: 15px 0;" />
        <p style="margin: 8px 0;"><strong>שם:</strong> ${lead.name || "לא צוין"}</p>
        <p style="margin: 8px 0;"><strong>טלפון:</strong> <a href="tel:${lead.phone}">${lead.phone}</a></p>
        <p style="margin: 8px 0;"><strong>אימייל:</strong> ${lead.email || "לא צוין"}</p>
        <p style="margin: 8px 0;"><strong>הודעה:</strong> ${lead.message || "לא צוין"}</p>
        <br />
        <p style="font-size: 11px; color: #888; margin: 4px 0;"><strong>מקור (מזהה טופס):</strong> ${lead.source}</p>
        <p style="font-size: 11px; color: #888; margin: 4px 0;"><strong>זמן קבלה:</strong> ${new Date(lead.createdAt).toLocaleString("he-IL")}</p>
      </div>
    `
  };

  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Failed to send lead email notification:", error);
      } else {
        console.log("Lead email notification sent successfully:", info.response);
      }
    });
  } else {
    console.log("[Nodemailer] Skipping email notification: EMAIL_USER and EMAIL_PASS environment variables are not set in .env.");
  }

  res.json({ ok: true });
});

// Simple internal endpoint to eyeball collected leads while developing
app.get("/api/leads", (req, res) => {
  res.json(readLeads());
});

// Fallback to index.html for SPA routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Fluttero site running → http://localhost:${PORT}`);
});
