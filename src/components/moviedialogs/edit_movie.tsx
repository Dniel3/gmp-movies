import * as React from 'react';
import './edit_movie.scss';
import * as ReactModal from 'react-modal';
import { PANEL_CLASS } from './add_movie';
import { MovieProps } from '../../containers/movielist/movie_list';
import { Categories } from '../../containers/categorylist/category_list';

interface EditMovieDialogState {
    isOpened: boolean;
    movie: MovieProps;
}

/** Statefull dialog component for editing movies. */
export class EditMovieDialog extends React.Component<MovieProps, EditMovieDialogState> {

    constructor(props: MovieProps) {    
        super(props);
        this.state = {isOpened: false, movie: props};
    }
    
    render() {
        return (<>
            <button className="edit-button" onClick={this.openModal}>EDIT</button>
            <ReactModal
                    isOpen={this.state.isOpened}
                    onRequestClose={this.closeModal}
                    style={PANEL_CLASS}>
                <form>
                    <div className="title">
                        <div>EDIT MOVIE</div>
                        <button onClick={this.closeModal}>X</button>
                    </div>
                    <div className="form-field">
                        <span>MOVIE ID</span>
                        <input readOnly value={this.state.movie.id}/>
                    </div >                    
                    <div className="form-field">
                        <span>TITLE</span>
                        <input value={this.state.movie.title} placeholder="Title here" />
                    </div >
                    <div className="form-field">
                        <span>RELEASE DATE</span>
                        <input value={this.state.movie.year} type="date" placeholder="Date here" />
                    </div>
                    <div className="form-field">
                        <span>MOVIE URL</span>
                        <input value={this.state.movie.posterUrl} placeholder="Movie URL here" />
                    </div>
                    <div className="form-field">
                        <span>GENRE</span>
                        <select value={this.state.movie.categories} onChange={this.genreChanged} placeholder="Genre here">
                            <option value={Categories.ALL}>{Categories.ALL}</option>
                            <option value={Categories.ADVENTURE}>{Categories.ADVENTURE}</option>
                        </select>
                    </div>
                    <div className="form-field">
                        <span>OVERVIEW</span>
                        <textarea value={this.state.movie.overview} placeholder="Overview here" />
                    </div>
                    <div className="form-field">
                        <span>RUNTIME</span>
                        <input value="" placeholder="Runtime here"/>
                    </div>
                    <div className="action-buttons">
                        <button className="reset">RESET</button>
                        <button className="submit" onClick={this.closeModal}>SUBMIT</button>
                    </div>
                </form>
            </ReactModal>
        </>);
    }

    private readonly closeModal = 
        () => this.setState({isOpened: false});
    
    private readonly openModal = 
       () => this.setState({isOpened: true});
    
    private genreChanged = (event: React.ChangeEvent) => {
        const categories = event.target.textContent as Categories;
        this.setState({movie: {...this.state.movie, categories}});
    }
}
