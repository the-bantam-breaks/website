import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { ExternalLink, SectionHeading } from '../Atoms';
import InstaPic from './InstaPic';
import { useAppDataContext } from '../../context/';

const CenteredDiv = styled.div`
    text-align: center;
    margin-bottom: 2vw;
`;

const PhotoGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    max-height: 100vh;
    padding: 0 2vw;
`;

export const InstaGrid = (props) => {
    const { instagramData } = useAppDataContext() || {};

    if (!instagramData) {
        return null;
    }

    const { data = [] } = instagramData;

    const images = data.map(({
        caption: { text: caption },
        comments: { count: commentCount },
        link,
        likes: { count: likeCount },
        images: {
            standard_resolution: { url: src }
        },
    }, index) => {
        return (
            <InstaPic key={`feed_pic_${index}`}
                      link={link}
                      src={src}
                      title={caption}
            />
        );
    });

    return (
        <section>
          <CenteredDiv>
              <SectionHeading>Photos</SectionHeading>
              Follow us on Instagram at<br />
              <ExternalLink
                  alt='Follow The Bantam Breaks on Instagram'
                  href='https://www.instagram.com/thebantambreaks/'
                  text={'@theBantamBreaks'}
              />
          </CenteredDiv>
          <PhotoGrid>
              {images}
          </PhotoGrid>
        </section>
    );
};
