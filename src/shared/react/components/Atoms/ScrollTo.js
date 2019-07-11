import styled from 'styled-components';
import { BREAKPOINTS } from './constants';

export const ScrollTo = styled.div`
    content: ' ';
    display: block;
    padding-top: 60px;

    @media (max-width: ${BREAKPOINTS.MOBILE}) {
        padding-top: 60px;
    }
`;
