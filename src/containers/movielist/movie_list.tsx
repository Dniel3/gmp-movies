import * as React from 'react';
import './movie_list.scss';
import MovieItem from '../../components/movie/movie';
import { Link } from 'react-router-dom';

export interface Movie {
    //Movie unique identifier
    id: number;
    // Movie title
    title: string;
    // Movie tagline
    tagline:string;
    // Movie average raiting
    vote_average: number;
    // Total count of votes for the movie
    vote_count: number;
    // Movie release date. Example: 2016-12-29
    release_date: string;
    // Url to the poster image
    poster_path: string;
    // Short description of the movie
    overview: string;
    // Movie production budget
    budget: number;
    // Movie revenue
    revenue: number;
    // Movie duration time
    runtime: number;
    // Movie genres;
    genres: string[];
}

interface MovieListProps {
 movies: Movie[];
}

const MovieList = ({movies}: MovieListProps) => {
    return movies.length ?  <>    
        <p>{movies.length} movies found</p>
        <div className="movies">{
            movies.map((movie, index) => 
                (<MovieItem {...{movie}} key={`${movie.id}-movie`}/>))
        }</div>
    </> : <h5>Movies not found</h5>
};

export default MovieList