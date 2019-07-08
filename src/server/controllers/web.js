import React, { Fragment } from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';
import {
    // Pre-render all components to get styled-component stylesheets
    AlbumGrid,
    App,
    BandGrid,
    ContactForm,
    Footer,
    GlobalStyles,
    Hero,
    InstaGrid,
    Layout,
    LiveShowsStyles,
    NavStyles,
    VideoSection
} from '../../shared/react';
import { getShowsArchive, getUpcomingShows } from './show';
import { instagram } from './instagram';
import { albums } from './albums';
import { bandMembers } from './band-members';
import { appImages } from './app-images';
import { youtubeEmbeddedVideo } from './youtube-embedded-video';

const getStyleTags = (children) => {
    const sheet = new ServerStyleSheet();
    renderToStaticMarkup(
        sheet.collectStyles((
            <Fragment>
                {children}
                <Hero />
                <NavStyles />
                <AlbumGrid />
                <LiveShowsStyles />
                <InstaGrid />
                <VideoSection />
                <BandGrid />
                <ContactForm />
                <Footer showDesignCredit={true} />
            </Fragment>
        ))
    );
    // build all styles from style-components on Home page as well
    // as global styles for server-side no-js render (for SEO)
    return `<style>${GlobalStyles}</style>${sheet.getStyleTags()}`;
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
            instagramData: await instagram.feed(),
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
