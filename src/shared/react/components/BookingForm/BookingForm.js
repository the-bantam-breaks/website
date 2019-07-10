import React from 'react';
import styled from 'styled-components';
import 'whatwg-fetch';
import { ActionButton, BREAKPOINTS, COLORS, FlexRowGrid } from '../Atoms';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const BookingInput = styled.input`
    width: 49%;
    margin: .5rem 0;
    padding: .5rem;
    box-sizing: border-box;
    border: 1px solid ${({ invalid }) => invalid === false
        ? `${COLORS.FORM.BORDER}`
        : `${COLORS.FORM.ERROR_BORDER}`
    };

    &:nth-child(odd) {
        margin-right: 1%;
    }

    &:nth-child(even) {
        margin-left: 1%;
    }

    @media (max-width: ${BREAKPOINTS.MOBILE}) {
        width: 100%;
        margin: .5rem 0;

        &:nth-child(odd) {
            margin-right: 0;
        }

        &:nth-child(even) {
            margin-left: 0;
        }
    }
`;

const BookingTextarea = styled.textarea`
    width: 100%;
    margin: .5rem 0;
    padding: .5rem;
    box-sizing: border-box;
    border: 1px solid ${({ invalid }) => invalid === false
        ? `${COLORS.FORM.BORDER}`
        : `${COLORS.FORM.ERROR_BORDER}`
    };
`;

const ErrorDiv = styled.div`
    width: 100%;
    padding: .25rem 0;
    background-color: ${COLORS.FORM.ERROR_BACKGROUND};
    color: ${COLORS.FORM.ERROR_TEXT};
    border: 1px solid ${COLORS.FORM.ERROR_BORDER};

    > ul {
        margin: 0;
    }
`;

const FormWrap = styled.div`
    width: 60vw;
    margin: 0 20vw;
    box-sizing: border-box;

    @media (max-width: ${BREAKPOINTS.MOBILE}) {
        width: 94vw;
        margin: 0 3vw;
    }
`;

class BookingForm extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            name: {
                value: ''
            },
            email: {
                value: '',
                isValid: undefined
            },
            message: {
                value: '',
                isValid: undefined
            },
            isValid: undefined,
            isInvalidated: false
        };

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.renderErrorMessages = this.renderErrorMessages.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.validateRequiredFields = this.validateRequiredFields.bind(this);
    }

    handleChangeEmail (e) {
        const { value } = e.currentTarget;
        const prevEmail = this.state.email;
        this.setState({
            email: {
                ...prevEmail,
                value
            }
        });
    }

    handleChangeMessage (e) {
        const { value } = e.currentTarget;
        const prevMessage = this.state.message;
        this.setState({
            message: {
                ...prevMessage,
                value
            }
        });
    }

    handleChangeName (e) {
        const { value } = e.currentTarget;
        this.setState({
            name: {
                value
            }
        });
    }

    submitForm (e) {
        e.preventDefault();
        e.stopPropagation();

        const {
            isValid,
            email: { value: email },
            message: { value: message },
            name: { value: name }
        } = this.state;

        if (!isValid) {
            this.setState({
                isInvalidated: true
            });
            return;
        }

        const formData = JSON.stringify({ name, email, message });
        window.fetch('/api/booking_inquiry', {
            method: 'POST',
            cors: 'same-origin',
            body: formData,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            console.log('response------>\n', response);
            this.setState({
                successMessage: response
            });
        })

        this.setState({
            isInvalidated: false
        });
    }

    validateRequiredFields () {
        const { name = {}, email = {}, message = {} } = this.state;
        const emailValid = email.value.length > 0
            ? EMAIL_REGEX.test(email.value)
            : undefined;
        const messageValid = message.value.length > 2;

        this.setState({
            name,
            email: {
                ...email,
                isValid: emailValid
            },
            message: {
                ...message,
                isValid: messageValid
            },
            isValid: emailValid && messageValid
        });
    }

    renderErrorMessages () {
        const {
            email: { value: email, isValid: emailValid },
            message: { value: message, isValid: messageValid },
            isInvalidated,
            isValid
        } = this.state;

        const showEmail = isInvalidated && (email.length > 0) && !emailValid;
        const showMessage = isInvalidated && (message.length > 0) && !messageValid;

        if (!isInvalidated || isValid === true) {
            return null;
        }

        return (
            <FlexRowGrid>
                <ErrorDiv>
                    <ul>
                    {showEmail && (<li>Email is not valid</li>)}
                    {showMessage && (<li>Message is required</li>)}
                    </ul>
                </ErrorDiv>
            </FlexRowGrid>
        )
    }

    render () {
        const {
            email: { value: email, isValid: isEmailValid },
            message: { value: message, isValid: isMessageValid },
            name: { value: name },
            isValid
        } = this.state;

        return (
            <form className='react-form' onSubmit={this.handleSubmit}>
                <FormWrap>
                    <FlexRowGrid>
                        <BookingInput
                            id='formName'
                            name='name'
                            placeholder={'name'}
                            type='text'
                            onChange={this.handleChangeName}
                            onBlur={this.validateRequiredFields}
                            value={name}
                            invalid={false}
                        />
                        <BookingInput
                            id='email'
                            name='email'
                            type='email'
                            placeholder={'email'}
                            required
                            onChange={this.handleChangeEmail}
                            onBlur={this.validateRequiredFields}
                            value={email}
                            invalid={isEmailValid === false}
                        />
                    </FlexRowGrid>

                    <FlexRowGrid>
                        <BookingTextarea
                            id='message'
                            name='message'
                            placeholder={'message'}
                            required
                            onChange={this.handleChangeMessage}
                            onBlur={this.validateRequiredFields}
                            value={message}
                            invalid={isMessageValid === false}>
                        </BookingTextarea>
                    </FlexRowGrid>

                    {!isValid && this.renderErrorMessages()}

                    <FlexRowGrid>
                        <ActionButton
                            type='button'
                            look={'PRIMARY'}
                            onClick={this.submitForm}>
                            Send Email
                        </ActionButton>
                    </FlexRowGrid>
                </FormWrap>
            </form>
        );
    }
}

export default BookingForm;
