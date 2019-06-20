import React, { Component } from 'react';
import { AppDataProvider } from '../context/';
import { NavBar } from './NavBar';
import { Hero } from './Hero';
import { InstaGrid } from './InstaGrid';

class Home extends Component {
    constructor (props) {
        super(props)

        let appData;

        // eslint-disable-next-line
        if (__isBrowser__) {
            appData = window.__INITIAL_DATA__;
            delete window.__INITIAL_DATA__;
        } else {
            appData = {}
        }

        this.state = {
            appData
        };
    }

    render () {
        const { appData } = this.state
        if (!appData) {
            return null;
        }
        return (
            <AppDataProvider value={appData}>
                <Hero />
                <NavBar />
                <InstaGrid />
            </AppDataProvider>
        );
    }
}

export default Home;
