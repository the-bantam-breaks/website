import { PhoneNumberUtil } from 'google-libphonenumber';

const PHONE_UTIL = PhoneNumberUtil.getInstance();

// Currently only US phone numbers work
export const isValidPhone = (phoneNum) => {
    if (!phoneNum) {
        return false;
    }

    let valid;

    try {
        const number = PHONE_UTIL.parse(phoneNum, 'US');
        valid = PHONE_UTIL.isValidNumber(number);
    } catch (e) {
        valid = false;
    }
    return valid;
};
