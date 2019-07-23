export class SubscriberVerificationEmail {
    static getEmailDomain () {
        return process.env.NODE_ENV === 'production'
            ? 'http://thebantambreaks.com'
            : 'http://localhost:3000' // TODO dev.thebantambreaks.com ?
    }

    static getVerificationLink ({ email, hash }) {
        return `${SubscriberVerificationEmail.getEmailDomain()}/api/subscription/confirm/email?email=${email}&token=${hash}`;
    }

    static getUnsubscribeLink ({ email, hash }) {
        return `${SubscriberVerificationEmail.getEmailDomain()}/api/unsubscribe/email?email=${email}&token=${hash}`;
    }

    static emailHtml ({ email, hash }) {
        return `
            <div>
            <div style="position: relative; text-align:center; width: 75%; margin: 0 auto;">
                <img src="${`${SubscriberVerificationEmail.getEmailDomain()}/img/email/breaks_logo_300x97.jpg`}" width="300" height="97" />
                <br />
                Thank you for subscribing to email updates from The Bantam Breaks!
            </div>
            <div style="position: relative; text-align:center; width: 55%; margin: 0 auto;">

                <br /><br />
                Please visit the following link to verify your email address.
                <br />
                <a href="${SubscriberVerificationEmail.getVerificationLink({ email, hash })}">
                    Verify Email Address
                </a>
                <br /><br />
                If you have received this message in error please follow this link to unsubscribe
                <br/>
                <a href="${SubscriberVerificationEmail.getUnsubscribeLink({ email, hash })}">
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
            SubscriberVerificationEmail.getVerificationLink({ email, hash }),
            'If you have received this message in error please follow this link to unsubscribe',
            SubscriberVerificationEmail.getUnsubscribeLink({ email, hash })
        ].join('\n');
    }

    static smsHtml ({ phone, hash }) {

    }

    static smsText ({ phone, hash }) {

    }
};
