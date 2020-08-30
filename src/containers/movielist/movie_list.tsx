import * as React from 'react';
import Movie from '../../components/movie/movie';
import './movie_list.scss';
import { CategoryProps, Categories } from '../categorylist/category_list';

export interface MovieProps {
    id: string;
    title: string;
    posterUrl: string;
    year: number;
    categories: Categories;
    overview: string;
}

interface MovieListProps {
 movies: MovieProps[];
}

const MovieList = (props: MovieListProps) => <>
    <p>{props.movies.length} movies found</p>
    <div className="movies">{
        props.movies.map((movie, index) => 
            (<Movie {...movie} key={`${movie.id}-movie-${index}`}/>))
    }</div>
</>;

export default MovieList