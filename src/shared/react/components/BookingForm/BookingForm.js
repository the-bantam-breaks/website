import React from 'react';
import styled from 'styled-components';
import 'isomorphic-fetch';
import { ActionButton, BREAKPOINTS, COLORS, EMAIL_REGEX, FlexRowGrid, FloatLabelInput } from '../Atoms';

const DEFAULT_FORM_STATE = {
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
    successMessage: undefined
};

const BookingInput = styled(FloatLabelInput)`
    width: 49%;

    &:nth-child(odd) {
        margin-right: 1%;
    }

    &:nth-child(even) {
        margin-left: 1%;
    }

    @media (max-width: ${BREAKPOINTS.MOBILE}) {
        width: 100%;
        margin: 0 0 .25rem;

        &:nth-child(odd) {
            margin-right: 0;
        }

        &:nth-child(even) {
            margin-left: 0;
        }
    }
`;

const FormWrap = styled.div`
    width: 60vw;
    margin: 0 20vw 1rem;
    box-sizing: border-box;

    @media (max-width: ${BREAKPOINTS.MOBILE}) {
        width: 94vw;
        margin: 0 3vw;
    }
`;

const SuccessMessage = styled(FormWrap)`
    background-color: ${COLORS.FORM.SUCCESS_BACKGROUND};
    color: ${COLORS.FORM.SUCCESS_TEXT};
    border: 1px solid ${COLORS.FORM.SUCCESS_BORDER};
    font-size: .9rem;
    padding: 1rem;
`;

class BookingForm extends React.Component {
    constructor (props) {
        super(props);

        this.state = DEFAULT_FORM_STATE;

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.resetForm = this.resetForm.bind(this);
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

    resetForm () {
        this.setState(DEFAULT_FORM_STATE);
    }

    async submitForm (e) {
        e.preventDefault();
        e.stopPropagation();

        const {
            isValid,
            email: { value: email },
            message: { value: message },
            name: { value: name }
        } = this.state;

        if (!isValid) {
            return;
        }

        const formData = JSON.stringify({ name, email, message });

        let responseMessage;
        await window.fetch('/api/booking_inquiry', {
            method: 'POST',
            cors: 'same-origin',
            body: formData,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(async (response) => {
            const { message } = await response.json();
            responseMessage = message;
        });

        if (responseMessage) {
            this.setState({
                successMessage: (
                    <div>
                        {'Thank You!'}<br />
                        {'Your booking inquiry is on it\'s way'}<br />
                        {'The Breaks\' booking team will respond ASAP'}
                    </div>
                )
            });
        }
    }

    renderSuccess () {
        const { successMessage } = this.state;

        return (
            <FlexRowGrid>
                <SuccessMessage>
                    {successMessage}
                    <FlexRowGrid>
                        <ActionButton
                            type='button'
                            look={'SECONDARY'}
                            onClick={this.resetForm}>
                            Reset Form
                        </ActionButton>
                    </FlexRowGrid>
                </SuccessMessage>
            </FlexRowGrid>
        );
    }

    render () {
        const {
            email: { value: email, isValid: isEmailValid },
            message: { value: message, isValid: isMessageValid },
            name: { value: name },
            successMessage
        } = this.state;

        if (successMessage) {
            return this.renderSuccess();
        }

        return (
            <form className='react-form' onSubmit={this.handleSubmit}>
                <FormWrap>
                    <FlexRowGrid>
                        <BookingInput
                            name='name'
                            label='name'
                            placeholder='name'
                            type='text'
                            onChange={this.handleChangeName}
                            onBlur={this.validateRequiredFields}
                            value={name}
                            valid={true}
                        />
                        <BookingInput
                            error="Email address is not valid"
                            name='email'
                            type='email'
                            label='email'
                            placeholder='email'
                            required
                            onChange={this.handleChangeEmail}
                            onBlur={this.validateRequiredFields}
                            value={email}
                            valid={isEmailValid}
                        />
                    </FlexRowGrid>

                    <FlexRowGrid>
                        <FloatLabelInput
                            error='Message is required'
                            inputElement='textarea'
                            label='message'
                            name='message'
                            placeholder={'message'}
                            required
                            onChange={this.handleChangeMessage}
                            onBlur={this.validateRequiredFields}
                            value={message}
                            valid={isMessageValid} />
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

    validateRequiredFields () {
        const { name = {}, email = {}, message = {} } = this.state;
        const emailValid = email.value.length > 0
            ? EMAIL_REGEX.test(email.value)
            : undefined;
        const messageValid = message.value.length > 0
            ? message.value.length > 2
            : undefined;

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
}

export default BookingForm;
