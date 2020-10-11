import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Movie } from '../../containers/movielist/movie_list';
import Logo from '../logo/logo';
import { selectMovie } from '../../redux/actions';
import './movie_details.scss';
import { useHistory, useLocation } from 'react-router';

const MovieDetails = (movie: Movie) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation()

    const redirectHome = React.useCallback(() => {
        dispatch(selectMovie(null))
        location.hash = '';
        history.push(location);
    }, []);

    return (
        <div className="header">
            <div className="row-1">
                <Logo/>
                <button onClick={redirectHome}>Search</button>
            </div>
            <div className="movie-details">
                <img src={movie.poster_path} alt={movie.title}/>
                <div>
                    <div className="title-rate">
                        {movie.title}<span>{movie.vote_average}</span>
                    </div>
                    <div className="overview">{movie.tagline}</div>
                    <div className="year-duration">{movie.release_date.substring(0, 4)}</div>
                    <div className="overview">{movie.overview}</div>
                </div>
            </div>
        </div>);
}

export default MovieDetails;