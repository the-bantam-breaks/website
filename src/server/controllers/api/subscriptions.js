import {
    EmailSubscriptions// ,
    // SmsSubscriptions
} from './pg-database/models';
import {
    // isPhoneOptedOut,
    isValidEmail,
    isValidPhone
} from '../util';

export const subscriptions = {
    api: {

        create: {
            email: () => async (ctx) => {
                const { email } = ctx.request.body;

                if (!isValidEmail(email)) {
                    ctx.status = 400;
                    ctx.body = 'The subscription email is not valid';
                    return;
                }

                let subscription = {};

                try {
                    subscription = await EmailSubscriptions.createSubscription({
                        email
                    });
                } catch (e) {
                    ctx.status = 500;
                    ctx.body = 'Email subscription failed';
                    return;
                }

                if (subscription) {
                    EmailSubscriptions.sendConfirmationRequestEmail(subscription);
                }

                ctx.body = {
                    message: `email subscription ${subscription.id} has been added`
                };
            },
            sms: () => async (ctx) => {
                const { phone } = ctx.request.body;

                if (!isValidPhone(phone)) {
                    ctx.status = 400;
                    ctx.body = 'The subscription phone # is not valid';
                    return;
                }

                // TODO
                // const isOptedOut = await isPhoneOptedOut({ phoneNumber: phone });

                ctx.body = {
                    message: 'sms subscription has been added'
                };
            }
        },

        confirm: {
            email: () => async (ctx) => {
                const { query: { email, token } } = ctx;

                let subscription = {};

                try {
                    subscription = await EmailSubscriptions.activateWithEmailAndHash({
                        email,
                        hash: token
                    });
                    if (!subscription.active) {
                        ctx.status = 500;
                        ctx.body = 'Email confirmation failed';
                        return;
                    }
                } catch (e) {
                    ctx.status = 500;
                    ctx.body = 'Email confirmation failed';
                    return;
                }

                EmailSubscriptions.sendVerificationEmail(subscription);

                ctx.redirect('/subscription/thanks');
            },
            // TODO
            sms: () => async (ctx) => {
                // const { query } = ctx;

                ctx.body = {
                    message: 'sms subscription has been confirmed'
                };
            }
        },

        delete: {
            email: () => async (ctx) => {
                const { query: { email, token } } = ctx;

                try {
                    await EmailSubscriptions.deleteWithEmailAndHash({
                        email,
                        hash: token
                    });
                } catch (e) {
                    ctx.status = 500;
                    ctx.body = 'Email unsubscribe failed';
                    return;
                }

                ctx.redirect('/subscription/goodbye');
            },
            sms: () => async (ctx) => {
                const { query } = ctx;

                console.log('sms subscription deletion VALUE------>\n', JSON.stringify(query, null, 2));

                ctx.body = {
                    message: 'sms subscription has been removed'
                };
            }
        }
    }
};
