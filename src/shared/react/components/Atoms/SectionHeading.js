import styled from 'styled-components';
import { BREAKPOINTS } from './';

export const SectionHeading = styled.h4`
    font-size: 2.5rem;
    margin: .25rem 0;

    @media (max-width: ${BREAKPOINTS.MOBILE}) {
        font-size: 1.75rem;
    }
`;
