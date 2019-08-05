export const AWS_CONFIG = {
    region: process.env.ENV_AWS_REGION || 'us-east-1',
    accessKeyId: process.env.ENV_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.ENV_AWS_SECRET_ACCESS_KEY
};

export const SNS_PARAMS = {
    attributes: { /* required */
        // 'DefaultSMSType': 'Transactional', /* highest reliability */
        DefaultSMSType: 'Promotional' /* lowest cost */
    }
};
