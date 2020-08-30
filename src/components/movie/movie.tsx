import * as React from 'react';
import './movie.scss';
import { MovieProps } from '../../containers/movielist/movie_list';
import MoreMenu from '../moremenu/more_menu';

const Movie = (props: MovieProps) => <div className="movie">
    <div className="poster">
        <div className="floating-menu"><MoreMenu {...props} /></div>
        <img src={props.posterUrl} alt={props.title}/>
    </div>
    <div className="description">
        <div className="row-1">
            <div>{props.title}</div>
            <div className="year">{props.year}</div>
        </div>
        <div className="row-2">{props.categories}</div>
    </div>
</div>;

export default Movie
