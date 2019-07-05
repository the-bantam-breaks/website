import styled from 'styled-components';
import { BREAKPOINTS, COLORS } from './constants';

export const Title = styled.div`
    margin: .25rem 0;
    font-size: 1.1rem;

    @media (max-width: ${BREAKPOINTS.MOBILE}) {
        font-size: .85rem;
    }
`;

export const Subtext = styled.div`
    margin: .25rem 0;
    font-size: .85rem;
    color: ${COLORS.TEXT.TERTIARY};
    font-style: italic;

    @media (max-width: ${BREAKPOINTS.MOBILE}) {
        font-size: .60rem;
    }
`;

export const PrimaryProse = styled.div`
    font-size: .85rem;
    font-weight: bold;

    @media (max-width: ${BREAKPOINTS.MOBILE}) {
        font-size: .65rem;
    }
`;

export const SubtextProse = styled(PrimaryProse)`
    color: ${COLORS.TEXT.TERTIARY};
    font-weight: normal;
`;
