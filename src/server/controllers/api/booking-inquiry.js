import {
    sendToGmail,
    sendSesMail,
    sendSlackBookingMessage
} from '../util';

const BREAKS_GMAIL_ADDRESS = process.env.ENV_BOOOKING_MAIL_ACCOUNT;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const htmlMailMessage = ({ name, email, message }) =>
    `<p>From: ${name}</p><p>Email: ${email}</p><div>${message}</div>`;

const mailSubject = ({ name, email }) =>
    `Web Form Booking inquiry from ${name} / ${email}`;

const textMailMessage = ({ name, email, message }) =>
    `From: ${name}\nEmail: ${email}\n\n${message}`;

const sendEmailMessageWithAmazon = async ({ name, email, message }) => {
    const amazonMailOptions = {
        from: BREAKS_GMAIL_ADDRESS,
        to: BREAKS_GMAIL_ADDRESS,
        subject: mailSubject({ email, name }),
        html: htmlMailMessage({ name, email, message }),
        text: textMailMessage({ name, email, message }),
        ses: {}
    };

    return sendSesMail(amazonMailOptions, (err, info) => {
        if (err) {
            console.log('Amazon SES send errror', err);
        } else {
            console.log('Amazon SES sent', info);
        }
    });
};

const sendEmailMessageWithGmail = async ({ name, email, message }) => {
    const gmailOptions = {
        from: BREAKS_GMAIL_ADDRESS,
        to: BREAKS_GMAIL_ADDRESS,
        subject: mailSubject({ email, name }), // Subject line
        html: htmlMailMessage({ name, email, message })
    };

    return sendToGmail(gmailOptions, (err, info) => {
        if (err) {
            console.log('Gmail send errror', err);
        } else {
            console.log('gmail sent', info);
        }
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

            await sendSlackBookingMessage({ email, message, name });
            process.env.NODE_ENV === 'production'
                ? sendEmailMessageWithAmazon({ email, message, name })
                : sendEmailMessageWithGmail({ email, message, name });

            ctx.body = {
                message: 'Booking inquiry received.'
            };
        }
    }
};
