import r from 'rethinkdb';
import moment from 'moment';
import { getConnection } from '../get-connection';
import { getDB } from '../get-db';

export const SHOW_FIELDS = {
    ID: 'id',
    CITY: 'city',
    COUNTRY: 'country',
    CREATED_DATE_TIME: 'createdDateTime',
    DATE: 'date',
    DETAILS: 'details',
    EVENT_URL: 'eventUrl',
    POSTAL_CODE: 'postalCode',
    STATE: 'state',
    TICKET_URL: 'ticketUrl',
    UPDATED_DATE_TIME: 'updatedDateTime',
    VENUE_NAME: 'venueName',
    VENUE_URL: 'venueUrl'
};

const DEFAULT_FIELDS = [
    SHOW_FIELDS.ID,
    SHOW_FIELDS.CITY,
    SHOW_FIELDS.COUNTRY,
    SHOW_FIELDS.CREATED_DATE_TIME,
    SHOW_FIELDS.DATE,
    SHOW_FIELDS.DETAILS,
    SHOW_FIELDS.EVENT_URL,
    SHOW_FIELDS.POSTAL_CODE,
    SHOW_FIELDS.STATE,
    SHOW_FIELDS.TICKET_URL,
    SHOW_FIELDS.UPDATED_DATE_TIME,
    SHOW_FIELDS.VENUE_NAME,
    SHOW_FIELDS.VENUE_URL
];

export const show = {
    findUpcoming: async ({
        fields = DEFAULT_FIELDS,
        limit = 10,
        table
    }) => getDB()
        .table(table)
        .filter(({ [SHOW_FIELDS.DATE]: date }) => {
            console.log(date);
            const showDateMoment = moment(new Date(date));
            const yesterdayMoment = moment().startOf('day').subtract(1, 'day');
            return showDateMoment.isAfter(yesterdayMoment);
        })
        .orderBy(r.desc(SHOW_FIELDS.CREATED_DATE_TIME))
        .limit(Number(limit))
        .pluck(fields)
        .run(await getConnection()),

    list: async ({
        fields = DEFAULT_FIELDS,
        limit = 10,
        table
    }) => getDB()
        .table(table)
        .orderBy(r.desc(SHOW_FIELDS.CREATED_DATE_TIME))
        .limit(Number(limit))
        .pluck(fields)
        .run(await getConnection()),

    new: async ({ table, content }) => getDB()
        .table(table)
        .insert({
            ...content,
            createdDateTime: r.now()
        })
        .run(await getConnection()),

    show: async ({ table, id }) => getDB()
        .table(table)
        .get(id)
        .run(await getConnection()),

    update: async ({ table, id, content }) => getDB()
        .table(table)
        .get(id)
        .update({
            ...content,
            updatedDateTime: r.now()
        })
        .run(await getConnection()),

    find: async ({
        table,
        fields = DEFAULT_FIELDS,
        filter,
        limit = 10,
        orderBy = SHOW_FIELDS.CREATED_DATE_TIME
    }) => getDB()
        .table(table)
        .filter(filter)
        .pluck(fields)
        .orderBy(orderBy)
        .limit(limit)
        .run(await getConnection())
};
