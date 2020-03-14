import React, { Component } from 'react';
import styled from 'styled-components';
import { AppDataProvider } from '../../context';
import { BREAKPOINTS, CenteredDiv, SectionHeading } from '../Atoms';
import { Hero } from '../Hero';
import { Footer } from '../Footer';

const PrivacySection = styled.section`
    box-sizing: border-box;
    padding: 2rem 15vw;
    margin: 1rem;

    @media (max-width: ${BREAKPOINTS.MOBILE}) {
        padding: .5rem 0;
        margin: .2rem;
    }
`;

class Privacy extends Component {
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
                <PrivacySection>
                    <CenteredDiv>
                        <SectionHeading>{'Privacy'}</SectionHeading>
                        <div>{'The Bantam Breaks does not share any user information... period.'}</div>
                    </CenteredDiv>
                </PrivacySection>
                <Footer />
            </AppDataProvider>
        );
    }
}

export default Privacy;
