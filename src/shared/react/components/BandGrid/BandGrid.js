import React from 'react';
import { useAppDataContext } from '../../context/';
import { CenteredDiv, FlexRowGrid, ScrollTo, SectionHeading } from '../Atoms';
import BandMember from './BandMember';

export const BandGrid = (props) => {
    const { bandMembers = {} } = useAppDataContext() || {};

    const losHombres = Object.values(bandMembers).map((bandMember, index) => {
        return (
            <BandMember key={`band_member_${index}`}
                {...bandMember}
            />
        );
    });

    return (
        <section>
          <CenteredDiv>
              <ScrollTo id={'the_band'}>{' '}</ScrollTo>
              <SectionHeading>The Band</SectionHeading>
          </CenteredDiv>
          <FlexRowGrid>
              {losHombres}
          </FlexRowGrid>
        </section>
    );
};
