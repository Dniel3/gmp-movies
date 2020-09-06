import * as React from 'react';
import './edit_movie.scss';
import * as ReactModal from 'react-modal';
import { useMovieDialog, PANEL_CLASS } from './common';
import { Movie } from '../../containers/movielist/movie_list';
import { Categories } from '../../containers/categorylist/category_list';

const EditMovieDialog = (props: Movie) => {

    const [state, setState] = React.useState({isOpened: false, movie: props});

    const {closeModal, openModal} = useMovieDialog(state, setState);

    const genreChanged = (event: React.ChangeEvent) => {
        const categories = event.target.textContent as Categories;
        setState({...state, movie: {...state.movie, categories}});
    }
    
    return (<>
        <button className="edit-button" onClick={openModal}>EDIT</button>
        <ReactModal
                isOpen={state.isOpened}
                onRequestClose={closeModal}
                style={PANEL_CLASS}>
            <form>
                <div className="title">
                    <div>EDIT MOVIE</div>
                    <button onClick={closeModal}>X</button>
                </div>
                <div className="form-field">
                    <span>MOVIE ID</span>
                    <input readOnly value={state.movie.id}/>
                </div >                    
                <div className="form-field">
                    <span>TITLE</span>
                    <input value={state.movie.title} placeholder="Title here" />
                </div >
                <div className="form-field">
                    <span>RELEASE DATE</span>
                    <input value={state.movie.year} type="date" placeholder="Date here" />
                </div>
                <div className="form-field">
                    <span>MOVIE URL</span>
                    <input value={state.movie.posterUrl} placeholder="Movie URL here" />
                </div>
                <div className="form-field">
                    <span>GENRE</span>
                    <select value={state.movie.categories} onChange={genreChanged} placeholder="Genre here">
                        <option value={Categories.ALL}>{Categories.ALL}</option>
                        <option value={Categories.ADVENTURE}>{Categories.ADVENTURE}</option>
                    </select>
                </div>
                <div className="form-field">
                    <span>OVERVIEW</span>
                    <textarea value={state.movie.overview} placeholder="Overview here" />
                </div>
                <div className="form-field">
                    <span>RUNTIME</span>
                    <input value="" placeholder="Runtime here"/>
                </div>
                <div className="action-buttons">
                    <button className="reset">RESET</button>
                    <button className="submit" onClick={closeModal}>SUBMIT</button>
                </div>
            </form>
        </ReactModal>
    </>);
}

export default EditMovieDialog
