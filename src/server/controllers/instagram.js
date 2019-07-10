import fetch from 'isomorphic-fetch';

/* eslint-disable no-undef */
const INSTAGRAM_API_URL = `https://api.instagram.com/v1/users/${process.env.ENV_INSTAGRAM_USER_ID}/media/recent/?access_token=${process.env.ENV_INSTAGRAM_TOKEN}`;
/* eslint-enable no-undef */

export const instagram = {
    feed: async () => {
        let instaResponse;
        try {
            instaResponse = await fetch(
                INSTAGRAM_API_URL,
                {
                    method: 'get'
                }
            );
        } catch (e) {
            console.log('instagram fetch failed', e);
        }

        try {
            return await instaResponse.json();
        } catch (e) {
            throw new Error('There was a problem with the instagram photo feed response', e);
        }
    }
};
