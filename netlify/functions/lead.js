const nodemailer = require("nodemailer");

// Netlify serverless function — handles POST /api/lead
// Receives { name, phone, source } and sends a Gmail notification
exports.handler = async (event) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json"
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: corsHeaders, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers: corsHeaders, body: JSON.stringify({ ok: false, error: "Method not allowed" }) };
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ ok: false, error: "Invalid JSON" }) };
  }

  const { name, phone, email, message, source } = body;

  if (!phone || String(phone).trim().length < 7) {
    return {
      statusCode: 400,
      headers: corsHeaders,
      body: JSON.stringify({ ok: false, error: "מספר טלפון תקין הוא שדה חובה" })
    };
  }

  const lead = {
    name: (name || "").trim(),
    phone: String(phone).trim(),
    email: (email || "").trim(),
    message: (message || "").trim(),
    source: source || "unknown",
    createdAt: new Date().toISOString()
  };

  console.log(`[lead] ${lead.name || "ללא שם"} · ${lead.phone} · via ${lead.source}`);

  const EMAIL_USER = process.env.EMAIL_USER;
  const EMAIL_PASS = process.env.EMAIL_PASS;

  if (EMAIL_USER && EMAIL_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: EMAIL_USER, pass: EMAIL_PASS }
      });

      await transporter.sendMail({
        from: EMAIL_USER,
        to: "eyalatiyawork@gmail.com",
        subject: `🚀 ליד חדש מ-Fluttero! (${lead.name || "ללא שם"})`,
        html: `
          <div style="direction: rtl; text-align: right; font-family: sans-serif; padding: 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #7c4dff;">
            <h2 style="color: #7c4dff; margin-top: 0;">ליד חדש התקבל באתר Fluttero!</h2>
            <hr style="border: 0; border-top: 1px solid #ddd; margin: 15px 0;" />
            <p style="margin: 8px 0;"><strong>שם:</strong> ${lead.name || "לא צוין"}</p>
            <p style="margin: 8px 0;"><strong>טלפון:</strong> <a href="tel:${lead.phone}">${lead.phone}</a></p>
            <p style="margin: 8px 0;"><strong>אימייל:</strong> ${lead.email || "לא צוין"}</p>
            <p style="margin: 8px 0;"><strong>הודעה:</strong> ${lead.message || "לא צוין"}</p>
            <br />
            <p style="font-size: 11px; color: #888;"><strong>מקור:</strong> ${lead.source}</p>
            <p style="font-size: 11px; color: #888;"><strong>זמן קבלה:</strong> ${new Date(lead.createdAt).toLocaleString("he-IL")}</p>
          </div>
        `
      });

      console.log("[email] Lead notification sent ✓");
    } catch (err) {
      console.error("[email] Failed:", err.message);
      // Don't fail the user-facing request because of an email error
    }
  } else {
    console.log("[email] Skipping — EMAIL_USER / EMAIL_PASS not set");
  }

  return {
    statusCode: 200,
    headers: corsHeaders,
    body: JSON.stringify({ ok: true })
  };
};
