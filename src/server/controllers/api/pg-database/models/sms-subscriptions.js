// import { singleQuery } from '../run-query';
import {
    isValidPhone// ,
    // generateToken
} from '../../../util';

export class SmsSubscriptions {
    static async createSubscription ({ phone }) {
        if (!isValidPhone) {
            return false;
        }
        // const hash = generateToken();
        // const phoneSubscription = await singleQuery();
        // console.log('phoneSubscription------>\n', JSON.stringify( phoneSubscription, null, 2));
    }
};
