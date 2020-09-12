import React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS, Center } from '../Atoms';

const PlayerSection = styled.section`
    box-sizing: border-box;
    padding: 2rem 20vw;
    margin: 1rem;

    @media (max-width: ${BREAKPOINTS.MOBILE}) {
        padding: .5rem 0;
        margin: .2rem;
    }
`;

export const EpkSoundcloudPlayer = () => {
    return (
        <PlayerSection>
            <Center>
                <iframe
                    width="100%"
                    height="450"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/369985922&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false">
                </iframe>
            </Center>
        </PlayerSection>
    );
};
