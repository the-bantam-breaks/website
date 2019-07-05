import React from 'react';
import PropTypes from 'prop-types';
import { ShowListItem } from './ShowListItem';
import styled from 'styled-components';

const ShowUl = styled.ul`
    margin: 0 auto;
    padding: 0;
    width: 85vw;
    list-style-type: none;
`;

export const ShowList = ({ className, shows }) => {
    const showItems = shows.map((show, index) => {
        return (
            <ShowListItem
                key={`show_${index}`}
                {...show} />
        );
    });

    return (
        <ShowUl className={className}>
            {showItems}
        </ShowUl>
    );
};

ShowList.propTypes = {
    shows: PropTypes.arrayOf(PropTypes.object).isRequired
};
