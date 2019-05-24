import r from 'rethinkdb';
import { RETHINKDB } from '../config';

export const getDB = () => r.db(RETHINKDB.DATABASE);
