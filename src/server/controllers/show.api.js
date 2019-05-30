import Boom from '@hapi/boom';
import {
    show as showEntity
} from '../../rethinkdb';
import { boomWrapper } from '../utils';
import { createShow, getShow } from './show';

export const showApi = {
    archive: () => async (ctx) => {
        ctx.body = await showEntity.findArchived();
    },

    upcoming: () => async (ctx) => {
        ctx.body = await showEntity.findUpcoming();
    },

    list: () => async (ctx) => {
        ctx.body = await showEntity.list();
    },

    new: () => async (ctx) => {
        const { query } = ctx;
        // TODO- how to find show data
        const { id } = await createShow(ctx, query.force, query);

        ctx.body = {
            message: `Show ${id} has been added`
        };
    },

    show: () => async (ctx, showId) => {
        ctx.body = await getShow(ctx, showId);
    },

    notImplemented: () => async (ctx) => {
        boomWrapper(ctx, Boom.notImplemented, 'Route is not implemented');
    }
};
