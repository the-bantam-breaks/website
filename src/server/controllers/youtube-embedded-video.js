import { getRandom } from './util';

const YOUTUBE_EMBEDDED_VIDEOS = [{
    embedUrl: 'https://www.youtube.com/embed/7VwMmzRoRXo',
    name: 'Dizzy Live @ Smith\'s Olde Bar'
}, {
    embedUrl: 'https://www.youtube.com/embed/Dbf2FHLuDlQ',
    name: 'Busted Highway @ Mad Life'
}];

export const youtubeEmbeddedVideo = () => getRandom(YOUTUBE_EMBEDDED_VIDEOS);
