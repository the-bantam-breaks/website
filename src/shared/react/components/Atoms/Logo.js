import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { useAppData } from '../../context/';

const WidthedImage = styled.img`
    width: ${({ width }) => width};
`;

const Logo = (props) => {
    const { color, className, width } = props;
    const { logo = {} } = useAppData('appImages') || {};

    const logoUrl = color === 'light'
        ? logo.text_logo_light
        : logo.text_logo_dark;

    return (
      <WidthedImage alt={'The Bantam Breaks Logo'}
                    className={className}
                    src={logoUrl || props.defaultLogo}
                    width={width} />
    );
};

Logo.propTypes = {
    color: PropTypes.oneOf(['dark', 'light']),
    className: PropTypes.string,
    width: PropTypes.string
};

Logo.defaultProps = {
    defaultLogo: 'img/bantam_breaks_tertiary_logo_light_414_184.png',
    color: 'dark',
    className: null,
    width: '414px'
};

export default Logo;
