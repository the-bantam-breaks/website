const { env } = process;

export const APP_PORT = env.PORT || 3000;

export const RETHINKDB = {
    HOST: env.RETHINKDB_HOST || 'rethinkdb.local',
    PORT: env.RETHINKDB_PORT || 28015,
    DATABASE: 'breaksWebsite'
};
