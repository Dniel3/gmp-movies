import * as React from 'react';
import './add_movie.scss';
import * as ReactModal from 'react-modal';
import { Categories } from '../../containers/categorylist/category_list';
import { MovieDialogState, INITIAL_STATE, useMovieDialog, PANEL_CLASS } from './common';
    
const AddMovieDialog = () => {
 
    const [state, setState] = React.useState<MovieDialogState>(INITIAL_STATE);

    const {closeModal, openModal} = useMovieDialog(state, setState);
    
    const genreChanged = (event: React.ChangeEvent) => {
        const categories = event.target.textContent as Categories;
        setState({...state, movie: {...state.movie, categories}});
    }
    
    const dateChanged = (event: React.ChangeEvent) => {
        const date = event.target.textContent as Categories;
        setState({...state, movie: {...state.movie, year: Number(date)}});
    }

    return (<>
        <button className="add-button" onClick={openModal}>+ ADD MOVIE</button>
        <ReactModal
                isOpen={state.isOpened}
                onRequestClose={closeModal}
                style={PANEL_CLASS}>
            <form>
                <div className="title">
                    <div>ADD MOVIE</div>
                    <button onClick={closeModal}>X</button>
                </div>
                
                <div className="form-field">
                    <span>TITLE</span>
                    <input defaultValue="" value={state.movie.title} placeholder="Title here" />
                </div >
                <div className="form-field">
                    <span>RELEASE DATE</span>
                    <input value={state.movie.year} onChange={dateChanged} type="date" placeholder="Date here" />
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

export default AddMovieDialog;
