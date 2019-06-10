import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Page from './Page';

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
        content,
        title
    } = props;

    return (
        <Page title={title}>
            <Main>
                <Content>
                    {content}
                </Content>
            </Main>
        </Page>
    );
};

Layout.propTypes = {
    content: PropTypes.node.isRequired,
    subtitle: PropTypes.string,
    title: PropTypes.string
};

Layout.defaultProps = {
    subtitle: undefined,
    title: undefined
};

export default Layout;
