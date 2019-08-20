import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useAppData } from '../context/';
import { SubscriptionForm } from './SubscriptionForm';
import { BREAKPOINTS, Logo } from './Atoms';

const HERO_ASPECT_RATIO = 1080 / 1920;

const OffscreenH = styled.h1`
    position: absolute;
    top: 0;
    left: -9999px;
`;

const HeroH = styled.h2`
    font-size: 3.5rem;
    margin: 2rem 0 .5rem;

    @media (max-width: ${BREAKPOINTS.MOBILE}) {
        font-size: 1.2rem;
        margin: .75rem 0 .25rem;
    }
`;

const HeroSubH = styled.h4`
    font-size: 1.5rem;
    margin: 0;

    @media (max-width: ${BREAKPOINTS.MOBILE}) {
        font-size: .7rem;
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
    height: calc((100vw * ${HERO_ASPECT_RATIO}));
    background-color: #f30;
    overflow: hidden;
    background-color: #000;
    background-opacity: .5;
    border-bottom: 1px solid #FFFFFF;

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
    const { className, heading, showForm, subHeading } = props;

    return (
      <HeroBackdrop className={className}>
          {showForm && (<SubscriptionForm />)}
          <img className="hero"
               alt={'The Bantam Breaks'}
               src={hero} />
          <div className="overlay backdrop" />
          <div className="overlay">
          <HeroText>
              <OffscreenH>{'The Bantam Breaks'}</OffscreenH>
              <Logo width={'30vw'} color='light' />
              <HeroH>{heading}</HeroH>
              <HeroSubH>{subHeading}</HeroSubH>
          </HeroText>
          </div>
      </HeroBackdrop>
    );
};

Hero.propTypes = {
    className: PropTypes.string,
    heading: PropTypes.string,
    subHeading: PropTypes.string,
    showForm: PropTypes.bool
};

Hero.defaultProps = {
    heading: 'The Red EP',
    showForm: true,
    subHeading: 'Coming September 1st, 2019'
};
