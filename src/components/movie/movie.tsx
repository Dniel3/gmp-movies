import * as React from 'react';
import './movie.scss';
import { Movie } from '../../containers/movielist/movie_list';
import MoreMenu from '../moremenu/more_menu';

interface MovieProps {
    movie: Movie;
    setMovie: React.Dispatch<React.SetStateAction<Movie|null>>;
}

const MovieItem = ({movie, setMovie}: MovieProps) => {

return <div className="movie" onClick={() => setMovie(movie)} >
        <div className="poster">
            <div className="floating-menu"><MoreMenu {...movie} /></div>
            <img src={movie.posterUrl} alt={movie.title}/>
        </div>
        <div className="description">
            <div className="row-1">
                <div>{movie.title}</div>
                <div className="year">{movie.year}</div>
            </div>
            <div className="row-2">{movie.categories}</div>
        </div>
    </div>;                                                                                         
};

export default MovieItem
