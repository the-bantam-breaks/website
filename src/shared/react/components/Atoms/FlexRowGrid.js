import styled from 'styled-components';

export const FlexRowGrid = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    width: 100%;
    padding: 0;
`;

export const FlexRowLeft = styled(FlexRowGrid)`
    justify-content: left;
`;
