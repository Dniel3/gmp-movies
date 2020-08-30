import * as React from 'react';
import './more_menu.scss';
import { EditMovieDialog } from '../moviedialogs/edit_movie';
import { DeleteMovieDialog } from '../moviedialogs/delete_movie';
import { MovieProps } from '../../containers/movielist/movie_list';

const MoreMenu = (props: MovieProps) => {
    return (<>
        <div className="dropdown">
            <div className="container">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="dropdown-content">
                <EditMovieDialog {...props} />
                <DeleteMovieDialog />
            </div>
        </div> 
    </>);
};

export default MoreMenu;
