import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';
import { App, Layout } from '../../shared/react';
import { AppDataProvider } from '../../shared/react/context/'
import { show as showEntity } from '../../rethinkdb';
import { instagram } from './instagram';
import styled from 'styled-components';

const getStyleTags = (children) => {
    const sheet = new ServerStyleSheet();
    const html = renderToStaticMarkup(
        sheet.collectStyles(children)
    );
    return sheet.getStyleTags();
    // return html.replace('</body>', `${styleTags}</body>`);
};

const Heading = styled.h1`
    color: #ff3300;
`;

// const renderReactApp = ({
//     content
// } = {}) => {
//     return renderReactWithStyledComponents(
//         <Layout content={content}/>
//     );
// };

const getMarkup = (ctx) => (
    <StaticRouter location={ctx.request.url}>
        <App id="app" />
    </StaticRouter>
);

const getAppMarkup = ({
    appData,
    ctx,
    styleTags
}) => {
    return (
        <AppDataProvider {...appData}>
            <Layout title={"The Bantam Breaks"} styleTags={styleTags}>
                <Heading>Hello World</Heading>
                {getMarkup(ctx)}
            </Layout>
        </AppDataProvider>
    );
};

export const web = {
    index: () => async (ctx) => {
        const appData = {
            instagramData: await instagram.feed(),
            showData: await showEntity.findUpcoming()
        };
        // const showData = await showEntity.findUpcoming();
        // const instagramData = await instagram.feed();
        const styleTags = getStyleTags(getAppMarkup({
            appData,
            ctx
        }));
        // ctx.body = renderReactApp({
        //     content: (
        //         <Fragment>
        //             <h1>
        //                 Hello World
        //             </h1>
        //             <pre>
        //                 {`${JSON.stringify(showData, null, 2)}`}
        //             </pre>
        //             <pre>
        //                 {`${JSON.stringify(instagramData, null, 2)}`}
        //             </pre>
        //         </Fragment>
        //     )
        // });
        ctx.body = renderToString(
            getAppMarkup({
                appData,
                ctx,
                styleTags
            })
        );
    }
};
