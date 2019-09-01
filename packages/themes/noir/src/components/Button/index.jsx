import { css } from "@emotion/core";
import styled from "@emotion/styled";
import isPropValid from '@emotion/is-prop-valid'

import { CoreButton } from '@wmsa-ui/core';

import { colors, gradients } from '../../theme';

/**
 * Allows the usage of `default` instead of `default={true}`
 */
const variantProps = [
  'default',
  'secondary',
  'transparent',
];

const variantColors = props => {
  if (props.secondary) {
    return css`
      background: ${colors['gray-blue']};
    `;
  }

  if (props.transparent) {
    return css`
      color: ${colors['lavender-gray']};
      background: transparent;
    `;
  }

  return css`
    background: ${colors['lavender-gray']};
  `;
};

const variantRadius = props => {
  if (props.rounded) {
    return css`
      border-radius: 2px;
    `;
  }

  return css`
     border-radius: 0;
  `;
};

export const Button = styled(CoreButton, {
  shouldForwardProp: prop => isPropValid(prop) && !variantProps.includes(prop),
})`
  padding: 12px;
  color: ${colors['gunmetal']};
  font-weight: bold;
  font-size: 14px;
  line-height: 1.2;
  text-transform: uppercase;
  border: 0;
  cursor: pointer;
  ${variantColors};
  ${variantRadius};
`;

export default Button;
