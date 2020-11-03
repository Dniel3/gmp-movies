import * as React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Edit Movie',
  decorators: [withKnobs],
};

export const withAButton = () => (
  <button disabled={boolean('Disabled', false)}>{text('Label', 'Hello Storybook')}</button>
);
