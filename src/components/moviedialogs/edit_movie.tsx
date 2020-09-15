import * as React from 'react';
import './edit_movie.scss';
import * as ReactModal from 'react-modal';
import { useMovieDialog, PANEL_CLASS } from './common';
import { Movie } from '../../containers/movielist/movie_list';
import { Genres } from '../../containers/genrelist/genre_list';
import { useDispatch } from 'react-redux';
import { editMovie } from '../../redux/actions';

const EditMovieDialog = (props: Movie) => {

    const [state, setState] = React.useState({isOpened: false, movie: props});
    const [title, setTitle] = React.useState(props.title);
    const [releaseDate, setReleaseDate] = React.useState(props.release_date);
    const [posterPath, setPosterPath] = React.useState(props.poster_path);
    const [genres, setGenres] = React.useState(props.genres);
    const [overview, setOverview] = React.useState(props.overview);
    const [runtime, setRuntime] = React.useState(props.runtime);

    const {closeModal, openModal} = useMovieDialog(state, setState);
    
    const dispatch = useDispatch();

    const edit = () => {
        dispatch(editMovie({
            ...props,
            title,
            release_date: releaseDate,
            poster_path: posterPath,
            overview,
            runtime,
            genres,
        })); 
    };

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
                            onChange={(event) => setGenres(event.target.value.split(', ') || [])} 
                            placeholder="Genre here">
                        <option value={Genres.ALL}>{Genres.ALL}</option>
                        <option value={Genres.ADVENTURE}>{Genres.ADVENTURE}</option>
                    </select>
                </div>

                <div className="form-field">
                    <span>OVERVIEW</span>
                    <textarea value={overview} 
                        onChange={(event) => setOverview(event.target.value || '')}
                        placeholder="Overview here" />
                </div>

                <div className="form-field">
                    <span>RUNTIME</span>
                    <input value={runtime}
                        onChange={(event) => setRuntime(Number(event.target.value) || 0)}
                        placeholder="Runtime here"/>
                </div>

                <div className="action-buttons">
                    <button className="reset">RESET</button>
                    <button className="submit" onClick={edit}>SUBMIT</button>
                </div>
            </form>
        </ReactModal>
    </>);
}

export default EditMovieDialog
