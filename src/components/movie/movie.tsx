import * as React from 'react';
import './movie.scss';
import { Movie } from '../../containers/movielist/movie_list';
import MoreMenu from '../moremenu/more_menu';
import { useDispatch } from 'react-redux';
import { selectMovie } from '../../redux/actions';

interface MovieProps {
    movie: Movie;
}

const MovieItem = ({movie}: MovieProps) => {

const dispatch = useDispatch();

return <div className="movie" onClick={() => dispatch(selectMovie(movie))} >
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
