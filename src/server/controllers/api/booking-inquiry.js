import { IncomingWebhook } from '@slack/webhook';
import nodemailer from 'nodemailer';
import stripIndent from 'strip-indent';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const BOOOKING_SLACK_WEBHOOK_URL = process.env.ENV_BOOOKING_SLACK_WEBHOOK_URL;
const SLACK_WEBHOOK = new IncomingWebhook(BOOOKING_SLACK_WEBHOOK_URL);
const GMAIL_ADDRESS = process.env.ENV_BOOOKING_MAIL_ACCOUNT;

const TRANSPORTER = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: GMAIL_ADDRESS,
        pass: process.env.ENV_BOOOKING_MAIL_PASSWORD
    },
    debug: true
});

const sendEmailMessage = ({ name, email, message }) => {
    const mailOptions = {
        from: GMAIL_ADDRESS,
        to: GMAIL_ADDRESS,
        subject: `Web Form Booking inquiry from ${name} / ${email}`, // Subject line
        html: `<p>From: ${name}</p><p>Email: ${email}</p><div>${message}</div>`
    };

    TRANSPORTER.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log('Gmail send errror', err);
        } else {
            console.log('gmail sent', info);
        }
    });
};

const sendSlackMessage = async ({ name, email, message }) => {
    const slackMessage = stripIndent(`Booking Inquiry from thebantambreaks.com web form\n
        \tFrom: *${name}*
        \tEmail: *${email}*\n
        ${['```', message, '```'].join('\n')}`);

    await SLACK_WEBHOOK.send({
        text: slackMessage
    });
};

export const bookingInquiry = {
    api: {
        new: () => async (ctx) => {
            const { email, message, name } = ctx.request.body;

            if (!EMAIL_REGEX.test(email)) {
                ctx.status = 500;
                ctx.body = 'There was a problem sending email to the address you provided';
                return;
            }

            await sendSlackMessage({ email, message, name });
            sendEmailMessage({ email, message, name });

            ctx.body = {
                message: `Booking inquiry received.  The Breaks Booking team will respond ASAP`
            };
        }
    }
};
