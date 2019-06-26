import React from 'react';
import { CenteredDiv, FlexRowGrid, ScrollTo, SectionHeading } from '../Atoms';
import Album from './Album';
import { useAppDataContext } from '../../context/';

export const AlbumGrid = (props) => {
    const { albums = [] } = useAppDataContext() || {};

    const Albums = albums.map((album, index) => {
        return (
            <Album key={`album_${index}`}
                {...album}
            />
        );
    });

    return (
        <section>
          <CenteredDiv>
              <ScrollTo id={'albums'}>{' '}</ScrollTo>
              <SectionHeading>Albums</SectionHeading>
          </CenteredDiv>
          <FlexRowGrid>
              {Albums}
          </FlexRowGrid>
        </section>
    );
};
