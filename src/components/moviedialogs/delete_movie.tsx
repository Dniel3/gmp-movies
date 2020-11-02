import * as React from 'react';
import './EditMovie.scss';
import * as ReactModal from 'react-modal';
import { useDispatch } from 'react-redux';
import { useMovieDialog, PANEL_CLASS } from './common';
import { deleteMovie } from '../../redux/actions';
import { Movie } from '../../model/movie';

interface DeleteMovieDialogProps {
  movie: Movie;
}

const DeleteMovieDialog = ({ movie }: DeleteMovieDialogProps) => {
  const [state, setState] = React.useState({ isOpened: false, movie });
  const dispatch = useDispatch();

  const { closeModal, openModal } = useMovieDialog(state, setState);

  return (
    <>
      <button type="button" className="edit-button" onClick={openModal}>DELETE</button>
      <ReactModal
        isOpen={state.isOpened}
        onRequestClose={closeModal}
        style={PANEL_CLASS}
      >
        <form>
          <div className="title">
            <div>DELETE MOVIE</div>
            <button type="button" className="close-button" onClick={closeModal}>X</button>
          </div>

          <div className="form-field">
            Are you sure you want to delete this movie?
          </div>

          <div className="action-buttons">
            <button type="button" className="submit" onClick={() => dispatch(deleteMovie(movie.id))}>CONFIRM</button>
          </div>
        </form>
      </ReactModal>
    </>
  );
};

export default DeleteMovieDialog;
