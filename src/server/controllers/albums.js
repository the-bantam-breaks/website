const ALBUM_IMAGE_DIR = 'img/albums/';
const VENDOR_ICON_DIR = 'img/vendor-icons/';

const VENDOR_ICONS = {
    AMAZON: 'amazon.png',
    BANDCAMP: 'bandcamp.png',
    CD_BABY: 'cdbaby.png',
    GOOGLE_PLAY: 'googleplay.png',
    IHEART_RADIO: 'iheartradio.png',
    ITUNES: 'itunes.png',
    PANDORA: 'pandora.png',
    SOUNDCLOUD: 'soundcloud.png',
    SPOTIFY: 'spotify.png'
};

const ALBUM_IMAGES = {
    the_bantam_breaks: 'the_bantam_breaks_600.png',
    red: 'red_600.png'
};

export const albums = () => [{
    day: 1,
    imgUrl: `${ALBUM_IMAGE_DIR}${ALBUM_IMAGES.red}`,
    length: 'EP',
    month: 'Sept.',
    title: 'Red',
    trackCount: 6,
    year: '2019',
    urls: []
}, {
    day: 1,
    imgUrl: `${ALBUM_IMAGE_DIR}${ALBUM_IMAGES.the_bantam_breaks}`,
    length: 'EP',
    month: 'Nov.',
    title: 'The Bantam Breaks',
    trackCount: 5,
    year: '2017',
    urls: [
        {
            href: 'https://www.amazon.com/Bantam-Breaks/dp/B075VKXM8N',
            text: 'Amazon Music',
            title: 'The Bantam Breaks on Amazon Music',
            vendorIcon: `${VENDOR_ICON_DIR}${VENDOR_ICONS.AMAZON}`
        },
        {
            href: 'https://thebantambreaks.bandcamp.com',
            text: 'Bandcamp',
            title: 'The Bantam Breaks on Bandcamp',
            vendorIcon: `${VENDOR_ICON_DIR}${VENDOR_ICONS.BANDCAMP}`
        },
        {
            href: 'http://store.cdbaby.com/cd/thebantambreaks',
            text: 'CD Baby',
            title: 'The Bantam Breaks on CD Baby',
            vendorIcon: `${VENDOR_ICON_DIR}${VENDOR_ICONS.CD_BABY}`
        },
        {
            href: 'https://play.google.com/store/music/album/The_Bantam_Breaks_The_Bantam_Breaks?id=Bonhv72xtlgrizdwakc75kersxi&hl=en',
            text: 'Google Play',
            title: 'The Bantam Breaks on Google Play',
            vendorIcon: `${VENDOR_ICON_DIR}${VENDOR_ICONS.GOOGLE_PLAY}`
        },
        {
            href: 'https://www.iheart.com/artist/the-bantam-breaks-31807165/',
            text: 'iHeart Radio',
            title: 'The Bantam Breaks on iHeart Radio',
            vendorIcon: `${VENDOR_ICON_DIR}${VENDOR_ICONS.IHEART_RADIO}`
        },
        {
            href: 'https://itunes.apple.com/us/album/the-bantam-breaks-ep/id1281368082',
            text: 'iTunes',
            title: 'The Bantam Breaks on iTunes',
            vendorIcon: `${VENDOR_ICON_DIR}${VENDOR_ICONS.ITUNES}`
        },
        {
            href: 'https://www.pandora.com/artist/bantam-breaks',
            text: 'Pandora',
            title: 'The Bantam Breaks on Pandora',
            vendorIcon: `${VENDOR_ICON_DIR}${VENDOR_ICONS.PANDORA}`
        },
        {
            href: 'https://soundcloud.com/the-bantam-breaks',
            text: 'Soundcloud',
            title: 'The Bantam Breaks on Soundcloud',
            vendorIcon: `${VENDOR_ICON_DIR}${VENDOR_ICONS.SOUNDCLOUD}`
        },
        {
            href: 'https://open.spotify.com/album/73XWueoyBoF1iZJMDmvBUp',
            text: 'Spotify',
            title: 'The Bantam Breaks on Spotify',
            vendorIcon: `${VENDOR_ICON_DIR}${VENDOR_ICONS.SPOTIFY}`
        }
    ]
}];
