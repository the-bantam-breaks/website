import crypto from 'crypto';

export const generateToken = async (length = 32) => {
    return crypto.randomBytes(length).toString('hex');
};
