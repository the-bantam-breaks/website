import React from 'react';
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

    return (
        <FooterWrap>
            <Center>
                <FooterText>
                    {`© ${year} The Bantam Breaks.  All rights reserved. Site design by `}
                    <ExternalLink
                        href={'http://byjad.com/'}
                        title={'Joshua A. Davies'}
                        text={'Joshua A. Davies'} />
                </FooterText>
            </Center>
        </FooterWrap>
    );
};
