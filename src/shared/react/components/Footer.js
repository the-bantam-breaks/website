import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Center, COLORS, ExternalLink } from './Atoms';

const FooterText = styled.span`
    font-size: .8rem;
    color: ${COLORS.TEXT.TERTIARY};
`;

const FooterWrap = styled.section`
    width: 100%;
    margin: 2rem 0;
`;

export const Footer = (props) => {
    const year = new Date().getFullYear();

    const { showDesignCredit } = props;

    const designCredit = showDesignCredit
        ? (
            <Fragment>
                {'Site design by '}
                <ExternalLink
                    href={'http://byjad.com/'}
                    title={'Joshua A. Davies'}
                    text={'Joshua A. Davies'} />
            </Fragment>
        ) : null;

    return (
        <FooterWrap>
            <Center>
                <FooterText>
                    {`© ${year} The Bantam Breaks.  All rights reserved.`}
                    {designCredit}
                </FooterText>
            </Center>
        </FooterWrap>
    );
};

Footer.propTypes = {
    showDesignCredit: PropTypes.bool
};

Footer.defaultProps = {
    showDesignCredit: false
};
