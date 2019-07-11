import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS, COLORS } from './constants';

const ButtonishA = styled.a`
    display: inline-block;
    margin: 0 .25rem;
    border: 1px solid ${({ look }) => COLORS.ACTIONS[`${look}_BORDER`]};
    background-color: ${({ look }) => COLORS.ACTIONS[`${look}`]};
    font-size: .9rem;
    color: ${({ look }) => COLORS.ACTIONS[`${look}_TEXT`]};
    text-decoration: none;
    padding: .2rem .75rem;
    border-radius: 25px;
    text-decoration: none;

    @media (max-width: ${BREAKPOINTS.MOBILE}) {
        font-size: .65rem;
        padding: 0 .4rem;
        border-radius: 15px;
    }

    a:hover {
        text-decoration: none;
    }

    &:active {
        color: ${({ look }) => COLORS.ACTIONS[`${look}_TEXT`]};
        text-decoration: none;
    }

    &:visited {
        color: ${({ look }) => COLORS.ACTIONS[`${look}_TEXT`]};
    }
`;

const ActionLink = (props) => {
    const { children, className, href, look, target, text, title } = props;

    return (
        <ButtonishA
            disabled={look === 'DISABLED'}
            className={className}
            target={target}
            title={title}
            href={href}
            look={look}>
            {text}
            {children}
        </ButtonishA>
    );
};

ActionLink.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
    href: PropTypes.string.isRequired,
    target: PropTypes.oneOf(['_blank']),
    text: PropTypes.node,
    look: PropTypes.oneOf(['DISABLED', 'PRIMARY', 'SECONDARY'])
};

ActionLink.defaultProps = {
    children: undefined,
    className: undefined,
    target: undefined,
    text: undefined,
    look: 'PRIMARY'
};

export default ActionLink;
