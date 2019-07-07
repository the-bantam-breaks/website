import React, { Component } from 'react';
import { AppDataProvider } from '../../context';
import { EpkBio } from './epk-bio';
import { EpkSoundcloudPlayer } from './epk-soundcloud-player';
import { Hero } from '../Hero';
import { Footer } from '../Footer';
import { BandGrid } from '../BandGrid';
import VideoSection from '../VideoSection';

class EPK extends Component {
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
                <Hero
                    heading="The Bantam Breaks"
                    subHeading="Electronic Press Kit" />
                <EpkBio />
                <EpkSoundcloudPlayer />
                <BandGrid />
                <VideoSection />
                <Footer />
            </AppDataProvider>
        );
    }
}

export default EPK;
