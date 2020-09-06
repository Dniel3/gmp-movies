import * as React from 'react';
import './more_menu.scss';
import { Movie } from '../../containers/movielist/movie_list';
import EditMovieDialog from '../moviedialogs/edit_movie';
import DeleteMovieDialog from '../moviedialogs/delete_movie';

const MoreMenu = (props: Movie) => {
    return (<>
        <div className="dropdown">
            <div className="container">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="dropdown-content">
                <EditMovieDialog {...props} />
                <DeleteMovieDialog {...props} />
            </div>
        </div> 
    </>);
};

export default MoreMenu;
