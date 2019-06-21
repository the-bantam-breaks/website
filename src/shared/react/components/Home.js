import React, { Component } from 'react';
import { AppDataProvider } from '../context/';
import { Hero } from './Hero';
import { Footer } from './Footer';
import { InstaGrid } from './InstaGrid';
import { NavBar } from './NavBar';

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
                <Footer />
            </AppDataProvider>
        );
    }
}

export default Home;
