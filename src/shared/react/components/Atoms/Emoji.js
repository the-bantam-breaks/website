import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const EmojiSpan = styled.span`
    margin: 0 .25rem;
`;

const Emoji = (props) => (
    <EmojiSpan
        className='emoji'
        role='img'
        aria-label={props.label ? props.label : ''}
        aria-hidden={props.label ? 'false' : 'true'}
    >
        {props.symbol}
    </EmojiSpan>
);

Emoji.propTypes = {
    label: PropTypes.string,
    symbol: PropTypes.string.isRequired
};

Emoji.defaultProps = {
    label: undefined
};

export default Emoji;
