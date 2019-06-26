import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';
import { App, Layout } from '../../shared/react';
import { show as showEntity } from '../../rethinkdb';
import { instagram } from './instagram';
import { albums } from './albums';
import { appImages } from './app-images';

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
        const appData = {
            albums: albums(),
            appImages: appImages(),
            instagramData: await instagram.feed(),
            showData: await showEntity.findUpcoming()
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
