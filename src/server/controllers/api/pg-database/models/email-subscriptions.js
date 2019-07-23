import { singleQuery } from '../run-query';
import {
    isValidEmail,
    generateToken,
    sendToGmail,
    sendSesMail,
    SubscriberVerificationEmail
} from '../../../util';

const BREAKS_GMAIL_ADDRESS = process.env.ENV_BOOOKING_MAIL_ACCOUNT;

const mailSubject = () =>
    `The Bantam Breaks: Thank you for subscribing!`;

const sendEmailVerificationMessageWithAmazon = async ({ email, hash }) => {
    const amazonMailOptions = {
        from: BREAKS_GMAIL_ADDRESS,
        to: BREAKS_GMAIL_ADDRESS,
        subject: mailSubject(),
        html: SubscriberVerificationEmail.emailHtml({ email, hash }),
        text: SubscriberVerificationEmail.emailText({ email, hash }),
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

const sendEmailVerificationMessageWithGmail = async ({ email, hash }) => {
    const gmailOptions = {
        from: BREAKS_GMAIL_ADDRESS,
        to: BREAKS_GMAIL_ADDRESS,
        subject: mailSubject(),
        html: SubscriberVerificationEmail.emailHtml({ email, hash })
    };

    return sendToGmail(gmailOptions, (err, info) => {
        if (err) {
            console.log('Gmail send errror', err);
        } else {
            console.log('gmail sent', info);
        }
    });
};

const TABLE_NAME = 'email_subscriptions';
const QUERIES = {
    CREATE_SUBSCRIPTION: `INSERT INTO ${TABLE_NAME}(email, hash, active) VALUES($1, $2, $3) RETURNING *`,
    FIND_BY_ID: 'SELECT * FROM user WHERE id = $1'
};
export class EmailSubscriptions {
    static async createSubscription ({ email }) {
        if (!isValidEmail) {
            return false;
        }
        const hash = generateToken();
        const { rows = [] } = await singleQuery(QUERIES.CREATE_SUBSCRIPTION, [email, hash, false]);
        if (rows[0] && rows[0].id) {
            return rows[0];
        } else {
            return {};
        }
    }

    static async findById ({ id }) {
        const { rows = [] } = await singleQuery(QUERIES.FIND_BY_ID, [id]);
        if (rows[0] && rows[0].id) {
            return rows[0];
        }
    }

    static async sendVerificationEmail ({ email, hash }) {
        if (!email || !hash) {
            console.log('unable to send verification email');
            return;
        }
        process.env.NODE_ENV === 'production'
            ? sendEmailVerificationMessageWithAmazon({ email, hash })
            : sendEmailVerificationMessageWithGmail({ email, hash });
    }
};
