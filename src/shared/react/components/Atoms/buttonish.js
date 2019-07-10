import { COLORS } from './constants';

export const buttonish = `
    display: inline-block;
    margin: 0 .25rem;
    border: 1px solid ${({ look }) => COLORS.ACTIONS[`${look}_BORDER`]};
    background-color: ${({ look }) => COLORS.ACTIONS[`${look}`]};
    font-size: .9rem;
    color: ${({ look }) => COLORS.ACTIONS[`${look}_TEXT`]};
    text-decoration: none;
    padding: .2rem .75rem;
    border-radius: 25px;
    text-decoration: none;
    text-align: center;
`;
