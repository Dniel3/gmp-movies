import * as React from 'react';
import './Genre.scss';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { filterMovies } from '../../redux/actions';
import { Genres } from '../../constants/genres';

interface GenreProps {
  name: string;
}

// PATERN: Class vs React.createClass vs stateless. Prefer function over arrow.
export default function Genre({ name }: GenreProps) {
  const dispatch = useDispatch();

  const history = useHistory();

  const location = useLocation();

  React.useEffect(() => {
    if (location.search.indexOf('filter') > 0) {
      dispatch(filterMovies(location.search.split('=')[1]));
    }
  }, [location]);

  const filter = React.useCallback(() => {
    const genres = name === Genres.ALL ? '' : name;

    history.push({ pathname: '/filter', search: `?filter=${genres}` });
  }, []);

  return (
    <div role="button" onClick={filter} className="genre">
      {name.toUpperCase()}
    </div>
  );
}
