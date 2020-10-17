import * as React from 'react';
import './edit_movie.scss';
import * as ReactModal from 'react-modal';
import { useMovieDialog, PANEL_CLASS } from './common';
import { Movie } from '../../containers/movielist/movie_list';
import { useDispatch } from 'react-redux';
import { deleteMovie } from '../../redux/actions';

const DeleteMovieDialog  = (props: Movie) => {

    const [state, setState] = React.useState({isOpened: false, movie: props});
    const dispatch = useDispatch();

    const {closeModal, openModal} = useMovieDialog(state, setState);
    
    return (<>
        <button className="edit-button" onClick={openModal}>DELETE</button>
        <ReactModal
                isOpen={state.isOpened}
                onRequestClose={closeModal}
                style={PANEL_CLASS}>
            <form>
                <div className="title">
                    <div>DELETE MOVIE</div>
                    <button className="close-button" onClick={closeModal}>X</button>
                </div>
                
                <div className="form-field">
                    Are you sure you want to delete this movie?
                </div >
                
                <div className="action-buttons">
                    <button className="submit" onClick={() => dispatch(deleteMovie(props.id))}>CONFIRM</button>
                </div>
            </form>
        </ReactModal>
    </>);
}

export default DeleteMovieDialog;