import {
    sendToGmail,
    sendSesMail
} from '../';

import {
    getUnsubscribeLink,
    OUTGOING_EMAIL_ADDRESS
} from './util';

const mailSubject = () =>
    `The Bantam Breaks: Thank you for subscribing!`;

const sendVerifcationThanksMessageWithAmazon = async ({ email, hash }) => {
    const amazonMailOptions = {
        from: OUTGOING_EMAIL_ADDRESS,
        to: email,
        subject: mailSubject(),
        html: VerifiedSubscriberThankYouEmail.emailHtml({ email, hash }),
        text: VerifiedSubscriberThankYouEmail.emailText({ email, hash }),
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

const sendVerifcationThanksMessageWithGmail = async ({ email, hash }) => {
    const gmailOptions = {
        from: OUTGOING_EMAIL_ADDRESS,
        to: email,
        subject: mailSubject(),
        html: VerifiedSubscriberThankYouEmail.emailHtml({ email, hash })
    };

    return sendToGmail(gmailOptions, (err, info) => {
        if (err) {
            console.log('Gmail send errror', err);
        } else {
            console.log('gmail sent', info);
        }
    });
};

export const sendVerificationThanksMessage = ({ email, hash }) => {
    return process.env.NODE_ENV === 'production'
        ? sendVerifcationThanksMessageWithAmazon({ email, hash })
        : sendVerifcationThanksMessageWithGmail({ email, hash });
};

class VerifiedSubscriberThankYouEmail {
    static emailHtml ({ email, hash }) {
        return `
            <div>
            <div style="position: relative; text-align:center; width: 75%; margin: 0 auto;">
                <img src="http://thebantambreaks.com/img/email/breaks-logo_300x97.jpg" width="300" height="97" />
                <br />
                Thank you for subscribing to email updates from The Bantam Breaks!
            </div>
            <div style="position: relative; text-align:center; width: 55%; margin: 0 auto;">
                We will send information about any upcoming Bantam Breaks events your way!
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
            'We will send information about any upcoming Bantam Breaks events your way!',
            'If you have received this message in error please follow this link to unsubscribe',
            getUnsubscribeLink({ email, hash })
        ].join('\n');
    }

    static smsHtml ({ phone, hash }) {

    }

    static smsText ({ phone, hash }) {

    }
};
