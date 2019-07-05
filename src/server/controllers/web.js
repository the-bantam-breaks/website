import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';
import { App, Layout } from '../../shared/react';
import { getShowsArchive, getUpcomingShows } from './show';
import { instagram } from './instagram';
import { albums } from './albums';
import { bandMembers } from './band-members';
import { appImages } from './app-images';
import { youtubeEmbeddedVideo } from './youtube-embedded-video';

const getStyleTags = (children) => {
    const sheet = new ServerStyleSheet();
    renderToStaticMarkup(
        sheet.collectStyles(children)
    );
    return sheet.getStyleTags();
};

const getAppMarkup = (ctx) => (
    <StaticRouter location={ctx.request.url}>
        <App />
    </StaticRouter>
);

const getLayoutMarkup = ({
    appData,
    ctx,
    styleTags
}) => {
    return (
        <Layout appData={appData} title={'The Bantam Breaks'} styleTags={styleTags}>
            {styleTags && getAppMarkup(ctx)}
        </Layout>
    );
};

export const web = {
    index: () => async (ctx) => {
        // let shows = getUpcomingShows();

        const appData = {
            albums: albums(),
            appImages: appImages(),
            archivedShows: getShowsArchive(),
            bandMembers: bandMembers(),
            instagramData: await instagram.feed(),
            // showData: await showEntity.findUpcoming(),
            upcomingShows: getUpcomingShows(),
            youtubeEmbeddedVideo: youtubeEmbeddedVideo()
        };
        const styleTags = getStyleTags(getLayoutMarkup({
            appData,
            ctx
        }));
        ctx.body = `
        <!DOCTYPE html>
        ${renderToString(
            getLayoutMarkup({
                appData,
                ctx,
                styleTags
            })
        )}`
        ;
    }
};
