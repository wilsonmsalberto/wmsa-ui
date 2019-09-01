/** @jsx jsx */
import React from 'react';
import { css, Global, jsx } from "@emotion/core";
import { storiesOf } from '@storybook/react';

import {
  colors,
  globals,
  normalize,
  typography,
} from '../theme';

const Color = ({color, name}) => (
  <div
    css={css`
      display: grid;
    `}
  >
    <div
      css={css`
        width: 100%;
        height: 100px;
        border: 1px solid #d6d6d6;
        background: ${color};
      `}
    />
    <div css={css`
      margin-top: 10px;
      margin-bottom: 20px;
    `}>
      <p><b>Color Name:</b></p>
      <p>{name}</p>
    </div>

    <div>
      <p><b>Color Code:</b></p>
      <p>{color}</p>
    </div>
  </div>
);

storiesOf('Themes/Noir/Styleguide', module)
  .add('Colors', () => (
    <>
      <Global
        styles={[
          css(globals),
          css(normalize),
          css(typography),
        ]}
      />
      <h1 css={css`
        text-align: left;
        margin: 20px auto;
      `}>
        Colors
      </h1>
      {
        Object.keys(colors).map((colorName) => (
          <Color
            color={colors[colorName]}
            key={colorName}
            name={colorName}
          />
        ))
      }
    </>
  ));
