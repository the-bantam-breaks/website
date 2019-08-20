import {
    sendToGmail,
    sendSesMail
} from '../';

import {
    getUnsubscribeLink,
    getVerificationLink,
    OUTGOING_EMAIL_ADDRESS
} from './util';

const mailSubject = () =>
    `The Bantam Breaks: Thank you for subscribing! Please confirm your email`;

const sendConfirmationRequestMessageWithAmazon = async ({ email, hash }) => {
    const amazonMailOptions = {
        from: OUTGOING_EMAIL_ADDRESS,
        to: email,
        subject: mailSubject(),
        html: SubscriberConfirmationRequestEmail.emailHtml({ email, hash }),
        text: SubscriberConfirmationRequestEmail.emailText({ email, hash }),
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

const sendConfirmationRequestMessageWithGmail = async ({ email, hash }) => {
    const gmailOptions = {
        from: OUTGOING_EMAIL_ADDRESS,
        to: email,
        subject: mailSubject(),
        html: SubscriberConfirmationRequestEmail.emailHtml({ email, hash })
    };

    return sendToGmail(gmailOptions, (err, info) => {
        if (err) {
            console.log('Gmail send errror', err);
        } else {
            console.log('gmail sent', info);
        }
    });
};

export const sendConfirmationRequestMessage = ({ email, hash }) => {
    return process.env.NODE_ENV === 'production'
        ? sendConfirmationRequestMessageWithAmazon({ email, hash })
        : sendConfirmationRequestMessageWithGmail({ email, hash });
};

class SubscriberConfirmationRequestEmail {
    static emailHtml ({ email, hash }) {
        return `
            <div>
            <div style="position: relative; text-align:center; width: 75%; margin: 0 auto;">
                <img src="http://thebantambreaks.com/img/email/breaks-logo_300x97.jpg" width="300" height="97" />
                <br />
                Thank you for subscribing to email updates from The Bantam Breaks!
            </div>
            <div style="position: relative; text-align:center; width: 55%; margin: 0 auto;">

                <br /><br />
                Please visit the following link to verify your email address.
                <br />
                <a href="${getVerificationLink({ email, hash })}">
                    Verify Email Address
                </a>
                <br /><br />
                If you have received this message in error please follow this link to unsubscribe
                <br/>
                <a href="${getUnsubscribeLink({ email, hash })}">
                    Unsubscribe
                </a>
            </div>
            </div>
        `;
    }

    static emailText ({ domain, email, hash }) {
        return [
            'Thank you for subscribing to email updates from The Bantam Breaks!',
            'Please visit the following link to verify your email address.',
            getVerificationLink({ email, hash }),
            'If you have received this message in error please follow this link to unsubscribe',
            getUnsubscribeLink({ email, hash })
        ].join('\n');
    }

    static smsHtml ({ phone, hash }) {

    }

    static smsText ({ phone, hash }) {

    }
};
