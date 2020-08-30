import * as React from 'react';
import './add_movie.scss';
import * as ReactModal from 'react-modal';
import { MovieProps } from '../../containers/movielist/movie_list';
import { Categories } from '../../containers/categorylist/category_list';

export const PANEL_CLASS = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#232323',
  }
};

interface AddMovieDialogState {
    isOpened: boolean;
    movie: MovieProps;
}

/** Statefull dialog component for adding movies. */
export class AddMovieDialog extends React.Component<{}, AddMovieDialogState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            isOpened: false,
            movie: {
                id: '', 
                title: '', 
                posterUrl: '', 
                year: 0, 
                categories: Categories.ALL, 
                overview: ''
            }};
    }
    
    render() {
        return (<>
            <button className="add-button" onClick={this.openModal}>+ ADD MOVIE</button>
            <ReactModal
                    isOpen={this.state.isOpened}
                    onRequestClose={this.closeModal}
                    style={PANEL_CLASS}>
                <form>
                    <div className="title">
                        <div>ADD MOVIE</div>
                        <button onClick={this.closeModal}>X</button>
                    </div>
                    
                    <div className="form-field">
                        <span>TITLE</span>
                        <input  defaultValue="" value={this.state.movie.title} placeholder="Title here" />
                    </div >
                    <div className="form-field">
                        <span>RELEASE DATE</span>
                        <input value={this.state.movie.year} onChange={this.dateChanged} type="date" placeholder="Date here" />
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

    private readonly closeModal = () => this.setState({isOpened: false});
    
    private readonly openModal = 
         () => this.setState({isOpened: true});

    private readonly genreChanged = (event: React.ChangeEvent) => {
        const categories = event.target.textContent as Categories;
        this.setState({...this.state, movie: {...this.state.movie, categories}});
    }

    private readonly dateChanged = (event: React.ChangeEvent) => {
        const date = event.target.textContent as Categories;
        this.setState({...this.state, movie: {...this.state.movie, year: Number(date)}});
    }
}
