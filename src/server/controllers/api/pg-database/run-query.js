import { PG_POOL } from './pool';

export const clientQuery = async (query = '') => {
    const client = PG_POOL.connect();
    try {
        const res = await client.query(query);
        return res;
    } finally {
        client.release();
    }
};

export const singleQuery = async (text, params, callback) => {
    return PG_POOL.query(text, params, callback)
}
