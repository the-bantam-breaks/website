const PRIMARY_LINK = '#D52526';
const DISABLED_LINK = '#E5E5E5';
const TERTIARY_TEXT_COLOR = '#808080';

export const NOOP = () => {};

export const COLORS = {
    LINKS: {
        ACTIVE: '#000',
        A: PRIMARY_LINK,
        VISITED: '#F07171'
    },
    ACTIONS: {
        PRIMARY: PRIMARY_LINK,
        PRIMARY_BORDER: PRIMARY_LINK,
        PRIMARY_TEXT: '#FFFFFF',
        DISABLED: DISABLED_LINK,
        DISABLED_BORDER: DISABLED_LINK,
        DISABLED_TEXT: '#FFFFFF',
        SECONDARY: '#FFFFFF',
        SECONDARY_BORDER: '#000000',
        SECONDARY_TEXT: '#000000'
    },
    TEXT: {
        TERTIARY: TERTIARY_TEXT_COLOR
    },
    IMG: {
        AUTOFILL: '#ABABAB'
    },
    BACKGROUNDS: {
        DEFAULT: '#FFFFFF',
        ALTERNATING_SECTION: '#F0F0F0'
    },
    FORM: {
        BORDER: '#333333',
        FOCUS_BORDER: '#000000',
        ERROR_TEXT: '#FF0000',
        ERROR_BACKGROUND: '#FFF8F5',
        ERROR_BORDER: '#ff0000'
    },
    PAGE: {
        BORDER: '#e5e5e5'
    }
};

export const BREAKPOINTS = {
    MOBILE: '768px'
};
