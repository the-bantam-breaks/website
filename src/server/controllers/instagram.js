import got from 'got';

/* eslint-disable no-undef */
const INSTAGRAM_API_URL = `https://api.instagram.com/v1/users/${process.env.ENV_INSTAGRAM_USER_ID}/media/recent/?access_token=${process.env.ENV_INSTAGRAM_TOKEN}`;
/* eslint-enable no-undef */

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

        try {
            return typeof feed === 'string' ? JSON.parse(feed) : feed;
        } catch (e) {
            throw new Error('Could not parse instagram response', e);
        }
    }
};
