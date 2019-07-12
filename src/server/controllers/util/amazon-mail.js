import AWS from 'aws-sdk';
import nodemailer from 'nodemailer';

// configure AWS SDK
AWS.config.update({
    region: process.env.ENV_AWS_REGION,
    accessKeyId: process.env.ENV_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.ENV_AWS_SECRET_ACCESS_KEY
});

// create Nodemailer SES transporter
const AMAZON_SES_TRANSPORTER = nodemailer.createTransport({
    SES: new AWS.SES({
        apiVersion: '2010-12-01'
    })
});

export const sendSesMail = async (mailOptions = {}, callback) => {
    return AMAZON_SES_TRANSPORTER.sendMail(mailOptions, callback);
};
