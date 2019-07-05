import {
    show as showEntity
} from '../../rethinkdb';
import { showApi } from './show.api';

export const createShow = async (ctx, force = false, content) => {
    try {
        return await showEntity.new(content);
    } catch (err) {
        return ctx.throw(err);
    }
};

export const getShow = async (ctx, showId) => {
    try {
        const show = await showEntity.show(showId);

        if (!show) {
            return ctx.throw(`Cannot find show ${showId}`, 404);
        }

        return show;
    } catch (err) {
        return ctx.throw(err);
    }
};

// TODO - do we want a web admin.  would need auth, etc.
// import { showAdmin } from './show.admin';
export const show = {
    api: showApi
    // web: showAdmin
};
