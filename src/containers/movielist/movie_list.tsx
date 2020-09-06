import * as React from 'react';
import './movie_list.scss';
import {Categories } from '../categorylist/category_list';
import MovieItem from '../../components/movie/movie';

export interface Movie {
    id: string;
    title: string;
    posterUrl: string;
    year: number;
    categories: Categories;
    overview: string;
    rating?: number;
}

interface MovieListProps {
 movies: Movie[];
 setMovie: React.Dispatch<React.SetStateAction<Movie|null>>;
}

const MovieList = ({movies, setMovie}: MovieListProps) => <>
    <p>{movies.length} movies found</p>
    <div className="movies">{
        movies.map((movie, index) => 
            (<MovieItem {...{movie, setMovie}} key={`${movie.id}-movie-${index}`}/>))
    }</div>
</>;

export default MovieList