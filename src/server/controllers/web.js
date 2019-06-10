import React, { Fragment } from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import {
    Layout
} from '../react';
import {
    show as showEntity
} from '../../rethinkdb';
import { instagram } from './instagram';

const renderReactWithStyledComponents = (children) => {
    const sheet = new ServerStyleSheet();
    const html = ReactDOMServer.renderToStaticMarkup(
        sheet.collectStyles(children)
    );
    const styleTags = sheet.getStyleTags();

    return html.replace('</body>', `${styleTags}</body>`);
};

const renderReactApp = ({
    content
} = {}) => {
    return renderReactWithStyledComponents(
        <Layout content={content}/>
    );
};

export const web = {
    index: () => async (ctx) => {
        const showData = await showEntity.findUpcoming();
        const instagramData = await instagram.feed();
        ctx.body = renderReactApp({
            content: (
                <Fragment>
                    <h1>
                        Hello World
                    </h1>
                    <pre>
                        {`${JSON.stringify(showData, null, 2)}`}
                    </pre>
                    <pre>
                        {`${JSON.stringify(instagramData, null, 2)}`}
                    </pre>
                </Fragment>
            )
        });
    }
};
