import React from 'react';
import { CenteredDiv, SectionHeading, ScrollTo } from '../Atoms';
import BookingForm from './BookingForm';

const BookingFormSection = () => {
    return (
        <section>
            <CenteredDiv>
                <ScrollTo id={'contact'} />
                <SectionHeading>Contact For Booking</SectionHeading>
            </CenteredDiv>
            <BookingForm />
        </section>
    );
};

export default BookingFormSection;
