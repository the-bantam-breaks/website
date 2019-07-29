import { singleQuery } from '../run-query';
import {
    isValidEmail,
    generateToken,
    sendConfirmationRequestMessage,
    sendVerificationThanksMessage
} from '../../../util';

const TABLE_NAME = 'email_subscriptions';

const QUERIES = {
    ACTIVATE_SUBSCRIPTION: `UPDATE ${TABLE_NAME} SET active = ${true} WHERE email = $1 AND hash = $2 RETURNING *`,
    CREATE_SUBSCRIPTION: `INSERT INTO ${TABLE_NAME}(email, hash, active) VALUES($1, $2, $3) RETURNING *`,
    DELETE_BY_EMAIL_AND_HASH: `DELETE FROM ${TABLE_NAME} WHERE email = $1 AND hash = $2 RETURNING *`,
    FIND_BY_ID: `SELECT * FROM ${TABLE_NAME} WHERE id = $1`,
    FIND_BY_EMAIL: `SELECT * FROM ${TABLE_NAME} WHERE email = $1 LIMIT 1`,
    FIND_BY_EMAIL_AND_HASH: `SELECT * FROM ${TABLE_NAME} WHERE email = $1 AND hash = $2 LIMIT 1`
};

export class EmailSubscriptions {
    static async createSubscription ({ email }) {
        if (!isValidEmail) {
            return false;
        }
        const hash = generateToken();
        const { rows = [] } = await singleQuery(QUERIES.CREATE_SUBSCRIPTION, [email, hash, false]);
        if (rows[0] && rows[0].id) {
            return rows[0];
        } else {
            return {};
        }
    }

    static async activateWithEmailAndHash ({ email, hash }) {
        const { rows = [] } = await singleQuery(QUERIES.ACTIVATE_SUBSCRIPTION, [email, hash]);
        if (rows[0] && rows[0].id) {
            return rows[0];
        }
    }

    static async deleteWithEmailAndHash ({ email, hash }) {
        const { rows = [] } = await singleQuery(QUERIES.DELETE_BY_EMAIL_AND_HASH, [email, hash]);
        if (rows[0] && rows[0].id) {
            return rows[0];
        }
    }

    static async findById ({ id }) {
        const { rows = [] } = await singleQuery(QUERIES.FIND_BY_ID, [id]);
        if (rows[0] && rows[0].id) {
            return rows[0];
        }
    }

    static async findByEmail ({ email }) {
        const { rows = [] } = await singleQuery(QUERIES.FIND_BY_EMAIL, [email]);
        if (rows[0] && rows[0].id) {
            return rows[0];
        }
    }

    static async findWithEmailAndHash ({ email, hash }) {
        const { rows = [] } = await singleQuery(QUERIES.FIND_BY_EMAIL_AND_HASH, [email, hash]);
        if (rows[0] && rows[0].id) {
            return rows[0];
        }
    }

    static async sendConfirmationRequestEmail ({ email, hash }) {
        if (!email || !hash) {
            console.log('unable to send verification email');
            return;
        }
        return sendConfirmationRequestMessage({ email, hash });
    }

    static async sendVerificationEmail ({ email, hash }) {
        if (!email || !hash) {
            console.log('unable to send verification email');
            return;
        }
        return sendVerificationThanksMessage({ email, hash });
    }
};
