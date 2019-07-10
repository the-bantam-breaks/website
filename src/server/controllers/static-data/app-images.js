import { getRandom } from '../util';

const LOGO_DIR = 'img/';

const LOGOS = {
    clear_chicken: 'breaks_chicken_byjad_transparent_600.png',
    text_logo_light: 'bantam_breaks_tertiary_logo_light_414_184.png',
    text_logo_dark: 'bantam_breaks_tertiary_logo_414_184.png',
    white_chicken: 'breaks_chicken_byjad_white_600.jpg'
};

const HERO_DIR = 'img/hero/';

const HERO_IMAGES = [
    'breaks_gear_smiths_1920_1080.jpg',
    'breaks_nophest_bw_1920_1080.jpg',
    'breaks_nophest_max_black_1920_1080.jpg',
    'breaks_smiths_live_1920_1080.jpg',
    'eddies_breaks_1920_1080.jpg',
    'smiths_gear_wide_1920_1080.jpg'
];

export const appImages = () => ({
    hero: `${HERO_DIR}${getRandom(HERO_IMAGES)}`,
    logo: {
        clear_chicken: `${LOGO_DIR}${LOGOS.clear_chicken}`,
        text_logo_dark: `${LOGO_DIR}${LOGOS.text_logo_dark}`,
        text_logo_light: `${LOGO_DIR}${LOGOS.text_logo_light}`,
        white_chicken: `${LOGO_DIR}${LOGOS.white_chicken}`
    }
});
