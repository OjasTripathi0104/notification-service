const nodemailer = require('nodemailer');
const twilio = require('twilio');

const twilioClient = twilio(
    process.env.TWILIO_SID,
    process.env.TWILIO_AUTH
);

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

exports.sendNotificationByType = async (notification) => {
    const { type, message, userId } = notification;

    if (type === 'email') {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: userId,
            subject: 'New Notification',
            text: message,
        });
        console.log(`📧 Sent email to ${userId}`);
        return 'sent';
    }

    if (type === 'sms') {
        try {
            const msg = await twilioClient.messages.create({
                body: message,
                from: process.env.TWILIO_PHONE,
                to: userId,
            });
            console.log(`SMS sent to ${userId}. SID: ${msg.sid}`);
            return 'sent';
        } catch (err) {
            console.error(`SMS failed: ${err.message}`);
            return 'failed';
        }
    }

    console.log(`🔔 In-app stored for ${userId}: "${message}"`);
    return 'sent';
};
