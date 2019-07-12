import nodemailer from 'nodemailer';

const BREAKS_GMAIL_ADDRESS = process.env.ENV_BOOOKING_MAIL_ACCOUNT;

const GMAIL_TRANSPORTER = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: BREAKS_GMAIL_ADDRESS,
        pass: process.env.ENV_BOOOKING_MAIL_PASSWORD
    },
    debug: true
});

export const sendToGmail = (mailOptions = {}, callback) => {
    return GMAIL_TRANSPORTER.sendMail(mailOptions, callback);
};
