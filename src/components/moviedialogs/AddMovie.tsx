import * as React from 'react';
import './AddMovie.scss';
import * as ReactModal from 'react-modal';
import { useDispatch } from 'react-redux';
import {
  MovieDialogState, INITIAL_STATE, useMovieDialog, PANEL_CLASS, FormMovie,
} from './common';
import { createMovie } from '../../redux/actions';

import AddMovieFormik from './AddMovieForm';
import { Movie } from '../../model/movie';

const AddMovieDialog = () => {
  const [state, setState] = React.useState<MovieDialogState>(INITIAL_STATE);
  const dispatch = useDispatch();

  const addMovie = (values: FormMovie) => {
    dispatch(createMovie({
      ...values,
      tagline: 'none',
      vote_average: 0,
      vote_count: 0,
      budget: 0,
      revenue: 0,
    } as Readonly<Movie>));
  };

  const { closeModal, openModal } = useMovieDialog(state, setState);

  return (
    <>
      <button type="button" className="add-button" onClick={openModal}>+ ADD MOVIE</button>
      <ReactModal
        isOpen={state.isOpened}
        onRequestClose={closeModal}
        style={PANEL_CLASS}
      >
        <div className="title">
          <div>ADD MOVIE</div>
          <button type="button" className="close-button" onClick={closeModal}>X</button>
        </div>
        <AddMovieFormik addMovie={addMovie} />
      </ReactModal>
    </>
  );
};

export default AddMovieDialog;
