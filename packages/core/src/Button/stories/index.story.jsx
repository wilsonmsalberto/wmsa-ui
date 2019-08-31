import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Button from '../index';

// Props
const types = [
  'button',
  'submit',
  'reset',
];

storiesOf('Core/Button', module)
  .add('Simple Button', () => <Button>Simple Button</Button>)
  .add('Button Types', () => (
    <>
      <Button
        id="test"
        type={'button'}
      >
        Button Type: Button
      </Button>

      <Button
        id="test"
        type={'submit'}
      >
        Button Type: Submit
      </Button>

      <Button
        id="test"
        type={'reset'}
      >
        Button Type: Reset
      </Button>

      <Button
        id="test"
        type={select('Type', types)}
      >
        Button Type: Shifting
      </Button>
    </>
  ));
