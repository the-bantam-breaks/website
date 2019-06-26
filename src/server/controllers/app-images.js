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

const BAND_IMAGE_DIR = 'img/band/';

const BAND_ERIC_IMAGES = [
    'eric_bw_mic_600.jpg',
    'eric_chips_600.jpg',
    'eric_madlife_1_600.jpg',
    'eric_red_600.jpg'
];

const BAND_GARRETT_IMAGES = [
    'garret_madlife_1_600.jpg',
    'garrett_bw_madlife_600.jpg',
    'garrett_rick_600.jpg'
];

const BAND_JOSH_IMAGES = [
    'josh_madlife_1_600.jpg',
    'josh_madlife_2_600.jpg',
    'josh_orange_glasses_600.jpg'
];

const BAND_SCOTLAND_IMAGES = [
    'scotland_madlife_1_600.jpg',
    'scotland_madlife_2_600.jpg',
    'scotland_noble_smiths_600.jpg'
];

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const appImages = () => ({
    band: {
        eric: `${BAND_IMAGE_DIR}${getRandom(BAND_ERIC_IMAGES)}`,
        garrett: `${BAND_IMAGE_DIR}${getRandom(BAND_GARRETT_IMAGES)}`,
        josh: `${BAND_IMAGE_DIR}${getRandom(BAND_JOSH_IMAGES)}`,
        scotland: `${BAND_IMAGE_DIR}${getRandom(BAND_SCOTLAND_IMAGES)}`
    },
    hero: `${HERO_DIR}${getRandom(HERO_IMAGES)}`,
    logo: {
        clear_chicken: `${LOGO_DIR}${LOGOS.clear_chicken}`,
        text_logo_dark: `${LOGO_DIR}${LOGOS.text_logo_dark}`,
        text_logo_light: `${LOGO_DIR}${LOGOS.text_logo_light}`,
        white_chicken: `${LOGO_DIR}${LOGOS.white_chicken}`
    }
});
