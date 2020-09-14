import * as React from 'react';
import './add_movie.scss';
import * as ReactModal from 'react-modal';
import { Genres } from '../../containers/genrelist/genre_list';
import { MovieDialogState, INITIAL_STATE, useMovieDialog, PANEL_CLASS } from './common';
    
const AddMovieDialog = () => {
 
    const [state, setState] = React.useState<MovieDialogState>(INITIAL_STATE);
    const [title, setTitle] = React.useState('');
    const [releaseDate, setReleaseDate] = React.useState('');
    const [posterPath, setPosterPath] = React.useState('');
    const [genres, setGenres] = React.useState([] as string[]);
    const [overview, setOverview] = React.useState('');
    const [runtime, setRuntime] = React.useState('');

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
                    <input value=""
                        onChange={(event: React.ChangeEvent) => setTitle(event.target.textContent || '')} 
                        placeholder="Title here" />                
                </div>

                <div className="form-field">
                    <span>RELEASE DATE</span>
                    <input value="" 
                        onChange={(event: React.ChangeEvent) => setReleaseDate(event.target.textContent || '')} 
                        type="date" 
                        placeholder="Date here" /> 
                </div>

                <div className="form-field">
                    <span>MOVIE URL</span>
                    <input value=""
                        onChange={(event: React.ChangeEvent) => setPosterPath(event.target.textContent || '')}
                        placeholder="Movie URL here" />                
                </div>

                <div className="form-field">
                    <span>GENRE</span>
                    <select multiple 
                            value={[]}
                            onChange={(event: React.ChangeEvent) => setGenres(event.target.textContent?.split(',') || [] as string[])} 
                            placeholder="Genre here">
                        <option value={Genres.ALL}>{Genres.ALL}</option>
                        <option value={Genres.ADVENTURE}>{Genres.ADVENTURE}</option>
                    </select>
                </div>

                <div className="form-field">
                    <span>OVERVIEW</span>
                    <textarea value="" 
                        onChange={(event: React.ChangeEvent) => setOverview(event.target.textContent || '')}
                        placeholder="Overview here" />                
                </div>

                <div className="form-field">
                    <span>RUNTIME</span>
                    <input value=""
                        onChange={(event: React.ChangeEvent) => setRuntime(event.target.textContent || '')}
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

export default AddMovieDialog;
