import AWS from 'aws-sdk';

import { AWS_CONFIG, SNS_PARAMS } from './aws-sdk-config';

// configure AWS SDK
AWS.config.update(AWS_CONFIG);

const SNS = new AWS.SNS({ apiVersion: '2010-03-31' });
SNS.setSMSAttributes(SNS_PARAMS);

export const isPhoneOptedOut = async ({ phoneNumber }) => {
    let isOptedOut = true;
    await SNS.checkIfPhoneNumberIsOptedOut({ phoneNumber }, (err, data) => {
        if (err) {
            console.log(err, err.stack);
        } else {
            const { isOptedOut: optedOut } = data;
            isOptedOut = optedOut;
        }
    });
    return isOptedOut;
};
