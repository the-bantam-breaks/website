import React from 'react';
import { EPK } from './components/epk/';
import Home from './components/Home';
import { Messaging } from './components/Messaging/';

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
        path: '/subscription/goodbye',
        exact: true,
        component: (props) => (
            <Messaging {...props}
                heading={'Sorry to see you go!'}
                showForm={false}
                subHeading={'Your subscription has been removed. We have removed your data from our system.'}
            />
        )
    },
    {
        path: '/subscription/thanks',
        exact: true,
        component: (props) => (
            <Messaging {...props}
                heading={'Thanks for subscribing!'}
                showForm={false}
                subHeading={'We will be sending updates about the Bantam Breaks your way.'}
            />
        )
    }
];
