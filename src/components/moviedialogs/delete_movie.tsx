import * as React from 'react';
import './edit_movie.scss';
import * as ReactModal from 'react-modal';
import { PANEL_CLASS } from './add_movie';

interface DeleteMovieDialogState {
    isOpened: boolean;
}

/** Statefull dialog component for deliting movies. */
export class DeleteMovieDialog extends React.Component<{}, DeleteMovieDialogState> {

    constructor(props: {}) {
        super(props);
        this.state = {isOpened: false};
    }
    
    render() {
        return (<>
            <button className="edit-button" onClick={this.openModal}>DELETE</button>
            <ReactModal
                    isOpen={this.state.isOpened}
                    onRequestClose={this.closeModal}
                    style={PANEL_CLASS}>
                <form>
                    <div className="title">
                        <div>DELETE MOVIE</div>
                        <button onClick={this.closeModal}>X</button>
                    </div>
                    
                    <div className="form-field">
                        Are you sure you want to delete this movie?
                    </div >
                    
                    <div className="action-buttons">
                        <button className="submit" onClick={this.closeModal}>CONFIRM</button>
                    </div>
                </form>
            </ReactModal>
        </>);
    }

    private readonly closeModal = 
        () => this.setState({isOpened: false});
    
    private readonly openModal = 
       () => this.setState({isOpened: true});
}
