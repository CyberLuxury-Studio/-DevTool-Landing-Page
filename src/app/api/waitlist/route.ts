import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address provided.' },
        { status: 400 }
      );
    }

    // Simulate network delay for the stealth/hacking effect
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In a real application, you would save the email to a database (Supabase, Firebase, Postgres, etc.)
    // or send it to an email provider API (Resend, Mailchimp, etc.) here.

    return NextResponse.json(
      { message: 'Access requested. Credentials logged.' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Server error. Protocol breached.' },
      { status: 500 }
    );
  }
}