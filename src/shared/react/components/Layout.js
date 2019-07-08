import React from 'react';
import PropTypes from 'prop-types';
import serialize from 'serialize-javascript';
import styled from 'styled-components';
import { GlobalStyles } from './GlobalStyles';

const Main = styled.main`
    display: block;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    padding: 0;
`;

const StyledBody = styled.body`
    margin: 0;
    padding: 0;
    min-height: 300vh;
    overflow-y: scroll;
`;

const StyledHtml = styled.html`
    margin: 0;
    padding: 0;
`;

const Layout = (props) => {
    const {
        appData = {},
        children,
        className,
        styleTags,
        title
    } = props;

    // preloading the hero image and logo with css should prevent
    // a flash of unstyled content while the client-side react parses the bootstrapped appData
    const { appImages = {} } = appData;
    const { hero, logo = {} } = appImages;
    const logoBackgrounds = Object.values(logo).map((url) => `background-image: url(${url});`);

    return (
        <StyledHtml lang="en">
            <head>
                <title>{title}</title>
                <meta httpEquiv='Content-Type' content='text/html;charset=utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta name='description' content={'The Bantam Breaks @ TheBantamBreaks.com - \
                      The official band website for the Atlanta rock band The Bantam Breaks'} />
                <meta name='keywords' content={'Bantam Breaks, Bantam, Breaks, Atlanta Rock Music, \
                      Americana, www.thebantambreaks.com, bantambreaks, bantam breaks music, \
                      bantam breaks band, thebantambreaks.com, Atlanta Band, Joshua Broughton, \
                      Scotland Stephenson, Michael Garret, Eric Morton, Kenneth Williams'} />
                <script dangerouslySetInnerHTML={{
                    __html: `window.__INITIAL_DATA__ = ${serialize(appData)}`
                }}/>
                <style dangerouslySetInnerHTML={{
                    __html: `
                        #preload {
                            width: 0px;
                            height: 0px;
                            display: inline;
                            background-image: url(${hero});
                            ${logoBackgrounds.join('\n')}
                        }
                    `
                }}/>
                <style dangerouslySetInnerHTML={{
                    __html: GlobalStyles
                }}/>
                <style dangerouslySetInnerHTML={{
                    __html: styleTags
                }}/>
            </head>
            <StyledBody className={className}>
                <Main>
                    <div id='preload' />
                    {children}
                </Main>
                <script src="/bundle.js" />
            </StyledBody>
        </StyledHtml>
    );
};

Layout.propTypes = {
    appData: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string,
    styleTags: PropTypes.node,
    subtitle: PropTypes.string,
    title: PropTypes.string
};

Layout.defaultProps = {
    appData: {},
    children: null,
    className: '',
    styleTags: undefined,
    subtitle: undefined,
    title: undefined
};

export default Layout;
