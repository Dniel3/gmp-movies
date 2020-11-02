import * as React from 'react';
import { render } from '@testing-library/react';
import Logo from './Logo';

it('should render logo', () => {
  expect(render(<Logo />).asFragment).toMatchSnapshot();
});
