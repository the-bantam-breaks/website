import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { BREAKPOINTS, COLORS, Center, ExternalLink, FlexRowGrid } from '../Atoms';

const BOX_SHADOW = '1px 1px 3px rgba(0,0,0,0.75)';
const CARD_SIDE = '30vw';

const AlbumCover = styled.div`
    position: relative;
    width: ${CARD_SIDE};
    height: ${CARD_SIDE};
    display: flex;
    background-color: ${COLORS.IMG.AUTOFILL};
`;

const AlbumImg = styled.img`
    display: block;
    margin: auto 0;
    width: ${CARD_SIDE};
    max-height: ${CARD_SIDE};
    box-shadow: ${BOX_SHADOW};
`;

const AlbumLinksWrap = styled.div`
    font-size: .9rem;
    font-style: italic;
    color: ${COLORS.TEXT.TERTIARY};
    > div {
        margin: .5rem 0 1.5rem;
    }
`;

const AlbumTitle = styled.h4`
    margin: 1rem 0 .25rem;
`;

const AlbumYear = styled.p`
    margin: 0;
`;

const FlexRowGridAlbums = styled(FlexRowGrid)`
    padding: 0;
`;

const GridBox = styled.div`
    position: relative;
    margin: 5vw;
    max-width: ${CARD_SIDE};

    @media (max-width: ${BREAKPOINTS.MOBILE}) {
        margin: 2.5vw;
    }
`;

const VendorImg = styled.img`
    width: 100%;
`;

const Vendor = styled.div`
    display: flex;
    width: 28%;
    margin: .5rem 2%;
`;

class Album extends Component {
    getLinks () {
        const { urls = [] } = this.props;
        if (urls.length === 0) {
            return 'Coming Soon';
        }

        return urls.map(({ vendorIcon, text, title, ...rest }, index) => {
            const linkDisplay = vendorIcon
                ? (<VendorImg title={title} src={vendorIcon} />)
                : text;

            return (
                <Vendor key={`album_${index}`}>
                    <ExternalLink
                        title={title}
                        {...rest}
                        text={linkDisplay}
                    />
                </Vendor>
            );
        });
    }

    render () {
        const {
            className,
            imgUrl,
            length,
            title,
            year,
            urls = []
        } = this.props;
        const titleWithType = `${title} ${length ? `(${length})` : ''}`;

        return (
            <GridBox>
                <AlbumCover onClick={this.flipper} key='front'>
                    <AlbumImg
                        alt={titleWithType}
                        className={className}
                        src={imgUrl}
                    />
                </AlbumCover>

                <Center>
                    <AlbumTitle>{titleWithType}</AlbumTitle>
                    <AlbumYear>{year}</AlbumYear>
                </Center>

                <AlbumLinksWrap>
                    <Center>
                        {urls.length
                            ? (<div>{'Buy or Listen!'}</div>)
                            : null
                        }
                        <FlexRowGridAlbums>
                            {this.getLinks()}
                        </FlexRowGridAlbums>
                    </Center>
                </AlbumLinksWrap>

            </GridBox>
        );
    }
}

Album.propTypes = {
    // day: PropTypes.string,
    imgUrl: PropTypes.string.isRequired,
    // length: PropTypes.number,
    // month: PropTypes.string,
    title: PropTypes.string.isRequired,
    // trackCount: PropTypes.number,
    year: PropTypes.string,
    urls: PropTypes.arrayOf(PropTypes.shape({
        href: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    })),
    vendorIcon: PropTypes.string
};

Album.defaultProps = {
    // day: undefined,
    // length: undefined,
    // month: undefined,
    // trackCount: undefined
    urls: [],
    vendorIcon: undefined
};

export default Album;
