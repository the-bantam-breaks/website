import r from 'rethinkdb';
import { RETHINKDB } from '../config';

const connParams = {
    host: RETHINKDB.HOST,
    port: RETHINKDB.PORT
};

// Max number of retries
const MAX_RETRIES = 3;
const WAIT_BETWEEN_RETRIES = 30 * 1000;

let conn;
let retries = 0;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getConnection = async () => {
    try {
        if (conn) {
            if (!conn.open) {
                console.log('Trying to reconnecting to RethinkDB');
                await conn.reconnect();
            }
        } else {
            console.log('Trying to connect to RethinkDB');
            conn = await r.connect(connParams);
        }

        retries = 0;

        return conn;
    } catch (err) {
        retries++;
        console.log('There was a problem connecting or reconnecting to RethinkDB:', err.message);
        if (retries > MAX_RETRIES) {
            throw new Error(err.message);
        }

        console.log(`Will retry to connect to RethinkDB in ${WAIT_BETWEEN_RETRIES} ms`);

        await sleep(WAIT_BETWEEN_RETRIES);

        return getConnection();
    }
};
