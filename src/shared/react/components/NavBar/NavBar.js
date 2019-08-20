import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { throttle } from 'throttle-debounce';
import styled from 'styled-components';
import { ActionLink, BREAKPOINTS, Logo } from '../Atoms';

const BreaksNav = styled.nav`
    ${({ fixed, clientHeight }) => fixed
    ? `
    position: fixed;
    top: 0;
    + section {
        margin-top: ${clientHeight}px;
    }
    box-shadow: 0 1px 3px rgba(0,0,0,0.75);`
    : ''}
    box-sizing: border-box;
    background-color: #fff;
    max-height: 100px;
    min-height: 40px;
    width: 100vw;
    padding: .5rem 1rem;
    z-index: 3;
    @media (max-width: ${BREAKPOINTS.NAV}) {
        padding: .2rem 0;
    }
`;

const NavAnchor = styled.a`
    display: inline-block;
    margin: 0 .35rem;
    height: 100%;
    vertical-align: middle;
    font-size: 1.15rem;
    font-weight: 500;

    @media (max-width: ${BREAKPOINTS.NAV}) {
        font-size: .70rem;
    }
`;

const NavLogo = styled(Logo)`
    float: left;
    margin-right: 1rem;
    max-height: 100px;
`;

const SocialBadge = styled.img`
    max-width: 30px;
    max-height: 30px;

    @media (max-width: ${BREAKPOINTS.NAV}) {
        max-width: 20px;
        max-height: 20px;
    }
`;

const SiteLinks = styled.div`
    display: inline;

    @media (max-width: ${BREAKPOINTS.NAV}) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        flex-direction: row;
        margin: .5rem 0;
    }
`;

const SocialBadges = styled.div`
    float: right;
    margin-top: .25rem;
`;

const StoreActionLink = styled(ActionLink)`
    padding: .33rem .75rem;
    vertical-align: top;

    @media (max-width: ${BREAKPOINTS.NAV}) {
        padding: .2rem .4rem;
    }
`;

class Nav extends Component {
    constructor (props) {
        super(props);
        this.navRef = React.createRef();
        this.updatePosition = this.updatePosition.bind(this);
        this.updatePositionListener = throttle(50, this.updatePosition);
        this.updatePositionListener = this.updatePositionListener.bind(this);

        this.state = {
            defaultOffset: undefined,
            fixed: false,
            height: '40'
        };
    }

    componentDidMount () {
        window.addEventListener('scroll', this.updatePositionListener, false);
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.updatePositionListener, false);
    }

    secondaryOrPrimary (linkHash) {
        const {
            location: {
                hash = ''
            } = {}
        } = this.props;

        return hash === linkHash
            ? 'DISABLED'
            : 'SECONDARY';
    }

    updatePosition () {
        const navHeight = this.navRef.current.clientHeight;
        const scrollPos = Number.isFinite(window.pageYOffset) ? window.pageYOffset : window.scrollY;

        this.setState((prevState) => ({
            defaultOffset: prevState.defaultOffset
                ? prevState.defaultOffset
                : this.navRef.current.offsetTop - 10,
            fixed: this.state.defaultOffset < scrollPos,
            height: navHeight
        }));
    }

    render () {
        const { fixed, height } = this.state;

        return (
            <BreaksNav fixed={fixed} clientHeight={height} ref={this.navRef}>
                <NavAnchor href='/'>
                    <NavLogo width="8vw" />
                </NavAnchor>

                <SocialBadges>
                    <NavAnchor target="_blank"
                        title="The Bantam Breaks on Facebook"
                        href="https://www.facebook.com/thebantambreaks">
                      <SocialBadge width="30px" src="img/social-badges/facebook.png" alt="The Bantam Breaks on Facebook" />
                    </NavAnchor>
                    <NavAnchor target="_blank"
                        title="The Bantam Breaks on Twitter"
                        href="https://twitter.com/thebantambreaks">
                      <SocialBadge width="30px" src="img/social-badges/twitter.png" alt="The Bantam Breaks on Twitter" />
                    </NavAnchor>
                    <NavAnchor target="_blank"
                        title="The Bantam Breaks on Instagram"
                        href="https://www.instagram.com/thebantambreaks">
                      <SocialBadge width="30px" src="img/social-badges/instagram.png" alt="The Bantam Breaks on Instagram" />
                    </NavAnchor>
                    <NavAnchor target="_blank"
                        title="The Bantam Breaks on Youtube"
                        href="https://www.youtube.com/c/thebantambreaks">
                      <SocialBadge width="30px" src="img/social-badges/youtube.png" alt="The Bantam Breaks on Youtube" />
                    </NavAnchor>
                    <StoreActionLink
                        href="https://thebantambreaks.bandcamp.com/merch"
                        target="_blank"
                        title="Store"
                        look="PRIMARY">
                        Store
                    </StoreActionLink>
                </SocialBadges>

                <SiteLinks>
                    <ActionLink
                        href={'#albums'}
                        title="Albums"
                        look={this.secondaryOrPrimary('#albums')}>
                        Albums
                    </ActionLink>
                    <ActionLink
                        href={'#photos'}
                        title="Photos"
                        look={this.secondaryOrPrimary('#photos')}>
                        Photos
                    </ActionLink>
                    <ActionLink
                        href={'#the_band'}
                        title="The Band"
                        look={this.secondaryOrPrimary('#the_band')}>
                        Band
                    </ActionLink>
                    <ActionLink
                        href={'#shows'}
                        title="Shows"
                        look={this.secondaryOrPrimary('#shows')}>
                        Shows
                    </ActionLink>
                    <ActionLink
                        href={'#videos'}
                        title="Videos"
                        look={this.secondaryOrPrimary('#videos')}>
                        Videos
                    </ActionLink>
                    <ActionLink
                        href="/epk"
                        title="Electronic Press Kit"
                        look="SECONDARY">
                            EPK
                    </ActionLink>
                    <ActionLink
                        href={'#contact'}
                        title="Contact"
                        look={this.secondaryOrPrimary('#contact')}>
                        Contact
                    </ActionLink>
                </SiteLinks>

            </BreaksNav>
        );
    }
};

const NavBar = withRouter(Nav);
export { Nav as NavStyles };
export default NavBar;
