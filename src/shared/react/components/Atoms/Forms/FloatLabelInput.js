import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NOOP, COLORS } from '../';

const FLOAT_FORM_STYLES = `
    width: 100%;
    margin: 0 0 .5rem;
    padding: .5rem;
    box-sizing: border-box;
    transition: position .3s linear;
    z-index: 2;

    &:required {
        box-shadow: none;
    }
    &:invalid {
        box-shadow: none;
    }

    &:not(:placeholder-shown) + label {
        top: -.65rem;
        left: 0;
        opacity: .7;
    }
`;

const ErrorMessage = styled.div`
    display: block;
    box-sizing: border-box;
    position: relative;
    font-size: .75rem;
    width: 100%;
    top: -1rem;
    left: 0;
    background-color: ${COLORS.FORM.ERROR_BACKGROUND};
    color: ${COLORS.FORM.ERROR_TEXT};
    border-bottom: 1px solid ${COLORS.FORM.ERROR_BORDER};
    border-left: 1px solid ${COLORS.FORM.ERROR_BORDER};
    border-right: 1px solid ${COLORS.FORM.ERROR_BORDER};
    opacity: 1;
`;

const FloatLabelInputWrapper = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    padding: .5rem 0;
    margin: 0 0 .5rem;
`;

const FormInput = styled.input`
    ${FLOAT_FORM_STYLES}

    border: 1px solid ${({ valid }) => valid
        ? `${COLORS.FORM.BORDER}`
        : `${COLORS.FORM.ERROR_BORDER}`
    };
`;

const FormTextarea = styled.textarea`
    ${FLOAT_FORM_STYLES}

    border: 1px solid ${({ valid }) => valid
        ? `${COLORS.FORM.BORDER}`
        : `${COLORS.FORM.ERROR_BORDER}`
    };
`;

const FloatLabel = styled.label`
    position: absolute;
    opacity: 0;
    top: calc(50% - .55rem);
    left: .5rem;
    transition: all .3s ease;
    z-index: 1;
    font-size: .8rem;
`;

class FloatLabelInput extends Component {
    constructor (props) {
        super(props);
        this._input = React.createRef();
        this.focusInput = this.focusInput.bind(this);
    }

    focusInput () {
        if (this._input.current) {
            this._input.current.focus();
        }
    }

    render () {
        const {
            error,
            inputElement,
            label,
            name,
            onBlur,
            onChange,
            placeholder,
            type,
            valid,
            value,
            ...rest
        } = this.props;

        const input = inputElement === 'input'
            ? (
                <FormInput
                    ref={this._input}
                    name={name}
                    placeholder={placeholder}
                    type={type}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    valid={valid}
                />
            )
            : (
                <FormTextarea
                    ref={this._input}
                    name={name}
                    placeholder={placeholder}
                    type={type}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    valid={valid}
                />
            )

        const showError = !valid && error;

        return (
            <FloatLabelInputWrapper {...rest}>
                {input}
                <FloatLabel
                    htmlFor={name}
                    onClick={this.focusInput}>
                    {label}
                </FloatLabel>
                {showError && (
                    <ErrorMessage className={'error-msg'}>
                        {error}
                    </ErrorMessage>
                )}
            </FloatLabelInputWrapper>
        );
    }
};

FloatLabelInput.propTypes = {
    error: PropTypes.string,
    inputElement: PropTypes.oneOf(['input', 'textarea']),
    valid: PropTypes.bool,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string
};

FloatLabelInput.defaultProps = {
    error: undefined,
    inputElement: 'input',
    valid: true,
    onBlur: NOOP,
    onChange: NOOP,
    placeholder: undefined,
    type: 'text',
    value: ''
};

export default FloatLabelInput;
