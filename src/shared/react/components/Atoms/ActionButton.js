import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { buttonish } from './buttonish';
import { COLORS } from './constants';

const ButtonishButton = styled.button`
    ${buttonish}
    border: none;
    cursor: pointer;
    background-color: ${({ look }) => COLORS.ACTIONS[`${look}`]};
    color: ${({ look }) => COLORS.ACTIONS[`${look}_TEXT`]};
`;

const ActionButton = (props) => {
    const { children, className, look, onClick, type } = props;

    return (
        <ButtonishButton
            disabled={look === 'DISABLED'}
            className={className}
            onClick={onClick}
            look={look}
            type={type}>
            {children}
        </ButtonishButton>
    );
};

ActionButton.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
    // formenctype: PropTypes.oneOf(['text/plain', 'multipart/form-data', 'application/x-www-form-urlencoded']),
    // formmethod: PropTypes.oneOf(['GET', 'POST']),
    look: PropTypes.oneOf(['DISABLED', 'PRIMARY', 'SECONDARY']),
    type: PropTypes.oneOf(['button', 'reset', 'submit'])
};

ActionButton.defaultProps = {
    children: undefined,
    className: undefined,
    // formenctype: 'application/x-www-form-urlencoded',
    // formmethod: undefined,
    onClick: () => {},
    look: 'PRIMARY',
    type: 'button'
};

export default ActionButton;
