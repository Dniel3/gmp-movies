import * as React from 'react';
import { render } from '@testing-library/react';

import * as Redux from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import GenreList from './GenreList';

import store from '../../redux/store';

describe('GenreList', () => {
  beforeEach(() => {
    render(
      <Redux.Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <GenreList />
        </MemoryRouter>
      </Redux.Provider>,
    );
  });

  it('should render genre list', async () => {
    expect(document.querySelectorAll('.genre').length).toBe(6);
  });
});
