import { EPK } from './components/epk/';
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
    }
];
