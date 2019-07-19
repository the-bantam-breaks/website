// const TYPES = ['SMS', 'EMAIL'];

export const subscriptions = {
    api: {

        create: {
            email: () => async (ctx) => {
                const { query } = ctx;

                console.log('new email subscription VALUE------>\n', JSON.stringify(query, null, 2));

                ctx.body = {
                    message: `email subscription has been added`
                };
            },
            sms: () => async (ctx) => {
                const { query } = ctx;

                console.log('new sms subscription VALUE------>\n', JSON.stringify(query, null, 2));

                ctx.body = {
                    message: `sms subscription has been added`
                };
            }
        },

        confirm: {
            email: () => async (ctx) => {
                const { query } = ctx;

                console.log('email subscription confirmation VALUE------>\n', JSON.stringify(query, null, 2));

                ctx.body = {
                    message: `email subscription has been confirmed`
                };
            },
            sms: () => async (ctx) => {
                const { query } = ctx;

                console.log('sms subscription confirmation VALUE------>\n', JSON.stringify(query, null, 2));

                ctx.body = {
                    message: `sms subscription has been confirmed`
                };
            }
        },

        delete: {
            email: () => async (ctx) => {
                const { query } = ctx;

                console.log('email subscription deletion VALUE------>\n', JSON.stringify(query, null, 2));

                ctx.body = {
                    message: `email subscription has been removed`
                };
            },
            sms: () => async (ctx) => {
                const { query } = ctx;

                console.log('sms subscription deletion VALUE------>\n', JSON.stringify(query, null, 2));

                ctx.body = {
                    message: `sms subscription has been removed`
                };
            }
        }
    }
};
