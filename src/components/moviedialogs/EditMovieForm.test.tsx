import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import * as ReactModal from 'react-modal';
import { FAKE_MOVIE } from '../moremenu/MoreMenu.test';
import EditMovieFormik from './EditMovieForm';

ReactModal.setAppElement('body');

describe('AddMovieDialog', () => {
  const editMovie = jest.fn();

  beforeEach(() => {
    render(<EditMovieFormik editMovie={editMovie} movie={FAKE_MOVIE} />);
  });

  it('should populate form with movie props', async () => {
    expect(screen.queryByDisplayValue(FAKE_MOVIE.id.toString())).toBeDefined();
    expect(screen.queryByDisplayValue(FAKE_MOVIE.title)).toBeDefined();
    expect(screen.queryByDisplayValue(FAKE_MOVIE.release_date)).toBeDefined();
    expect(screen.queryByDisplayValue(FAKE_MOVIE.poster_path)).toBeDefined();
    expect(screen.queryByDisplayValue(FAKE_MOVIE.overview)).toBeDefined();
    expect(screen.queryByDisplayValue(FAKE_MOVIE.runtime.toString())).toBeDefined();
  });

  it('should reset form when clicking reset button', () => {
    userEvent.type(document.querySelector('input[name="title"]')!, 'title');
    expect(screen.queryByDisplayValue('title')).toBeDefined();

    userEvent.click(document.querySelector('.reset')!);

    expect(screen.queryByDisplayValue(FAKE_MOVIE.title)).toBeDefined();
  });

  it('should call handleSubmit when clicking submit button', async () => {
    userEvent.click(document.querySelector('.submit')!);

    await waitFor(() => expect(editMovie).toHaveBeenCalled());
  });
});
