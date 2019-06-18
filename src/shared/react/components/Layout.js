import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { GlobalStyles } from './GlobalStyles';

const Main = styled.main`
    display: block;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    padding: 0;
`;

const StylesDiv = styled.div`
    position: absolute;
    left: -9999px;
    height: 0;
`;

const StyledBody = styled.body`
    margin: 0;
    padding: 0;
`;

const StyledHtml = styled.html`
    margin: 0;
    padding: 0;
`;


const Layout = (props) => {
    const {
        children,
        className,
        styleTags,
        title
    } = props;
    return (
        <StyledHtml lang="en">
            <head>
                <title>{title}</title>
                <meta httpEquiv="Content-Type" content="text/html;charset=utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content={"The Bantam Breaks @ TheBantamBreaks.com - \
                      The official band website for the Atlanta rock band The Bantam Breaks"} />
                <meta name="keywords" content={"Bantam Breaks, Bantam, Breaks, Atlanta Rock Music, \
                      Americana, www.thebantambreaks.com, bantambreaks, bantam breaks music, \
                      bantam breaks band, thebantambreaks.com, Atlanta Band, Joshua Broughton, \
                      Scotland Stephenson, Michael Garret, Eric Morton, Kenneth Williams"} />
            </head>
            <StyledBody className={className}>
                <GlobalStyles />
                <StylesDiv dangerouslySetInnerHTML={{ __html: styleTags }}/>
                <Main>
                    {children}
                </Main>
                <script src="/bundle.js"/>
            </StyledBody>
        </StyledHtml>
    );
};

Layout.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    styleTags: PropTypes.node,
    subtitle: PropTypes.string,
    title: PropTypes.string
};

Layout.defaultProps = {
    children: null,
    className: '',
    styleTags: undefined,
    subtitle: undefined,
    title: undefined
};

export default Layout;
