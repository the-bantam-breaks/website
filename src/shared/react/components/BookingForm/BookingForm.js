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
    border: 1px solid ${COLORS.FORM.BORDER};

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
    border: 1px solid ${COLORS.FORM.BORDER};
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
        })

        this.setState({
            isInvalidated: false
        });
    }

    validateRequiredFields () {
        const { name = {}, email = {}, message = {} } = this.state;
        const emailValid = EMAIL_REGEX.test(email.value);
        const messageValid = message.value.length > 2;

        console.log('VALUE------>\n', {
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
            isInvalidated
        } = this.state;

        const showEmail = isInvalidated && (email.length > 0) && !emailValid;
        const showMessage = isInvalidated && (message.length > 0) && !messageValid;
        return (
            <div>
                {showEmail && (<p>Email is not valid</p>)}
                {showMessage && (<p>Message is required</p>)}
            </div>
        )
    }

    render () {
        const {
            email: { value: email, isValid: emailValid },
            message: { value: message, isValid: messageValid },
            name: { value: name },
            isValid
        } = this.state;

        return (
            <form className='react-form' onSubmit={this.handleSubmit}>
                {!isValid && this.renderErrorMessages()}
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
                            error={emailValid}
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
                            error={messageValid}>
                        </BookingTextarea>
                    </FlexRowGrid>

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
