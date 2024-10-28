import { Resend } from 'resend';

const resend = new Resend('your_api_key_here'); // Replace with your actual API key

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        try {
            const { data, error } = await resend.emails.send({
                from: 'Your Name <your_email@example.com>', // Replace with your email
                to: ['recipient@example.com'], // Replace with the recipient's email
                subject: 'New Form Submission',
                html: `<p>You have a new form submission:</p>
                       <p><strong>Name:</strong> ${name}</p>
                       <p><strong>Email:</strong> ${email}</p>
                       <p><strong>Message:</strong> ${message}</p>`,
            });

            if (error) {
                return res.status(500).json({ error: 'Failed to send email' });
            }

            return res.status(200).json({ message: 'Email sent successfully', data });
        } catch (error) {
            return res.status(500).json({ error: 'An error occurred' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
