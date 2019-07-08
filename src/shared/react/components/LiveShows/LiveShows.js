import React from 'react';
import styled from 'styled-components';
import queryString from 'query-string'
import { withRouter } from 'react-router-dom';
import { useAppDataContext } from '../../context/';
import { BREAKPOINTS, CenteredDiv, ScrollTo, SectionHeading, Subtext, Title } from '../Atoms';
import { ShowList } from './ShowList';

const NoShowWrap = styled.div`
    margin-bottom: 60px;

    @media (max-width: ${BREAKPOINTS.MOBILE}) {
        margin-bottom: 20px;
    }
`;

export const NoShowContent = () => {
    return (
        <NoShowWrap>
            <Title>{'There are no scheduled Breaks shows'}</Title>
            <Subtext>{'please check back soon'}</Subtext>
        </NoShowWrap>
    );
};

const LiveShowsSection = (props) => {
    const {
        location: {
            search = ''
        } = {}
    } = props;

    const { showArchive } = queryString.parse(search);

    const {
        archivedShows = [],
        upcomingShows = []
    } = useAppDataContext() || {};

    const showsToList = showArchive
        ? [...upcomingShows, ...archivedShows]
        : upcomingShows;

    const showListings = showsToList.length > 0
        ? (<ShowList shows={showsToList} />)
        : NoShowContent();

    return (
        <section>
            <CenteredDiv>
                <ScrollTo id={'shows'}>{' '}</ScrollTo>
                <SectionHeading>Live Shows</SectionHeading>
                {showListings}
            </CenteredDiv>
        </section>
    );
};

export { LiveShowsSection as LiveShowsStyles };
export const LiveShows = withRouter(LiveShowsSection);
