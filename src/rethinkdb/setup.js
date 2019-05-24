import r from 'rethinkdb';
import { RETHINKDB } from '../config';
import { TABLES } from './constants';
import { createTable } from './create-table';
import { getConnection } from './get-connection';

const createDatabaseIfNotExists = (conn) => r
    .dbList()
    .contains(RETHINKDB.DATABASE)
    .do((databaseExists) => r.branch(
        databaseExists,
        { dbs_created: 0 },
        r.dbCreate(RETHINKDB.DATABASE)
    ))
    .run(conn);

const createTables = (conn) => Object
    .values(TABLES)
    .map(createTable.bind(this, conn));

export const setup = async () => {
    try {
        const conn = await getConnection();
        await createDatabaseIfNotExists(conn);
        await createTables(conn);
        return conn;
    } catch (err) {
        throw err;
    }
};
