import React from 'react';
import styled from 'styled-components';
import { useAppData } from '../context/';
import { Logo } from './Atoms';

const AlbumH = styled.h1`
    font-size: 7vh;
    margin-bottom: 1vh;
`;

const AlbumSubH = styled.h4`
    font-size: 2.5vh;
    margin: 0;
`

const HeroText = styled.div`
    position: relative;
    display: block;
    width: 70vw;
    height: 50vh;
    text-align: center;
    color: #ffffff;
    margin: 15vh auto 0;
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
                  <Logo width={'30vw'} color='light' />
                  <AlbumH>{'The Red EP'}</AlbumH>
                  <AlbumSubH>{'Coming September 2019'}</AlbumSubH>
              </HeroText>
          </div>
      </HeroBackdrop>
    );
};
