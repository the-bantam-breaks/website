import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Main = styled.main`
    display: block;
    box-sizing: border-box;
    position: relative;
    padding: .5rem 0;
`;

const Content = styled.div`
    display: block;
    box-sizing: border-box;
    max-width: 1600px;
    margin: 0 auto;
    padding: 1rem 1rem;
`;

const Layout = (props) => {
    const {
        children,
        className,
        styleTags,
        title
    } = props;
    return (
        <html lang="en">
            <head>
                <title>{title}</title>
            </head>
            <body className={className}>
                <Main>
                    <Content>
                        {children}
                    </Content>
                </Main>
                <script src="/bundle.js"/>
                <div dangerouslySetInnerHTML={{__html: styleTags}}/>
            </body>
        </html>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    styleTags: PropTypes.node,
    subtitle: PropTypes.string,
    title: PropTypes.string
};

Layout.defaultProps = {
    className: '',
    styleTags: undefined,
    subtitle: undefined,
    title: undefined
};

export default Layout;
