import path from 'path';
import route from 'koa-route';
import mount from 'koa-mount';
import serve from 'koa-static';
import { web } from './controllers';

// const staticRoute = path.resolve(__dirname, '.build/');
const generatedStaticRoute = path.join(process.cwd(), 'public');
const staticRoute = path.join(process.cwd(), 'src', 'shared', 'public');

export const routes = (app) => {
    const routeList = [
        // add static file paths
        serve(generatedStaticRoute), // for client facing react bundle
        serve(staticRoute), // for favicon
        mount('/css', serve(path.join(staticRoute, 'css/'))),
        mount('/img', serve(path.join(staticRoute, 'img/'))),
        mount('/js', serve(path.join(staticRoute, 'js/'))),

        // Reports Web
        route.get('*', web.index())

        // Reports API
        // route.get('/api/shows', show.api.list()),
        // route.get('/api/shows/upcoming', show.api.upcoming()),
        // route.get('/api/shows/archive', show.api.archive()),
        // route.post('/api/shows/new', show.api.new()),
        // route.get('/api/shows/:showId', show.api.show()),
    ];

    routeList.forEach((route) => app.use(route));
};
