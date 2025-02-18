import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    const { name, email, message } = await request.json();
    
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.NODEMAILER_GMAIL,
            pass: process.env.NODEMAILER_GMAIL_PASS
        },
    });

    const mailOptions = {
        from: email,
        to: 'directortravelfarm@gmail.com',
        subject: `Contact Us Form LoughConnDash - from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully!');
        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
} 