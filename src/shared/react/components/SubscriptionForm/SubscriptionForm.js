import React from 'react';
import styled from 'styled-components';
import 'whatwg-fetch';
import { PhoneNumberUtil, PhoneNumberFormat as PNF } from 'google-libphonenumber';
import Switch from 'react-switch';
import { ActionButton, BREAKPOINTS, COLORS, EMAIL_REGEX, FlexRowGridRight, FloatLabelInput } from '../Atoms';

const phoneUtil = PhoneNumberUtil.getInstance();

const DEFAULT_FORM_STATE = {
    switchIsEmail: true,
    email: {
        value: '',
        isValid: undefined
    },
    phone: {
        value: '',
        isValid: undefined
    },
    isValid: undefined,
    successMessage: undefined
};

const EmailIcon = styled.img`
    position: relative;
    height: 11px;
    left: 1px;
    bottom: 3px;
`;

const SmsIcon = styled.img`
    position: relative;
    height: 10px;
    bottom: 4px;
    left: 5px;
`;

const FormWrap = styled.div`
    width: 98vw;

    @media (max-width: ${BREAKPOINTS.MOBILE}) {
        width: 96vw;
    }

    .react-switch-bg {
        padding: 1px 2px;
        border: 1px solid ${COLORS.ACTIONS.TERTIARY_TEXT};
    }
    .react-switch-handle {
        top: 3px !important;
        left: ${({ switchIsEmail }) => switchIsEmail ? '5px' : '2px'} !important;
    }
`;

const InputsWrap = styled.div`
    width: 35%;
    @media (max-width: ${BREAKPOINTS.MOBILE}) {
        width: 50%;
    }
`;

// TODO - remove display: none if we figure out doing sms
const SwitchWrap = styled.div`
    display: none;
    padding-top: 7px;
    width: auto;
    @media (max-width: ${BREAKPOINTS.MOBILE}) {
        width: 11%;
    }
`;

const SubscribeButtonWrap = styled.div`
    max-width: 20%;
    @media (max-width: ${BREAKPOINTS.MOBILE}) {
        width: 23%;
    }
`;

const InputVisibilityWrap = styled.div`
    display: ${({ show }) => show ? 'block' : 'none'};
`;

const SubscribeActionButton = styled(ActionButton)`
    height: 20px;
    font-size: .7rem;
`;

const SubscriptionInput = styled(FloatLabelInput)`
    padding: 0;
    margin: 0;
    box-shadow: none;
    border: none;
    width: 98%;

    input {
        background-color: rgba(0, 0, 0, .1);
        border: 1px solid transparent;
        color: #FFFFFF;
        box-shadow: none;
        width: 100%;
        padding: .5rem;
        margin: 0;
        font-weight: bold;
        font-size: 1.1rem;

        &::placeholder {
            font-weight: bold;
            font-size: 1.1rem;
            color: #C0C0C0;
        }

        @media (max-width: ${BREAKPOINTS.MOBILE}) {
            padding: .25rem;
        }

        &:focus {
           border: 1px solid transparent;
           border-bottom: 1px solid #C0C0C0;
           border-left: 1px solid #C0C0C0;
           outline-color: transparent;
        }

        &:not(:placeholder-shown) + label {
            left: -40px;
            top: 5px;
            opacity: .9;
        }

        border-left: 1px solid ${({ valid }) => valid
            ? 'transparent'
            : `${COLORS.FORM.ERROR_BORDER}`
        };

        border-bottom: 1px solid ${({ valid }) => valid
            ? '#C0C0C0'
            : `${COLORS.FORM.ERROR_BORDER}`
        };
    }

    .error-msg {
        top: 0;
        background: none;
        border: none;
    }

    label {
        color: #FFF;
    }
`;

const SuccessMessage = styled.div`
    width: 96vw;
    background-color: ${COLORS.FORM.TERTIARY_BACKGROUND};
    color: ${COLORS.FORM.TERTIARY_TEXT};
    font-size: .9rem;
    text-align: right;
`;

const SuccessSpan = styled.span`
    border-bottom: 1px solid ${COLORS.FORM.TERTIARY_BORDER};
    margin-right: .5rem;
`;

class SubscriptionForm extends React.Component {
    constructor (props) {
        super(props);

        this.state = DEFAULT_FORM_STATE;

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleToggleIsEmail = this.handleToggleIsEmail.bind(this);
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

    handleChangePhone (e) {
        const { value } = e.currentTarget;
        const prevPhone = this.state.phone;
        this.setState({
            phone: {
                ...prevPhone,
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

    handleToggleIsEmail (e) {
        const prevIsEmail = this.state.switchIsEmail;
        this.setState({
            switchIsEmail: !prevIsEmail
        });
    }

    resetForm () {
        this.setState(DEFAULT_FORM_STATE);
    }

    async submitForm (e) {
        e.preventDefault();
        e.stopPropagation();

        const {
            switchIsEmail,
            isValid,
            email: { value: email },
            phone: { value: phone }
        } = this.state;

        if (!isValid) {
            return;
        }

        const formData = JSON.stringify({
            phone: switchIsEmail ? undefined : phone,
            email: switchIsEmail ? email : undefined
        });

        let responseMessage;
        await window.fetch(`/api/subscribe/${switchIsEmail ? 'email' : 'sms'}`, {
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
                    <SuccessSpan>
                        {'Thank You for subscribing to updates from The Bantam Breaks\'!'}
                    </SuccessSpan>
                )
            });
        }
    }

    renderSuccess () {
        const { successMessage } = this.state;

        return (
            <FormWrap>
                <FlexRowGridRight>
                    <SuccessMessage>
                        {successMessage}
                        <ActionButton
                            type='button'
                            look={'TERTIARY'}
                            onClick={this.resetForm}>
                            Reset Form
                        </ActionButton>
                    </SuccessMessage>
                </FlexRowGridRight>
            </FormWrap>
        );
    }

    render () {
        const {
            switchIsEmail,
            email: { value: email, isValid: isEmailValid },
            phone: { value: phone, isValid: isPhoneValid },
            successMessage
        } = this.state;

        if (successMessage) {
            return this.renderSuccess();
        }

        return (
            <form className='react-form' onSubmit={this.submitForm}>
                <FormWrap switchIsEmail={switchIsEmail}>
                    <FlexRowGridRight>
                        <InputsWrap>
                            <InputVisibilityWrap show={switchIsEmail}>
                                <SubscriptionInput
                                    name='email'
                                    label='email'
                                    placeholder='email'
                                    type='text'
                                    onChange={this.handleChangeEmail}
                                    onBlur={this.validateRequiredFields}
                                    value={email}
                                    valid={isEmailValid !== false}
                                    error={'email is invalid'}
                                />
                            </InputVisibilityWrap>
                            <InputVisibilityWrap show={!switchIsEmail}>
                                <SubscriptionInput
                                    name='phone'
                                    label='sms #'
                                    placeholder='phone (sms)'
                                    type='tel'
                                    onChange={this.handleChangePhone}
                                    onBlur={this.validateRequiredFields}
                                    value={phone}
                                    valid={isPhoneValid !== false}
                                    error={'phone # is invalid'}
                                />
                            </InputVisibilityWrap>
                        </InputsWrap>
                        <SwitchWrap>
                            <Switch
                                checked={switchIsEmail}
                                onChange={this.handleToggleIsEmail}
                                onClick={this.handleToggleIsEmail}
                                offColor={'#000'}
                                offHandleColor={COLORS.ACTIONS.TERTIARY_TEXT}
                                onHandleColor={COLORS.ACTIONS.TERTIARY_TEXT}
                                onColor={'#000'}
                                checkedIcon={
                                    <EmailIcon
                                        alt={'subscribe to email updates'}
                                        src={'/img/icons/email.png'} />
                                }
                                uncheckedIcon={
                                    <SmsIcon
                                        alt={'subscribe to sms message updates'}
                                        src={'/img/icons/sms.png'} />
                                }
                                height={16}
                                width={34}
                            />
                        </SwitchWrap>
                        <SubscribeButtonWrap>
                            <SubscribeActionButton
                                type='button'
                                look={'TERTIARY'}
                                onClick={this.submitForm}>
                                Subscribe
                            </SubscribeActionButton>
                        </SubscribeButtonWrap>
                    </FlexRowGridRight>
                </FormWrap>
            </form>
        );
    }

    validatePhone (phoneNum) {
        if (!phoneNum) {
            return false;
        }

        let valid;

        try {
            const number = phoneUtil.parseAndKeepRawInput(phoneNum, 'US');
            valid = phoneUtil.isValidNumber(number);
        } catch (e) {
            valid = false;
        }
        return valid;
    }

    validateRequiredFields () {
        const { switchIsEmail, email = {}, phone = {} } = this.state;

        const emailValid = email.value.length > 0
            ? EMAIL_REGEX.test(email.value)
            : undefined;

        let phoneValid;
        let formattedPhone;
        if (!switchIsEmail) {
            const number = phoneUtil.parseAndKeepRawInput(phone.value, 'US');
            formattedPhone = phoneUtil.format(number, PNF.NATIONAL);
            phoneValid = this.validatePhone(formattedPhone);
        }

        this.setState({
            email: {
                ...email,
                isValid: emailValid
            },
            phone: {
                value: formattedPhone,
                isValid: phoneValid
            },
            isValid: (switchIsEmail && emailValid) || (!switchIsEmail && phoneValid)
        });
    }
}

export default SubscriptionForm;
