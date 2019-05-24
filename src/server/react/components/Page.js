import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ children, className, title }) => (
    <html lang="en">
        <head>
            <title>{title}</title>
            <link rel="stylesheet" href="/css/style.css"/>
        </head>
        <body className={className}>
            {children}
            <script src="/js/client.js"/>
        </body>
    </html>
);

Page.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    title: PropTypes.string
};

Page.defaultProps = {
    className: undefined,
    title: 'UserHash Consolidator'
};

export default Page;
