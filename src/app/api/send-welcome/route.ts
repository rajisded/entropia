import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// API Key and Resend initialization moved to inside handler for safety


export async function POST(request: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not defined');
      return NextResponse.json(
        { error: 'Server configuration error: Missing API Key' },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);
    const { name, email } = await request.json();

    if (!email || !name) {
      return NextResponse.json(
        { error: 'Missing required fields: name or email' },
        { status: 400 }
      );
    }

    const subjectLines = [
      "Welcome to the inner circle",
      "You're officially in",
      "Welcome to the few, not the many",
      "You're early. That matters.",
      "Reserved: Your spot in Entropia",
      "Access granted. Welcome aboard.",
      "You're one of the first",
      "Welcome to the community",
      "You just joined something rare",
      "Your invitation has been accepted"
    ];

    const randomSubject = subjectLines[Math.floor(Math.random() * subjectLines.length)];

    const { data, error } = await resend.emails.send({
      from: 'Entropia <contact@entropiacity.com>',
      to: email,
      subject: randomSubject,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #000; padding: 20px;">
          
          <h1 style="font-size: 24px; font-weight: bold; margin-bottom: 24px;">Hi ${name},</h1>
          
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">Welcome to Entropia! 🎉</p>
          
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 24px;">You're officially on the list. We're thrilled to have you join our community of builders, researchers, and innovators.</p>
          
          <div style="background-color: #f9fafb; border-left: 4px solid #000; padding: 16px; margin-bottom: 24px;">
            <h3 style="margin-top: 0; font-size: 18px; margin-bottom: 12px;">Here's what happens next:</h3>
            <ul style="padding-left: 20px; font-size: 16px; line-height: 1.6; margin-bottom: 0;">
              <li style="margin-bottom: 8px;">We'll keep you updated as we get closer to launch</li>
              <li style="margin-bottom: 8px;">You'll be among the first to get access when we're ready</li>
              <li>We'll share exclusive insights and updates along the way</li>
            </ul>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">Thanks for believing in what we're building.</p>
          
          <p style="font-size: 16px; font-weight: bold; margin-top: 32px;">The Entropia Team</p>
          
          <hr style="border: none; border-top: 1px solid #eaeaea; margin: 40px 0 20px;" />
          
          <p style="font-size: 12px; color: #666; text-align: center;">
            © ${new Date().getFullYear()} Entropia City. All rights reserved.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ error: error.message || 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Failed to send welcome email (Route Handler):', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
