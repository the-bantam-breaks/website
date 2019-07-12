import { getRandom } from '../util';

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

export const bandMembers = () => ({
    eric: {
        name: 'Eric Williams',
        instruments: ['Guitar', 'Vocals'],
        imgUrl: `${BAND_IMAGE_DIR}${getRandom(BAND_ERIC_IMAGES)}`
    },
    garrett: {
        name: 'Michael Garrett',
        instruments: ['Bass'],
        imgUrl: `${BAND_IMAGE_DIR}${getRandom(BAND_GARRETT_IMAGES)}`
    },
    josh: {
        name: 'Joshua Broughton',
        instruments: ['Guitar', 'Vocals'],
        imgUrl: `${BAND_IMAGE_DIR}${getRandom(BAND_JOSH_IMAGES)}`
    },
    scotland: {
        name: 'Scotland Stephenson',
        instruments: ['Drums', 'Backing Vocals'],
        imgUrl: `${BAND_IMAGE_DIR}${getRandom(BAND_SCOTLAND_IMAGES)}`
    }
});
