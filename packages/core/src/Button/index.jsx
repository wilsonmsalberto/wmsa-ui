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
  }

  return (
    <button
      {...attributes}
      onClick={handleOnClick}
      type={type}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
  type: PropTypes.oneOf([
    'button',
    'submit',
    'reset',
  ]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  onClick: undefined,
};

export default Button;
