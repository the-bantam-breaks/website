import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const InstaImg = styled.img`
    margin: 1vw;
    box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
    max-width: 15vw;
`;

const InstaPic = (props) => {
    const { className, title, url } = props;

    return (
      <InstaImg alt={'Bantam Breaks Instagram feed pic'}
           title={title}
           className={className}
           src={url}
      />
    );
};

InstaImg.propTypes = {
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
};

InstaImg.defaultProps = {

};

export default InstaImg;
