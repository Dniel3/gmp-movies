import * as React from 'react';
import * as ReactModal from 'react-modal';
import './EditMovie.scss';
import { useDispatch } from 'react-redux';
import { useMovieDialog, PANEL_CLASS, FormMovie } from './common';
import { editMovie } from '../../redux/actions';
import EditMovieFormik from './EditMovieForm';
import { Movie } from '../../model/movie';

interface EditMovieDialogProps {
  movie: Movie;
}

const EditMovieDialog = ({ movie }: EditMovieDialogProps) => {
  const [state, setState] = React.useState({ isOpened: false, movie });

  const { closeModal, openModal } = useMovieDialog(state, setState);

  const dispatch = useDispatch();

  const edit = (values: FormMovie) => {
    dispatch(editMovie({
      ...movie,
      ...values,
    } as Readonly<Movie>));
    closeModal();
  };

  return (
    <>
      <button type="button" className="edit-button" onClick={openModal}>EDIT</button>
      <ReactModal
        isOpen={state.isOpened}
        onRequestClose={closeModal}
        style={PANEL_CLASS}
      >

        <div className="title">
          <div>EDIT MOVIE</div>
          <button type="button" className="close-button" onClick={closeModal}>X</button>
        </div>
        <EditMovieFormik movie={movie} editMovie={edit} />
      </ReactModal>
    </>
  );
};

export default EditMovieDialog;
