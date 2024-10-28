// api/send-email.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { to, subject, html } = req.body;

        try {
            const response = await fetch('https://api.resend.com/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.RESEND_API_KEY}` // Use environment variable
                },
                body: JSON.stringify({ to, subject, html })
            });

            if (response.ok) {
                res.status(200).json({ message: 'Email sent successfully' });
            } else {
                res.status(response.status).json({ message: 'Error sending email' });
            }
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ message: 'Server error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}