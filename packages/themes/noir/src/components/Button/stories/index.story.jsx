/** @jsx jsx */
import React from 'react';
import { css, Global, jsx } from "@emotion/core";
import {select} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

import Button from '../index';

import {
  globals,
  normalize,
  typography,
} from '../../../theme';

// Props
const types = [
  'button',
  'submit',
  'reset',
];

storiesOf('Themes/Noir/Components/Button', module)
  .add('Default Style', () => <Button>Simple Button</Button>)
  .add('Style Variants', () => (
    <>
      <Global
        styles={[
          css(globals),
          css(normalize),
          css(typography),
        ]}
      />
      <h1>Buttons</h1>

      <Button
        id="test"
        type={select('Type', types)}
      >
        Default Button
      </Button>
      <Button
        id="test"
        type={select('Type', types)}
        secondary
      >
        Secondary Button
      </Button>
      <Button
        id="test"
        type={select('Type', types)}
        transparent
      >
        Transparent Button
      </Button>
      <Button
        id="test"
        type={select('Type', types)}
        rounded
      >
        Rounded Button
      </Button>
    </>
  ));
