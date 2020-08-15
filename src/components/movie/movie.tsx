import * as React from 'react';
import './movie.scss';
import { MovieProps } from '../../containers/movielist/movie_list';

const Movie = (props: MovieProps) => <div className="movie">
    <div className="poster"><img src={props.posterUrl} alt={props.title}/></div>
    <div className="description">
        <div className="row-1">
            <div>{props.title}</div>
            <div className="year">{props.year}</div>
        </div>
        <div className="row-2">{props.categories.join(', ')}</div>
    </div>
</div>;

export default Movie
