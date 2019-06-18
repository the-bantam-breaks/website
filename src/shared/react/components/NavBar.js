import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import styled from 'styled-components';
import { Logo } from './Atoms';

const Nav = styled.nav`
    background-color: #fff;
    max-height: 100px;
    min-height: 40px;
    width: 100vw;
    padding: .5rem 1rem;
`;

const NavLogo = styled(Logo)`
    float: left;
    margin-right: 1rem;
    max-height: 100px;
`;

const NavBar = () => {
    return (
        <StickyContainer>
             <Sticky>
                {({ style }) => (
                  <Nav style={style}>
                    <NavLogo width="8vw" />
                    {'Navigation Yay!'}
                  </Nav>
                )}
             </Sticky>
        </StickyContainer>
    );
};

export default NavBar;
