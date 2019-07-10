import React from 'react';
import { CenteredDiv, SectionHeading } from '../Atoms';
import BookingForm from './BookingForm';

const BookingFormSection = () => {
    return (
        <section>
            <CenteredDiv>
                <SectionHeading>Contact For Booking</SectionHeading>
            </CenteredDiv>
            <BookingForm />
        </section>
    );
};

export default BookingFormSection;
