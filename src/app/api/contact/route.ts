import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const TARGET_EMAIL = process.env.CONTACT_RECIPIENT_EMAIL || "kewateharshad@gmail.com";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  let body: any;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload in request." },
      { status: 400 }
    );
  }

  try {
    const { name, email, message, botField } = body || {};

    // Honeypot anti-spam check: if botField is filled, silently discard
    if (botField) {
      console.warn("[Contact API Spam Protection]: Honeypot triggered, discarding silently.");
      return NextResponse.json({
        success: true,
        message: "Message received successfully.",
      });
    }

    // Strict input validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address (e.g. name@domain.com)." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { error: "Please enter a message of at least 5 characters." },
        { status: 400 }
      );
    }

    const sanitizedName = name.trim().slice(0, 100);
    const sanitizedEmail = email.trim().toLowerCase().slice(0, 150);
    const sanitizedMessage = message.trim().slice(0, 5000);

    const emailSubject = `📬 New Portfolio Message from ${sanitizedName}`;

    const emailText = `You received a new inquiry from your portfolio website:

Name: ${sanitizedName}
Visitor Email: ${sanitizedEmail}
Received At: ${new Date().toISOString()}

Message:
--------------------------------------------------
${sanitizedMessage}
--------------------------------------------------

To reply directly to this visitor, reply to this email or send directly to: ${sanitizedEmail}
`;

    const escapedMessage = escapeHtml(sanitizedMessage);
    const escapedName = escapeHtml(sanitizedName);
    const escapedEmail = escapeHtml(sanitizedEmail);

    const emailHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Portfolio Contact Inquiry</title>
  <style>
    body { margin: 0; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4efe6; color: #18352F; }
    .container { max-width: 620px; margin: 0 auto; background: #ffffff; border: 2px solid #18352F; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
    .header { background: #18352F; color: #f4efe6; padding: 24px 28px; text-align: left; }
    .badge { display: inline-block; background: #E85D2A; color: #ffffff; font-size: 10px; font-weight: 800; padding: 4px 10px; border-radius: 6px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
    .header h1 { margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; }
    .body { padding: 28px; }
    .meta-box { background: #fbf8f3; border: 1px solid #ebe5d8; border-radius: 12px; padding: 16px 20px; margin-bottom: 24px; }
    .meta-row { display: flex; padding: 6px 0; font-size: 14px; border-bottom: 1px solid #f0ebe0; }
    .meta-row:last-child { border-bottom: none; }
    .meta-label { width: 120px; font-weight: 700; color: #18352F; text-transform: uppercase; font-size: 11px; font-family: monospace; letter-spacing: 0.5px; }
    .meta-value { color: #111111; font-weight: 600; flex: 1; word-break: break-word; }
    .message-title { font-family: monospace; font-size: 11px; font-weight: 700; text-transform: uppercase; color: #666666; margin-bottom: 8px; letter-spacing: 0.5px; }
    .message-content { background: #ffffff; border: 2px solid #18352F; border-left: 6px solid #E85D2A; border-radius: 10px; padding: 18px 20px; font-size: 15px; line-height: 1.6; color: #111111; white-space: pre-wrap; word-break: break-word; }
    .action-container { text-align: center; margin-top: 30px; margin-bottom: 10px; }
    .reply-btn { display: inline-block; background: #E85D2A; color: #ffffff !important; text-decoration: none; padding: 13px 32px; border-radius: 9999px; font-weight: 800; font-size: 14px; font-family: monospace; letter-spacing: 0.5px; border: 2px solid #18352F; box-shadow: 3px 3px 0px #18352F; }
    .footer { background: #fbf8f3; padding: 16px 24px; font-size: 11px; color: #888888; text-align: center; border-top: 1px solid #ebe5d8; font-family: monospace; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="badge">Portfolio Transmission</div>
      <h1>New Message for Harshad Kewate</h1>
    </div>
    <div class="body">
      <div class="meta-box">
        <div class="meta-row">
          <div class="meta-label">From:</div>
          <div class="meta-value">${escapedName}</div>
        </div>
        <div class="meta-row">
          <div class="meta-label">Sender Email:</div>
          <div class="meta-value"><a href="mailto:${escapedEmail}" style="color: #E85D2A; font-weight: 700;">${escapedEmail}</a></div>
        </div>
        <div class="meta-row">
          <div class="meta-label">Timestamp:</div>
          <div class="meta-value">${new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })} IST</div>
        </div>
      </div>

      <div class="message-title">// MESSAGE CONTENT:</div>
      <div class="message-content">${escapedMessage}</div>

      <div class="action-container">
        <a href="mailto:${escapedEmail}?subject=Re: Your message via Harshad Kewate Portfolio" class="reply-btn">
          REPLY DIRECTLY TO ${escapedName.toUpperCase()} ↗
        </a>
      </div>
    </div>
    <div class="footer">
      Harshad Kewate Portfolio Contact Form • Delivered to ${TARGET_EMAIL}
    </div>
  </div>
</body>
</html>`;

    let delivered = false;
    let providerUsed = "";
    let deliveryError: string | null = null;

    // --------------------------------------------------------------------------
    // TIER 1: Resend API (Recommended for Vercel & Next.js production)
    // --------------------------------------------------------------------------
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey && !delivered) {
      try {
        const fromAddress =
          process.env.FROM_EMAIL || "Harshad Portfolio <onboarding@resend.dev>";

        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendKey}`,
          },
          body: JSON.stringify({
            from: fromAddress,
            to: [TARGET_EMAIL],
            reply_to: sanitizedEmail,
            subject: emailSubject,
            text: emailText,
            html: emailHtml,
          }),
        });

        const resendData = await resendRes.json().catch(() => ({}));

        if (resendRes.ok && resendData?.id) {
          delivered = true;
          providerUsed = "Resend API";
          console.info(`[Contact API] Delivered successfully via Resend API (ID: ${resendData.id}) to ${TARGET_EMAIL}`);
        } else {
          console.warn("[Contact API] Resend dispatch attempt returned error:", resendData);
          deliveryError = resendData?.message || "Resend API rejected request.";
        }
      } catch (err: any) {
        console.warn("[Contact API] Resend dispatch exception:", err?.message || err);
      }
    }

    // --------------------------------------------------------------------------
    // TIER 2: Nodemailer (Direct SMTP / Gmail App Password)
    // --------------------------------------------------------------------------
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const smtpPassword = process.env.SMTP_PASS;

    if ((gmailAppPassword || smtpPassword) && !delivered) {
      try {
        const transportConfig = gmailAppPassword
          ? {
              service: "gmail",
              auth: {
                user: process.env.GMAIL_USER || TARGET_EMAIL,
                pass: gmailAppPassword,
              },
            }
          : {
              host: process.env.SMTP_HOST || "smtp.gmail.com",
              port: Number(process.env.SMTP_PORT) || 465,
              secure: process.env.SMTP_SECURE !== "false",
              auth: {
                user: process.env.SMTP_USER || TARGET_EMAIL,
                pass: smtpPassword,
              },
            };

        const transporter = nodemailer.createTransport(transportConfig);

        const info = await transporter.sendMail({
          from: `"${sanitizedName} via Portfolio" <${process.env.GMAIL_USER || process.env.SMTP_USER || TARGET_EMAIL}>`,
          to: TARGET_EMAIL,
          replyTo: sanitizedEmail,
          subject: emailSubject,
          text: emailText,
          html: emailHtml,
        });

        if (info?.messageId) {
          delivered = true;
          providerUsed = gmailAppPassword ? "Gmail SMTP" : "Custom SMTP";
          console.info(`[Contact API] Delivered successfully via ${providerUsed} (ID: ${info.messageId}) to ${TARGET_EMAIL}`);
        }
      } catch (smtpErr: any) {
        console.warn("[Contact API] SMTP dispatch exception:", smtpErr?.message || smtpErr);
        deliveryError = smtpErr?.message || "SMTP transmission failure.";
      }
    }

    // --------------------------------------------------------------------------
    // TIER 3: Web3Forms API (if WEB3FORMS_ACCESS_KEY provided)
    // --------------------------------------------------------------------------
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (web3formsKey && !delivered) {
      try {
        const w3Res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3formsKey,
            subject: emailSubject,
            name: sanitizedName,
            email: sanitizedEmail,
            message: sanitizedMessage,
            from_name: "Portfolio Contact Form",
            replyto: sanitizedEmail,
          }),
        });

        const w3Data = await w3Res.json().catch(() => null);
        if (w3Res.ok && w3Data?.success) {
          delivered = true;
          providerUsed = "Web3Forms API";
          console.info(`[Contact API] Delivered successfully via Web3Forms to ${TARGET_EMAIL}`);
        } else {
          console.warn("[Contact API] Web3Forms notice:", w3Data);
        }
      } catch (w3Err: any) {
        console.warn("[Contact API] Web3Forms exception:", w3Err?.message || w3Err);
      }
    }

    // --------------------------------------------------------------------------
    // TIER 4: FormSubmit Serverless Relay
    // --------------------------------------------------------------------------
    if (!delivered) {
      try {
        const clientOrigin =
          request.headers.get("origin") ||
          request.headers.get("referer") ||
          "https://kewateharshad.vercel.app";

        const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Origin: clientOrigin,
            Referer: clientOrigin,
          },
          body: JSON.stringify({
            _subject: emailSubject,
            _replyto: sanitizedEmail,
            Name: sanitizedName,
            "Visitor Email": sanitizedEmail,
            Message: sanitizedMessage,
            _template: "table",
          }),
        });

        const result = await formSubmitRes.json().catch(() => null);

        if (formSubmitRes.ok && (result?.success === "true" || result?.success === true)) {
          delivered = true;
          providerUsed = "FormSubmit Relay";
          console.info(`[Contact API] Delivered successfully via FormSubmit Relay to ${TARGET_EMAIL}`);
        } else if (result?.message) {
          deliveryError = result.message;
          console.warn("[Contact API] FormSubmit notice:", result.message);
        }
      } catch (relayErr: any) {
        console.warn("[Contact API] FormSubmit exception:", relayErr?.message || relayErr);
      }
    }

    // --------------------------------------------------------------------------
    // Result Evaluation
    // --------------------------------------------------------------------------
    if (!delivered) {
      console.error(
        `[Contact API Error] All email delivery providers were exhausted for recipient ${TARGET_EMAIL}. ` +
        `To ensure guaranteed direct delivery in production, please configure RESEND_API_KEY or GMAIL_APP_PASSWORD in your Vercel Environment Variables.`
      );

      return NextResponse.json(
        {
          error:
            deliveryError ||
            "Unable to deliver your message at this moment. Please reach out directly to kewateharshad@gmail.com.",
        },
        { status: 500 }
      );
    }

    console.info(
      `[Contact API Success] Inquiry transmitted via ${providerUsed} | Sender: ${sanitizedName} <${sanitizedEmail}>`
    );

    return NextResponse.json({
      success: true,
      message: "Message sent successfully! Harshad has received your note and will follow up shortly.",
    });
  } catch (error: any) {
    console.error("[Contact API Fatal Error]:", error);
    return NextResponse.json(
      {
        error:
          "Server encountered an unexpected error transmitting your message. Please reach out directly to kewateharshad@gmail.com.",
      },
      { status: 500 }
    );
  }
}
