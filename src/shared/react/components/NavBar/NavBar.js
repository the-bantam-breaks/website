import React, { Component } from 'react';
import { throttle } from 'throttle-debounce';
import styled from 'styled-components';
import { Logo } from '../Atoms';

const Nav = styled.nav`
    ${({ fixed }) => fixed
    ? `
    position: fixed;
    top: 0;`
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
            fixed: false
        };
    }

    componentDidMount () {
        window.addEventListener('scroll', this.updatePositionListener, false);
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.updatePositionListener, false);
    }

    updatePosition () {
        this.setState((prevState) => ({
            defaultOffset: prevState.defaultOffset
                ? prevState.defaultOffset
                : this.navRef.current.offsetTop - 10,
            fixed: this.state.defaultOffset < window.pageYOffset
        }));
    }

    render () {
        const { fixed } = this.state;
        return (
            <Nav fixed={fixed} ref={this.navRef}>
                <NavLogo width="8vw" />
                {'Navigation Yay!'}
            </Nav>
        );
    }
};

export default NavBar;
