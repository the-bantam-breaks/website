import path from 'path';
import route from 'koa-route';
import mount from 'koa-mount';
import serve from 'koa-static';
import { web, show } from './controllers';

const staticRoute = path.resolve(__dirname, 'public');

export const routes = (app) => {
    const routeList = [
        // add static file paths
        serve(staticRoute), // for favicon
        mount('/css', serve(path.join(staticRoute, 'css/'))),
        mount('/img', serve(path.join(staticRoute, 'img/'))),
        mount('/js', serve(path.join(staticRoute, 'js/'))),

        // Reports Web
        route.get('/', web.index()),

        // Reports API
        route.get('/api/shows', show.api.list()),
        route.get('/api/shows/upcoming', show.api.latest()),
        route.get('/api/shows/archive', show.api.completed()),
        route.post('/api/shows/new', show.api.new()),
        route.get('/api/shows/:showId', show.api.show()),

        // Atlas HealthCheck endpoint
        route.get('/health', async (ctx) => {
            ctx.body = 'Ok';
        })
    ];

    routeList.forEach((route) => app.use(route));
};
