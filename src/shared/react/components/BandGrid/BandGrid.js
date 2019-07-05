import React from 'react';
import styled from 'styled-components';
import { useAppDataContext } from '../../context/';
import { CenteredDiv, FlexRowGrid, ScrollTo, SectionHeading } from '../Atoms';
import BandMember from './BandMember';

const BandHeading = styled(CenteredDiv)`
    margin-bottom: 1rem;
`;

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
          <BandHeading>
              <ScrollTo id={'the_band'}>{' '}</ScrollTo>
              <SectionHeading>The Band</SectionHeading>
          </BandHeading>
          <FlexRowGrid>
              {losHombres}
          </FlexRowGrid>
        </section>
    );
};
