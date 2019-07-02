import React, { Component } from 'react';
import { throttle } from 'throttle-debounce';
import styled from 'styled-components';
import { Logo } from '../Atoms';

const Nav = styled.nav`
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
`;

const NavAnchor = styled.a`
    display: inline-block;
    margin: 0 .5rem;
    height: 100%;
    vertical-align: center;
    font-size: 1.15rem;
    font-weight: 500;
`;

const NavLogo = styled(Logo)`
    float: left;
    margin-right: 1rem;
    max-height: 100px;
`;

class NavBar extends Component {
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
            <Nav fixed={fixed} clientHeight={height} ref={this.navRef}>
                <NavAnchor href='/'><NavLogo width="8vw" /></NavAnchor>
                <NavAnchor href={'#albums'}>Albums</NavAnchor>
                <NavAnchor href={'#photos'}>Photos</NavAnchor>
                <NavAnchor href={'#the_band'}>The Band</NavAnchor>
                <NavAnchor href={'#videos'}>Videos</NavAnchor>
            </Nav>
        );
    }
};

export default NavBar;
