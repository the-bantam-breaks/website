import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { ActionLink, COLORS, ExternalLink, FlexRowLeft, PrimaryProse, SubtextProse } from '../Atoms';

const DateWrap = styled.div`
    position: relative;
    width: 18%;
    margin: 0 1%;
    display: block;
    text-align: left;
`;

const ExternalShowLink = styled(ExternalLink)`
    color: black;
    text-decoration: underline;
    font-style: italic;
`;

const ShowLi = styled.li`
    display: block;
    width: 100%;
    border-top: 1px solid ${COLORS.PAGE.BORDER};
    padding: .5rem 0;
`;

const VenueWrap = styled.div`
    position: relative;
    width: 48%;
    margin: 0 1%;
    display: block;
    text-align: left;
`;

const TwentyWrapRight = styled.div`
    position: relative;
    width: 18%;
    margin: 0 1%;
    display: block;
    text-align: right;
`;

const TenWrap = styled.div`
    position: relative;
    width: 8%;
    margin: 0 1%;
    display: block;
    text-align: left;
`;

const primary = (content) => content
    ? (
        <PrimaryProse>
           {content}
        </PrimaryProse>
    )
    : null;

const sub = (text) => text
    ? (<SubtextProse>{text}</SubtextProse>)
    : null;

const ticketLink = (ticketUrl, isArchived) => ticketUrl
    ? (
        <ActionLink
            type={isArchived ? 'DISABLED' : 'PRIMARY'}
            href={ticketUrl}
            title={'Get Tickets'}
            text={'Get Tickets'}
        />
    )
    : null;

const venueNameOrLink = (venueName, venueUrl) => venueUrl
    ? (
        <ExternalShowLink
            href={venueUrl}
            title={venueUrl}
            text={venueName}
        />
    )
    : venueName;

export const ShowListItem = (props) => {
    const {
        age,
        city,
        className,
        cover,
        day,
        isArchived,
        month,
        state,
        ticketUrl,
        time,
        venueAddress,
        venueName,
        venueUrl,
        year
    } = props;

    const address = `${venueAddress ? `${venueAddress} • ` : ''}${city}, ${state}`;

    return (
        <ShowLi className={`${className}`}>
            <FlexRowLeft>
                <DateWrap>
                    {primary(`${month} ${day}${year ? `, ${year}` : ''}`)}
                    {sub(time)}
                </DateWrap>
                <VenueWrap>
                    {primary(venueNameOrLink(venueName, venueUrl))}
                    {sub(address)}
                </VenueWrap>
                <TenWrap>
                    {primary(cover)}
                    {sub(age)}
                </TenWrap>
                <TwentyWrapRight>
                    {ticketLink(ticketUrl, isArchived)}
                </TwentyWrapRight>
            </FlexRowLeft>
        </ShowLi>
    );
};

ShowListItem.propTypes = {
    age: PropTypes.string,
    city: PropTypes.string.isRequired,
    country: PropTypes.string,
    cover: PropTypes.string,
    day: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    ticketUrl: PropTypes.string,
    time: PropTypes.string,
    venueAddress: PropTypes.string,
    venueName: PropTypes.string.isRequired,
    venueUrl: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
};

ShowListItem.defaultProps = {
    age: undefined,
    country: undefined,
    cover: undefined,
    ticketUrl: undefined,
    time: undefined,
    venueAddress: undefined
};
