export const getEmailDomain = () => {
    return process.env.NODE_ENV === 'production'
        ? 'http://thebantambreaks.com'
        : 'http://localhost:3000' // TODO dev.thebantambreaks.com ?
};

export const getVerificationLink = ({ email, hash }) => {
    return `${getEmailDomain()}/api/subscription/confirm/email?email=${email}&token=${hash}`;
}

export const getUnsubscribeLink = ({ email, hash }) => {
    return `${getEmailDomain()}/api/unsubscribe/email?email=${email}&token=${hash}`;
}
