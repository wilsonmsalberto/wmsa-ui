import { css } from '@emotion/core';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';

import { CoreButton } from '@wmsa-ui/core';

/**
 * Allows the usage of `default` instead of `default={true}` || shouldForwardProp
 */
const variantProps = [
  'default',
  'secondary',
  'transparent',
];

const variantColors = (props) => {
  if (props.secondary) {
    return css`
      color: ${props.theme.colors.primary};
      background: ${props.theme.colors.secondary};
    `;
  }

  if (props.transparent) {
    return css`
      background: transparent;
    `;
  }

  return css`
    color: ${props.theme.colors.secondary};
    background: ${props.theme.colors.primary};
  `;
};

const variantRadius = (props) => {
  if (props.rounded) {
    return css`
      border-radius: 2px;
    `;
  }

  return css`
     border-radius: 0;
  `;
};

const Button = styled(CoreButton, {
  shouldForwardProp: (prop) => isPropValid(prop) && !variantProps.includes(prop),
})`
  padding: 12px;
  color: ${(props) => props.theme.colors.textColor};
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
