import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { COLORS } from './constants';

const StyledA = styled.a`
    margin: 0 .25rem;
    color: ${({ type }) => COLORS.ACTIONS[type]};
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const ExternalLink = (props) => {
    const { className, href, text, title, type } = props;

    return (
        <StyledA
            className={className}
            title={title}
            href={href}
            type={type}>
            {text}
        </StyledA>
    );
};

ExternalLink.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['PRIMARY', 'SECONDARY', 'TERTIARY'])
};

ExternalLink.defaultProps = {
    className: undefined,
    type: 'PRIMARY'
};

export default ExternalLink;
