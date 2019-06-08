import got from 'got';

// TODO - Garrett set TOKEN in env vars
const ENV_INSTA_TOKEN = '';
const INSTAGRAM_API_URL = `https://api.instagram.com/v1/users/3018065801/media/recent/?access_token=${ENV_INSTA_TOKEN}`;

export const instagram = {
    feed: async () => {
        let feed;
        try {
            ({ body: feed } = await got(
                INSTAGRAM_API_URL,
                {
                    method: 'get'
                }
            ));
        } catch (e) {
            console.log('instagram fetch failed', e);
        }

        console.log('feed------>\n', JSON.stringify( feed, null, 2));
        try {
            return typeof feed === 'string' ? JSON.parse(feed) : feed;
        } catch (e) {
            throw new Error('Could not parse instagram response', e);
        }
    }
};
