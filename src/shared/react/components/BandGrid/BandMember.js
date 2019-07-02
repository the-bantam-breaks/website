import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { BREAKPOINTS, Center } from '../Atoms';

const BOX_SHADOW = '1px 1px 3px rgba(0,0,0,0.75)';
const IMG_SIDE = '14vw';
const MOBILE_IMG_SIDE = '40vw';

const BandMemberWrap = styled.div`
    position: relative;
    width: ${IMG_SIDE};
    height: ${IMG_SIDE};
    display: flex;

    @media (max-width: ${BREAKPOINTS.MOBILE}) {
        width: ${MOBILE_IMG_SIDE};
        height: ${MOBILE_IMG_SIDE};
    }
`;

const BandMemberImg = styled.img`
    display: block;
    margin: auto 0;
    width: ${IMG_SIDE};
    max-height: ${IMG_SIDE};
    box-shadow: ${BOX_SHADOW};
    border-radius: 50%;
`;

const GridBox = styled.div`
    position: relative;
    margin: 0 4vw;
    max-width: ${IMG_SIDE};

    @media (max-width: ${BREAKPOINTS.MOBILE}) {
        margin: 2.5vw;
    }
`;

const MemberName = styled.h4`
    margin: 1rem 0 .25rem;
    font-size: 1.25rem;

    @media (max-width: ${BREAKPOINTS.MOBILE}) {
        font-size: .9rem;
    }
`;

const MemberInstruments = styled.p`
    margin: 0;
    font-size: .8rem;

    @media (max-width: ${BREAKPOINTS.MOBILE}) {
        font-size: .65rem;
    }
`;

class BandMember extends Component {
    render () {
        const {
            className,
            imgUrl,
            name,
            instruments
        } = this.props;

        return (
            <GridBox>
                <BandMemberWrap>
                    <BandMemberImg
                        alt={name}
                        className={className}
                        src={imgUrl}
                    />
                </BandMemberWrap>

                <Center>
                    <MemberName>{name}</MemberName>
                    <MemberInstruments>{instruments.join(' • ')}</MemberInstruments>
                </Center>
            </GridBox>
        );
    }
}

BandMember.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    instruments: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default BandMember;
