interface AppointmentReminderEmailParams {
    firstName: string;
    appointmentDate: string;
    appointmentTime: string;
    providerName: string;
    location: string;
}

export function appointmentReminderEmailTemplate({
    firstName,
    appointmentDate,
    appointmentTime,
    providerName,
    location,
}: AppointmentReminderEmailParams) {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Appointment Reminder - CareBridge AI</title>
      </head>
      <body style="margin:0; padding:0; background-color:#f4f8fb; font-family:Arial, sans-serif; color:#1f2937;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f4f8fb; padding:30px 0;">
          <tr>
            <td align="center">
              <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.08);">
                
                <tr>
                  <td style="background-color:#2563eb; padding:24px; text-align:center;">
                    <h1 style="margin:0; color:#ffffff; font-size:28px;">CareBridge AI</h1>
                    <p style="margin:8px 0 0; color:#dbeafe; font-size:14px;">
                      Appointment Reminder
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:32px 36px;">
                    <h2 style="margin:0 0 16px; font-size:24px; color:#111827;">
                      Hello, ${firstName}
                    </h2>

                    <p style="margin:0 0 16px; font-size:16px; line-height:1.6; color:#374151;">
                      This is a reminder that you have an upcoming appointment scheduled through CareBridge AI.
                    </p>

                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:20px 0; background-color:#f9fafb; border:1px solid #e5e7eb; border-radius:8px;">
                      <tr>
                        <td style="padding:20px;">
                          <p style="margin:0 0 10px; font-size:15px; color:#111827;"><strong>Date:</strong> ${appointmentDate}</p>
                          <p style="margin:0 0 10px; font-size:15px; color:#111827;"><strong>Time:</strong> ${appointmentTime}</p>
                          <p style="margin:0 0 10px; font-size:15px; color:#111827;"><strong>Provider:</strong> ${providerName}</p>
                          <p style="margin:0; font-size:15px; color:#111827;"><strong>Location:</strong> ${location}</p>
                        </td>
                      </tr>
                    </table>

                    <p style="margin:0 0 16px; font-size:16px; line-height:1.6; color:#374151;">
                      Please make sure to arrive a few minutes early and bring anything you may need for your visit.
                    </p>

                    <table role="presentation" cellspacing="0" cellpadding="0" style="margin:24px 0;">
                      <tr>
                        <td align="center" style="border-radius:8px; background-color:#2563eb;">
                          <a href="http://localhost:3000/dashboard"
                             style="display:inline-block; padding:14px 24px; font-size:16px; color:#ffffff; text-decoration:none; font-weight:bold;">
                            View Your Dashboard
                          </a>
                        </td>
                      </tr>
                    </table>

                    <p style="margin:0; font-size:15px; line-height:1.6; color:#4b5563;">
                      Thank you for using CareBridge AI.
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="background-color:#f9fafb; padding:20px 36px; border-top:1px solid #e5e7eb;">
                    <p style="margin:0 0 8px; font-size:14px; color:#6b7280;">
                      CareBridge AI
                    </p>
                    <p style="margin:0; font-size:14px; color:#6b7280;">
                      Email: support@carebridgeai.com
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}