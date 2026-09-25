import { NextResponse } from "next/server";

const TARGET_EMAIL = "kewateharshad@gmail.com";

export async function POST(request: Request) {
  let body: any;

  try {
    body = await request.json();
  } catch (parseErr) {
    return NextResponse.json(
      { error: "Invalid JSON payload in request." },
      { status: 400 }
    );
  }

  try {
    const { name, email, message } = body || {};

    // Strict validation of form fields
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { error: "Please enter a message with at least 5 characters." },
        { status: 400 }
      );
    }

    const sanitizedName = name.trim().slice(0, 120);
    const sanitizedEmail = email.trim().toLowerCase().slice(0, 150);
    const sanitizedMessage = message.trim().slice(0, 3000);

    const emailSubject = "New Portfolio Contact Message";
    const emailBody = `Name: ${sanitizedName}\nVisitor Email: ${sanitizedEmail}\n\nMessage:\n${sanitizedMessage}`;

    let delivered = false;
    let deliveryError: string | null = null;

    // 1. Primary Strategy: Resend API (if RESEND_API_KEY configured in environment)
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendKey}`,
          },
          body: JSON.stringify({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: [TARGET_EMAIL],
            reply_to: sanitizedEmail,
            subject: emailSubject,
            text: emailBody,
          }),
        });

        if (resendRes.ok) {
          delivered = true;
          console.info(`[Email Dispatched via Resend] To: ${TARGET_EMAIL}`);
        } else {
          const errData = await resendRes.json().catch(() => ({}));
          console.warn("[Resend Dispatch Notice]:", errData);
        }
      } catch (resendErr) {
        console.warn("[Resend Dispatch Error]:", resendErr);
      }
    }

    // 2. Direct Serverless Relay Strategy (FormSubmit Relay to verified target inbox)
    if (!delivered) {
      try {
        const clientOrigin =
          request.headers.get("origin") ||
          request.headers.get("referer") ||
          "https://harshad-kewate.github.io";

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
          }),
        });

        const result = await formSubmitRes.json().catch(() => null);

        if (formSubmitRes.ok && result?.success === "true") {
          delivered = true;
          console.info(`[Email Dispatched via FormSubmit Relay] To: ${TARGET_EMAIL}`);
        } else {
          deliveryError = result?.message || "Relay service did not confirm message transmission.";
          console.warn("[FormSubmit Relay Notice]:", deliveryError);
        }
      } catch (relayErr: any) {
        deliveryError = relayErr?.message || "Network exception during email relay.";
        console.error("[Email Relay Exception]:", relayErr);
      }
    }

    if (!delivered) {
      return NextResponse.json(
        {
          error:
            deliveryError ||
            "Unable to deliver message to email inbox at this time. Please reach out directly to kewateharshad@gmail.com.",
        },
        { status: 500 }
      );
    }

    // Server-side audit logging
    console.info(
      `[Direct Inquiry Successfully Transmitted] ${new Date().toISOString()} | ${sanitizedName} (${sanitizedEmail})`
    );

    return NextResponse.json({
      success: true,
      message: "Message sent successfully. Harshad has received your transmission and will follow up shortly.",
    });
  } catch (error) {
    console.error("Contact API Server Error:", error);
    return NextResponse.json(
      {
        error:
          "Server encountered an unexpected issue transmitting your message. Please try again or reach out directly to kewateharshad@gmail.com.",
      },
      { status: 500 }
    );
  }
}
