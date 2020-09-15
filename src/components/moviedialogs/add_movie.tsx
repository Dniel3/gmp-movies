import * as React from 'react';
import './add_movie.scss';
import * as ReactModal from 'react-modal';
import { Genres } from '../../containers/genrelist/genre_list';
import { MovieDialogState, INITIAL_STATE, useMovieDialog, PANEL_CLASS } from './common';
import { useDispatch } from 'react-redux';
import { createMovie } from '../../redux/actions';
    
const AddMovieDialog = () => {
 
    const [state, setState] = React.useState<MovieDialogState>(INITIAL_STATE);
    const [title, setTitle] = React.useState('');
    const [releaseDate, setReleaseDate] = React.useState('');
    const [posterPath, setPosterPath] = React.useState('');
    const [genres, setGenres] = React.useState([] as string[]);
    const [overview, setOverview] = React.useState('');
    const [runtime, setRuntime] = React.useState(0);
    const dispatch = useDispatch();

    const addMovie = () => {
        dispatch(createMovie({
            title,
            tagline: 'none',
            vote_average: 0,
            vote_count: 0,
            release_date: releaseDate,
            poster_path: posterPath,
            overview,
            budget: 0,
            revenue: 0,
            runtime,
            genres,
        })); 
    };


    const {closeModal, openModal} = useMovieDialog(state, setState);
    

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
                    <input value={title}
                        onChange={(event) => setTitle(event.target.value)} 
                        placeholder="Title here" />                
                </div>

                <div className="form-field">
                    <span>RELEASE DATE</span>
                    <input value={releaseDate} 
                        onChange={(event) => setReleaseDate(event.target.value)} 
                        type="date" 
                        placeholder="Date here" /> 
                </div>

                <div className="form-field">
                    <span>MOVIE URL</span>
                    <input value={posterPath}
                        onChange={(event) => setPosterPath(event.target.value)}
                        placeholder="Movie URL here" />                
                </div>

                <div className="form-field">
                    <span>GENRE</span>
                    <select multiple 
                            value={genres}
                            onChange={(event) => setGenres(event.target.value?.split(',') || [] as string[])} 
                            placeholder="Genre here">
                        <option value={Genres.ALL}>{Genres.ALL}</option>
                        <option value={Genres.ADVENTURE}>{Genres.ADVENTURE}</option>
                    </select>
                </div>

                <div className="form-field">
                    <span>OVERVIEW</span>
                    <textarea value={overview} 
                        onChange={(event) => setOverview(event.target.value)}
                        placeholder="Overview here" />                
                </div>

                <div className="form-field">
                    <span>RUNTIME</span>
                    <input value={runtime}
                        onChange={(event) => setRuntime(Number(event.target.value))}
                        placeholder="Runtime here"/>                
                </div>

                <div className="action-buttons">
                    <button className="reset">RESET</button>
                    <button className="submit" onClick={addMovie}>SUBMIT</button>
                </div>
            </form>
        </ReactModal>
    </>);
}

export default AddMovieDialog;
