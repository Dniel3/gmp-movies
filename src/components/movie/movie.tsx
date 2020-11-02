import * as React from 'react';
import './Movie.scss';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import MoreMenu from '../moremenu/MoreMenu';
import { selectMovie } from '../../redux/actions';
import { Movie } from '../../model/movie';

interface MovieItemInterface {
  movie: Movie;
}

const MovieItem = ({ movie }: MovieItemInterface) => {
  const dispatch = useDispatch();

  const history = useHistory();
  const location = useLocation();

  const movieClicked = React.useCallback(() => {
    dispatch(selectMovie(movie));
    location.hash = `film/${movie.id}`;
    history.push(location);
  }, []);

  return (
    <div data-testid="movie-container" className="movie" onClick={movieClicked}>
      <div className="poster">
        <div className="floating-menu"><MoreMenu movie={movie} /></div>
        <img src={movie.poster_path} alt={movie.title} />
      </div>
      <div className="description">
        <div className="row-1">
          <div>{movie.title}</div>
          <div className="year">{movie.release_date.substring(0, 4)}</div>
        </div>
        <div className="row-2">{movie.genres.join(', ')}</div>
      </div>
    </div>
  );
};

export default MovieItem;
