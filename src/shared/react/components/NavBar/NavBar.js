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
    @media (max-width: ${BREAKPOINTS.MOBILE}) {
        padding: .2rem .5rem;
    }
`;

const NavAnchor = styled.a`
    display: inline-block;
    margin: 0 .5rem;
    height: 100%;
    vertical-align: middle;
    font-size: 1.15rem;
    font-weight: 500;

    @media (max-width: ${BREAKPOINTS.MOBILE}) {
        font-size: .70rem;
    }
`;

const NavLogo = styled(Logo)`
    float: left;
    margin-right: 1rem;
    max-height: 100px;
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
                <NavAnchor>
                    <NavLogo width="8vw" />
                </NavAnchor>
                <ActionLink
                    href={'#albums'}
                    title="Albums"
                    type={this.secondaryOrPrimary('#albums')}>
                    Albums
                </ActionLink>
                <ActionLink
                    href={'#photos'}
                    title="Photos"
                    type={this.secondaryOrPrimary('#photos')}>
                    Photos
                </ActionLink>
                <ActionLink
                    href={'#the_band'}
                    title="The Band"
                    type={this.secondaryOrPrimary('#the_band')}>
                    The Band
                </ActionLink>
                <ActionLink
                    href="https://thebantambreaks.bandcamp.com/merch"
                    target="_blank"
                    title="Store"
                    type="PRIMARY">
                        Store
                </ActionLink>
                <ActionLink
                    href={'#shows'}
                    title="Shows"
                    type={this.secondaryOrPrimary('#shows')}>
                    Shows
                </ActionLink>
                <ActionLink
                    href={'#videos'}
                    title="Videos"
                    type={this.secondaryOrPrimary('#videos')}>
                    Videos
                </ActionLink>
            </BreaksNav>
        );
    }
};

const NavBar = withRouter(Nav);
export default NavBar;
