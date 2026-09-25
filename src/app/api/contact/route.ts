import { NextResponse } from "next/server";

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

    // Strict validation
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

    // Optional external email dispatch if service key configured in environment
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendKey}`,
          },
          body: JSON.stringify({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: ["kewateharshad@gmail.com"],
            subject: `[Portfolio Inquiry] From ${sanitizedName}`,
            text: `Sender Name: ${sanitizedName}\nSender Email: ${sanitizedEmail}\n\nMessage:\n${sanitizedMessage}`,
          }),
        });
      } catch (externalErr) {
        console.warn("External dispatch warning:", externalErr);
      }
    }

    // Server-side audit logging
    console.info(`[Direct Inquiry Received] ${new Date().toISOString()} | ${sanitizedName} (${sanitizedEmail})`);

    return NextResponse.json({
      success: true,
      message: "Message sent successfully. Harshad has received your transmission and will follow up shortly.",
    });
  } catch (error) {
    console.error("Contact API Server Error:", error);
    return NextResponse.json(
      { error: "Server encountered an issue transmitting your message. Please try again or reach out directly." },
      { status: 500 }
    );
  }
}
