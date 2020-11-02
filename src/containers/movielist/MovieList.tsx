import * as React from 'react';
import './MovieList.scss';
import MovieItem from '../../components/movie/Movie';
import { Movie } from '../../model/movie';

interface MovieListProps {
  movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps) => (movies.length ? (
  <>
    <p>
      {movies.length}
      {' '}
      movies found
    </p>
    <div className="movies">
      {
        movies.map((movie) => (<MovieItem movie={movie} key={`${movie.id}-movie`} />))
      }
    </div>
  </>
) : <h5>Movies not found</h5>);

export default MovieList;
