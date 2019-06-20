import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { SITE_COLORS } from './constants';

const StyledA = styled.a`
    margin: 0 .25rem;
    color: ${({ type }) => SITE_COLORS.ACTIONS[type]};
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const ExternalLink = (props) => {
    const { className, href, alt, text, type } = props;

    return (
        <StyledA alt={alt} className={className} href="href" type={type}>{text}</StyledA>
    );
};

ExternalLink.propTypes = {
    alt: PropTypes.string.isRequired,
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
