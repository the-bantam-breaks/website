import React from 'react';
import styled from 'styled-components';
import { useAppDataContext } from '../context/';
import { BREAKPOINTS, CenteredDiv, ScrollTo } from './Atoms';

const VideoFrame = styled.iframe`
    width: 100vw;
    height: auto;
    min-height: 600px;

    @media (max-width: ${BREAKPOINTS.MOBILE}) {
        min-height: 300px;
    }
`;

const VideoWrap = styled.section`
    padding-bottom: 2.75rem;
`;

const VideoSection = () => {
    const { youtubeEmbeddedVideo = {} } = useAppDataContext() || {};

    return (
        <VideoWrap>
            <CenteredDiv>
                <ScrollTo id={'videos'}>{' '}</ScrollTo>
                <VideoFrame
                    src={youtubeEmbeddedVideo.embedUrl}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen />
            </CenteredDiv>
        </VideoWrap>
    );
};

export default VideoSection;
