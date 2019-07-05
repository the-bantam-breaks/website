import React, { Fragment } from 'react';
import { useAppDataContext } from '../../context/';
import { CenteredDiv, ScrollTo, SectionHeading, Subtext, Title } from '../Atoms';
import { ShowList } from './ShowList';

export const NoShowContent = () => {
    return (
        <Fragment>
            <Title>{'No scheduled Breaks shows'}</Title>
            <Subtext>{'please check back soon'}</Subtext>
        </Fragment>
    );
};

export const LiveShows = () => {
    const {
        archivedShows = []// ,
        // upcomingShows = []
    } = useAppDataContext() || {};

    // const showListings = upcomingShows.length > 0
    //     ? (<ShowList shows={archivedShows} />)
    //     : NoShowContent();

    return (
        <section>
            <CenteredDiv>
                <ScrollTo id={'shows'}>{' '}</ScrollTo>
                <SectionHeading>Live Shows</SectionHeading>
                <ShowList shows={archivedShows} />
            </CenteredDiv>
        </section>
    );
};
