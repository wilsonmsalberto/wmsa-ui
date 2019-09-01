/** @jsx jsx */
import { css, Global, jsx } from "@emotion/core";
import {select} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import * as React from 'react';

import Button from '../index';

import {
  globals,
  normalize,
  typography,
} from '../../../theme';

// Props
const htmlTypes = [
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
        htmlType={select('Type', htmlTypes)}
      >
        Default Button
      </Button>
      <Button
        id="test"
        htmlType={select('Type', htmlTypes)}
        secondary
      >
        Secondary Button
      </Button>
      <Button
        id="test"
        htmlType={select('Type', htmlTypes)}
        transparent
      >
        Transparent Button
      </Button>
      <Button
        id="test"
        htmlType={select('Type', htmlTypes)}
        rounded
      >
        Rounded Button
      </Button>
    </>
  ));
