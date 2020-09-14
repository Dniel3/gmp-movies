import * as React from 'react';
import './edit_movie.scss';
import * as ReactModal from 'react-modal';
import { useMovieDialog, PANEL_CLASS } from './common';
import { Movie } from '../../containers/movielist/movie_list';
import { Genres } from '../../containers/genrelist/genre_list';

const EditMovieDialog = (props: Movie) => {

    const [state, setState] = React.useState({isOpened: false, movie: props});
    const [title, setTitle] = React.useState(props.title);
    const [releaseDate, setReleaseDate] = React.useState(props.release_date);
    const [posterPath, setPosterPath] = React.useState(props.poster_path);
    const [genres, setGenres] = React.useState(props.genres);
    const [overview, setOverview] = React.useState(props.overview);
    const [runtime, setRuntime] = React.useState(props.runtime);

    const {closeModal, openModal} = useMovieDialog(state, setState);
    
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
                        onChange={(event: React.ChangeEvent) => setTitle(event.target.textContent || '')} 
                        placeholder="Title here" />
                </div>

                <div className="form-field">
                    <span>RELEASE DATE</span>
                    <input value={releaseDate} 
                        onChange={(event: React.ChangeEvent) => setReleaseDate(event.target.textContent || '')} 
                        type="date" 
                        placeholder="Date here" />
                </div>

                <div className="form-field">
                    <span>MOVIE URL</span>
                    <input value={posterPath}
                        onChange={(event: React.ChangeEvent) => setPosterPath(event.target.textContent || '')}
                        placeholder="Movie URL here" />
                </div>
                
                <div className="form-field">
                    <span>GENRE</span>
                    <select multiple 
                            value={genres}
                            onChange={(event: React.ChangeEvent) => setGenres(event.target.textContent?.split(', ') || [])} 
                            placeholder="Genre here">
                        <option value={Genres.ALL}>{Genres.ALL}</option>
                        <option value={Genres.ADVENTURE}>{Genres.ADVENTURE}</option>
                    </select>
                </div>

                <div className="form-field">
                    <span>OVERVIEW</span>
                    <textarea value={overview} 
                        onChange={(event: React.ChangeEvent) => setOverview(event.target.textContent || '')}
                        placeholder="Overview here" />
                </div>

                <div className="form-field">
                    <span>RUNTIME</span>
                    <input value={runtime}
                        onChange={(event: React.ChangeEvent) => setRuntime(Number(event.target.textContent) || 0)}
                        placeholder="Runtime here"/>
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
