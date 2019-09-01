import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ children }) => (<h1>{children}</h1>);

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
};

export default Title;
