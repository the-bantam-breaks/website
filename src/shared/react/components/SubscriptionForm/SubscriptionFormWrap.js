import React from 'react';
import styled from 'styled-components';
import SubscriptionForm from './SubscriptionForm';

const Subscriptions = styled.div`
    position: absolute;
    box-sizing: border-box;
    bottom: 0;
    right: 0;
    z-index: 1;
    margin: .25rem 0;
    width: 100%;
`;

const SubscriptionFormWrap = () => {
    return (
        <Subscriptions>
            <SubscriptionForm />
        </Subscriptions>
    );
};

export default SubscriptionFormWrap;
