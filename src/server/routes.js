import path from 'path';
import route from 'koa-route';
import mount from 'koa-mount';
import serve from 'koa-static';
import { web } from './controllers';
import { bookingInquiry, subscriptions } from './controllers/api';

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
        mount('/fonts', serve(path.join(staticRoute, 'fonts/'))),

        // API
        route.post('/api/subscriptions', subscriptions.api.new()),
        route.delete('/api/subscriptions', subscriptions.api.delete()),
        route.post('/api/booking_inquiry', bookingInquiry.api.new()),

        // Web
        route.get('*', web.index())
    ];

    routeList.forEach((route) => app.use(route));
};
