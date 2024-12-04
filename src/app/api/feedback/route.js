import nodemailer from 'nodemailer';

export async function POST(req) {
    const { name, email, mobile, message } = await req.json();  // Parse the request body

    if (!name || !email || !mobile || !message) {
        return new Response(
            JSON.stringify({ error: 'All fields are required.' }),
            { status: 400 }
        );
    }

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,  // set to true if using SSL
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: '"Feedback" <info@intellect-systems.com>',
            to: process.env.SMTP_OWNER,  // Recipient email address
            subject: 'New Feedback from Website',
            text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`,
        };

        await transporter.sendMail(mailOptions);

        return new Response(
            JSON.stringify({ success: 'Feedback sent successfully!' }),
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        return new Response(
            JSON.stringify({ error: 'Failed to send feedback.' }),
            { status: 500 }
        );
    }
}
