import { EPK } from './components/epk/';
import { Privacy } from './components/Privacy/';
import Home from './components/Home';

export const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/epk',
        exact: true,
        component: EPK
    },
    {
        path: '/privacy',
        exact: true,
        component: Privacy
    }
];
