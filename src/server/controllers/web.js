import React, { Fragment } from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';
import {
    // Pre-render all components to get styled-component stylesheets
    AllStyledComponentsForCssPreRender,
    App,
    Layout
} from '../../shared/react';
import {
    albums,
    appImages,
    bandMembers,
    getShowsArchive,
    getUpcomingShows,
    youtubeEmbeddedVideo
} from './static-data';
// import { instagram } from './instagram';

const getStyleTags = (children) => {
    const sheet = new ServerStyleSheet();
    renderToStaticMarkup(
        sheet.collectStyles((
            <Fragment>
                {children}
                <AllStyledComponentsForCssPreRender />
            </Fragment>
        ))
    );
    // build all styles from style-components on Home page as well
    // as global styles for server-side no-js render (for SEO)
    return `${sheet.getStyleTags()}`;
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
        const appData = {
            albums: albums(),
            appImages: appImages(),
            archivedShows: getShowsArchive(),
            bandMembers: bandMembers(),
            // instagramData: await instagram.feed(),
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
