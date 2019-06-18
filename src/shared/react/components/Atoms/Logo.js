import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const WidthedImage = styled.img`
    width: ${({ width }) => width};
`;

const Logo = (props) => {
    const { className, width } = props;
    return (
      <WidthedImage alt={'The Bantam Breaks Logo'}
                    className={className}
                    src='/img/bantam_breaks_tertiary_logo_414_184.png'
                    width={width} />
    );
};

Logo.propTypes = {
    className: PropTypes.string,
    width: PropTypes.string
};

Logo.defaultProps = {
    className: null,
    width: '414px'
};

export default Logo;
