import React from 'react';
import styled from 'styled-components';
import { useAppData } from '../context/';
import { BREAKPOINTS, Logo } from './Atoms';

const OffscreenH = styled.h1`
    position: absolute;
    top: 0;
    left: -9999px;
`;

const AlbumH = styled.h2`
    font-size: 3rem;
    margin-bottom: 1rem;

    @media (max-width: ${BREAKPOINTS.MOBILE}) {
        font-size: 1.75rem;
        margin-bottom: .5rem;
    }
`;

const AlbumSubH = styled.h4`
    font-size: 1.75rem;
    margin: 0;

    @media (max-width: ${BREAKPOINTS.MOBILE}) {
        font-size: 1rem;
        margin-bottom: .25rem;
    }
`;

const HeroText = styled.div`
    position: relative;
    display: block;
    width: 100%;
    text-align: center;
    color: #ffffff;
    margin: auto auto;
`;

const HeroBackdrop = styled.section`
    position: relative;
    width: 100vw;
    min-height: 100px;
    background-color: #f30;
    overflow: hidden;
    background-color: #000;
    background-opacity: .5;

    img.hero {
        width: 100%;
    }

    .backdrop {
        background-color: #000;
        opacity: .5;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
    }
`;

export const Hero = (props) => {
    const { hero } = useAppData('appImages') || {};
    if (!hero) {
        return null;
    }

    return (
      <HeroBackdrop className={props.className}>
          <img className="hero"
               alt={'The Bantam Breaks'}
               src={hero} />
          <div className="overlay backdrop" />
          <div className="overlay">
          <HeroText>
              <OffscreenH>{'The Bantam Breaks'}</OffscreenH>
              <Logo width={'30vw'} color='light' />
              <AlbumH>{'The Red EP'}</AlbumH>
              <AlbumSubH>{'Coming September 2019'}</AlbumSubH>
          </HeroText>
          </div>
      </HeroBackdrop>
    );
};
