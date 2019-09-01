import { configure, addDecorator, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import { withKnobs } from '@storybook/addon-knobs';

const req = require.context('../packages', true, /.story.jsx?$/);

function loadStories() {
  addParameters({options: {theme: themes.dark}});
  addDecorator(withKnobs);
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
