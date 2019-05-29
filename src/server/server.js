import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import { APP_PORT } from '../config';
import { setup as setupRethinkDB } from '../rethinkdb';
import { routes } from './routes';

const server = async () => {
    const app = new Koa();

    // await setupRethinkDB();

    app.use(logger())
    app.use(bodyParser());

    // Setup routes
    routes(app);



    app.listen(APP_PORT);

    console.info(`Started server on port ${APP_PORT}`);

    return app;
};

// export default server;

export const app = server();

// // This is Koa 1
// const Koa = require('koa');
// export const app = new Koa();

// app.use(async function(ctx) {
//   ctx.body = 'Hello World';
// });

// if (!module.parent) app.listen(3000);

// // export default app;
