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
    }`
    : ''}
    background-color: #fff;
    max-height: 100px;
    min-height: 40px;
    width: 100vw;
    padding: .5rem 1rem;
    z-index: 3;
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
        this.setState((prevState) => ({
            defaultOffset: prevState.defaultOffset
                ? prevState.defaultOffset
                : this.navRef.current.offsetTop - 10,
            fixed: this.state.defaultOffset < window.pageYOffset,
            height: navHeight
        }));
    }

    render () {
        const { fixed, height } = this.state;
        return (
            <Nav fixed={fixed} clientHeight={height} ref={this.navRef}>
                <a href='/'><NavLogo width="8vw" /></a>
                <a href={'#photos'}>Photos</a>
            </Nav>
        );
    }
};

export default NavBar;
