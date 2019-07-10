// const TYPES = ['SMS', 'EMAIL'];

export const subscriptions = {
    api: {
        new: () => async (ctx) => {
            const { query } = ctx;

            console.log('new subscription VALUE------>\n', JSON.stringify(query, null, 2));

            ctx.body = {
                message: `subscription has been added`
            };
        },

        delete: () => async (ctx, showId) => {
            const { query } = ctx;

            console.log('delete subscription VALUE------>\n', JSON.stringify(query, null, 2));

            ctx.body = {
                message: `subscription has been deleted`
            };
        }
    }
};
