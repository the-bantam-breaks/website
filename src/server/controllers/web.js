import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import styled, { ServerStyleSheet } from 'styled-components';
import { App, Layout } from '../../shared/react';
import { AppDataProvider } from '../../shared/react/context/'
import { show as showEntity } from '../../rethinkdb';
import { instagram } from './instagram';
import { appImages } from './app-images';

const getStyleTags = (children) => {
    const sheet = new ServerStyleSheet();
    renderToStaticMarkup(
        sheet.collectStyles(children)
    );
    return sheet.getStyleTags();
};

const Heading = styled.h1`
    color: #ff3300;
`;

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
        <AppDataProvider {...appData}>
            <Layout title={'The Bantam Breaks'} styleTags={styleTags}>
                {styleTags && getAppMarkup(ctx)}
            </Layout>
        </AppDataProvider>
    );
};

export const web = {
    index: () => async (ctx) => {
        const appData = {
            appImages: appImages(),
            instagramData: await instagram.feed(),
            showData: await showEntity.findUpcoming()
        };
        const styleTags = getStyleTags(getLayoutMarkup({
            appData,
            ctx
        }));
        ctx.body = renderToString(
            getLayoutMarkup({
                appData,
                ctx,
                styleTags
            })
        );
    }
};
