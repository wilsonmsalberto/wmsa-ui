import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  children,
  onClick,
  type,
  ...attributes
}) => {
  const handleOnClick = (e) => {
    e.preventDefault();

    if (!onClick) return;

    onClick();
  };

  return (
    /* eslint-disable-next-line react/button-has-type */
    <button
      { ...attributes } // eslint-disable-line react/jsx-props-no-spreading
      onClick={ handleOnClick }
      type={ type }
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf([
    'button',
    'submit',
    'reset',
  ]),
};

Button.defaultProps = {
  type: 'button',
  onClick: undefined,
};

export default Button;
