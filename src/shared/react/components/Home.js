import React, { Component } from 'react';
import { AppDataProvider } from '../context';
import { AlbumGrid } from './AlbumGrid';
import { BookingForm } from './BookingForm';
import { Hero } from './Hero';
import { Footer } from './Footer';
// import { InstaGrid } from './InstaGrid';
import { NavBar } from './NavBar';
import { LiveShows } from './LiveShows';
import { BandGrid } from './BandGrid';
import VideoSection from './VideoSection';

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
                <Hero subHeading="Listen Now!" subHeadingLink="https://open.spotify.com/album/4LS7atij47xKeMUHAjV0nm" />
                <NavBar />
                <AlbumGrid />
                <LiveShows />
                <VideoSection />
                <BandGrid />
                <BookingForm />
                <Footer showDesignCredit={true} />
            </AppDataProvider>
        );
    }
}

export default Home;
