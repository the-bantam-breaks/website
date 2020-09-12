import React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS, Center } from '../Atoms';

const BioSection = styled.section`
    box-sizing: border-box;
    padding: 2rem 15vw;
    margin: 1rem;

    @media (max-width: ${BREAKPOINTS.MOBILE}) {
        padding: .5rem 0;
        margin: .2rem;
    }
`;

const EpkImage = styled.img`
    display: inline-block;
    width: 100%;
    max-width: 800px;
    max-height: 469px;
    margin: 0 auto;
`;

const Bio = styled.div`
    margin: .5rem 3rem;

    @media (max-width: ${BREAKPOINTS.MOBILE}) {
        font-size: .8rem;
    }
`;

export const EpkBio = () => {
    return (
        <BioSection>
            <Center>
                <EpkImage
                    alt="The Bantam Breaks Press Photo"
                    src={'/img/epk/the_bantam_breaks_boatright_800x469.jpg'}
                    title="The Bantam Breaks (photo credit - Michael Boatright)"
                />
            </Center>
            <Bio>
                {`Founded in 2015 in Atlanta's Old Fourth Ward, the Bantam Breaks are a southern-steeped rock and roll band with some distinctly non-traditional songwriting.
                Their oeuvre includes everything from three-chords-and-the-truth narrative Americana to singer-songwriter folk ballads to chaotic progressive country-rock.`}
            </Bio>
            <Bio>
                <i>{'Red'}</i>
                {`, the second Bantam Breaks EP, delivers some classic, guitar-driven rock and roll ("Sixteen at the Withers", "Dear Isabelle"), progressive folk music with
                very expensive harmony ("Radish", "[Sometimes I] Meander"), and a few off-the-wall hybrids that mix everything up, rendering something new and exciting.`}
            </Bio>
            <Bio>
                {`The Bantam Breaks focus most of their energy on live shows in the Southeastern US, largely filling the calendar with festivals and charity dates.
                Their live shows have been described as "kinetic" and "explosive" by the Atlanta local music scene press.`}
            </Bio>
            <Center>
                <h5>Contact</h5>
                <div>
                    thebantambreaks@gmail.com<br />
                    <a href="tel:404-907-3161">{'(404)-907-3161'}</a>
                </div>
                <br />
                <a
                    download="bantam_breaks_stage_plot.pdf"
                    title="The Bantam Breaks Stage Plot Diagram"
                    href="img/pdf/bantam_breaks_stage_plot.pdf">
                  {'Stage Plot (PDF Download)'}
                </a>
            </Center>
        </BioSection>
    );
};
