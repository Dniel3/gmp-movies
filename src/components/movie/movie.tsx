import * as React from 'react';
import './movie.scss';
import { Movie } from '../../containers/movielist/movie_list';
import MoreMenu from '../moremenu/more_menu';
import { useDispatch } from 'react-redux';
import { selectMovie } from '../../redux/actions';
import { useHistory, useLocation } from 'react-router';

interface MovieProps {
    movie: Movie;
}

const MovieItem = ({movie}: MovieProps) => {

const dispatch = useDispatch();

const history = useHistory();
const location = useLocation();

const movieClicked = React.useCallback(() => {
    dispatch(selectMovie(movie));
    location.hash = 'film/' + movie.id;
    history.push(location);
}, []);

return <div className="movie" onClick={movieClicked} >
        <div className="poster">
            <div className="floating-menu"><MoreMenu {...movie} /></div>
            <img src={movie.poster_path} alt={movie.title}/>
        </div>
        <div className="description">
            <div className="row-1">
                <div>{movie.title}</div>
                <div className="year">{movie.release_date.substring(0, 4)}</div>
            </div>
            <div className="row-2">{movie.genres.join(', ')}</div>
        </div>
    </div>;                                                                                         
};

export default MovieItem
