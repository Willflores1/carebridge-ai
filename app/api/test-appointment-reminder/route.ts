import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { appointmentReminderEmailTemplate } from '@/app/utils/emailTemplates/appointmentReminderEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
    try {
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'wf59050@gmail.com',
            subject: 'Your Appointment Reminder - CareBridge AI',
            html: appointmentReminderEmailTemplate({
                firstName: 'William',
                appointmentDate: 'April 20, 2026',
                appointmentTime: '2:30 PM',
                providerName: 'Dr. Sarah Chen',
                location: 'CareBridge Medical Clinic',
            }),
        });

        return NextResponse.json({ message: 'Appointment reminder sent', data });
    } catch (error) {
        console.error('Appointment reminder error:', error);
        return NextResponse.json(
            { message: 'Failed to send appointment reminder' },
            { status: 500 }
        );
    }
}