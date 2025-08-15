import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { getContactEmailTemplate, getConfirmationEmailTemplate } from '@/lib/email-templates';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Send email to you (notification)
    const notificationEmail = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['renhotsai@gmail.com'],
      subject: `💼 New Contact Form Message from ${name}`,
      html: getContactEmailTemplate({ name, email, message }),
    });

    // Send confirmation email to sender
    const confirmationEmail = await resend.emails.send({
      from: 'Jeremy Tsai <onboarding@resend.dev>',
      to: [email],
      subject: '✅ Message Received - Thank You for Contacting Me!',
      html: getConfirmationEmailTemplate({ name }),
    });

    return NextResponse.json(
      { 
        message: 'Emails sent successfully', 
        notification: notificationEmail,
        confirmation: confirmationEmail
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending emails:', error);
    return NextResponse.json(
      { error: 'Failed to send emails' },
      { status: 500 }
    );
  }
}