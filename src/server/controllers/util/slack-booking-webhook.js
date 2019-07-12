import stripIndent from 'strip-indent';
import { IncomingWebhook } from '@slack/webhook';

const BOOOKING_SLACK_WEBHOOK_URL = process.env.ENV_BOOOKING_SLACK_WEBHOOK_URL;
const SLACK_BOOKING_INQUIRY_WEBHOOK = new IncomingWebhook(BOOOKING_SLACK_WEBHOOK_URL);

export const sendSlackBookingMessage = async ({ name, email, message }) => {
    const slackMessage = stripIndent(`Booking Inquiry from thebantambreaks.com web form\n
        \tFrom: *${name}*
        \tEmail: *${email}*
        ${['```', message, '```'].join('\n')}`);

    await SLACK_BOOKING_INQUIRY_WEBHOOK.send({
        text: slackMessage
    });
};
