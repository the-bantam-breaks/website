import crypto from 'crypto';

// use half of desired oken length
// one Byte (from 0 to 254) is displayed using 2 characters in hexadecimal
export const generateToken = (length = 16) => {
    return crypto.randomBytes(length).toString('hex');
};
