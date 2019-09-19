import { Pool } from 'pg';

export const PG_POOL = new Pool({
    user: process.env.ENV_PG_USER,
    host: process.env.ENV_PG_HOST,
    database: process.env.ENV_PG_DATABASE,
    password: process.env.ENV_PG_PASSWORD,
    port: process.env.ENV_PG_PORT
});

export const drainPool = async () => {
    return PG_POOL.end();
};

// example usages
// promise - checkout a client
// pool.connect()
//   .then(client => {
//     return client.query('SELECT * FROM users WHERE id = $1', [1])
//       .then(res => {
//         client.release()
//         console.log(res.rows[0])
//       })
//       .catch(e => {
//         client.release()
//         console.log(err.stack)
//       })
//   })

// async/await - check out a client
// (async () => {
//   const client = await pool.connect()
//   try {
//     const res = await client.query('SELECT * FROM users WHERE id = $1', [1])
//     console.log(res.rows[0])
//   } finally {
//     client.release()
//   }
// })().catch(e => console.log(e.stack))
