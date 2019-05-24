import r from 'rethinkdb';
import { getDB } from './get-db';

export const createTable = (conn, table) => getDB()
    .tableList()
    .contains(table)
    .do((tableExists) => r.branch(
        tableExists,
        { tables_created: 0 },
        getDB().tableCreate(table)
    ))
    .run(conn);
