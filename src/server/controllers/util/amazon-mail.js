import AWS from 'aws-sdk';
import nodemailer from 'nodemailer';

import { AWS_CONFIG } from './aws-sdk-config';

// configure AWS SDK
AWS.config.update(AWS_CONFIG);

// create Nodemailer SES transporter
const AMAZON_SES_TRANSPORTER = nodemailer.createTransport({
    SES: new AWS.SES({
        apiVersion: '2010-12-01'
    })
});

export const sendSesMail = (mailOptions = {}, callback) => {
    return AMAZON_SES_TRANSPORTER.sendMail(mailOptions, callback);
};
