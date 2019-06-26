import React from 'react';
import { CenteredDiv, ExternalLink, FlexRowGrid, ScrollTo, SectionHeading } from '../Atoms';
import InstaPic from './InstaPic';
import { useAppDataContext } from '../../context/';

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
        }
    }, index) => {
        return (
            <InstaPic key={`feed_pic_${index}`}
                      caption={caption}
                      commentCount={commentCount}
                      likeCount={likeCount}
                      link={link}
                      src={src}
            />
        );
    });

    return (
        <section>
          <CenteredDiv>
              <ScrollTo id={'photos'}>{' '}</ScrollTo>
              <SectionHeading>Photos</SectionHeading>
              Follow us on Instagram at<br />
              <ExternalLink
                  href='https://www.instagram.com/thebantambreaks/'
                  text={'@theBantamBreaks'}
                  title='Follow The Bantam Breaks on Instagram'
              />
          </CenteredDiv>
          <FlexRowGrid>
              {images}
          </FlexRowGrid>
        </section>
    );
};
