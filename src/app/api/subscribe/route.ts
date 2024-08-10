'use server';

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  if (req.method === 'POST') {
    const { name, email } = await req.json();
    console.log('Received form data:', { name, email });

    if (!name || !email) {
      console.log('Missing name or email');
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    try {
      console.log('Creating transporter with:', {
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: '********' // Masked for security
        }
      });

      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      console.log('Sending email to:', process.env.RECIPIENT_EMAIL);
      let info = await transporter.sendMail({
        from: `"Peniel Institute" <${process.env.EMAIL_USER}>`,
        to: process.env.RECIPIENT_EMAIL,
        subject: "New Interest Form Submission",
        text: `Name: ${name}\nEmail: ${email}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p>`,
      });

      console.log("Message sent: %s", info.messageId);
      return NextResponse.json({ success: true }, { status: 200 });
    } catch (error: any) {
      console.error('Email sending error:', error);
      return NextResponse.json({ error: error.message || 'Something went wrong' }, { status: 500 });
    }
  } else {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }
}