import * as React from 'react';
import './FilterBar.scss';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { searchMovies } from '../../redux/actions';

const FilterBar = () => {
  const [search, setSearch] = React.useState('');
  const dispatch = useDispatch();

  const history = useHistory();
  const searchCb = React.useCallback(() => {
    history.push({ pathname: '/search', search: `?search=${search}` });
  }, [search]);

  const location = useLocation();
  React.useEffect(() => {
    if (location.search.indexOf('search') > 0) {
      const urlSearch = location.search.split('=')[1];
      setSearch(urlSearch);
      dispatch(searchMovies(urlSearch));
    }
  }, [location]);

  return (
    <div className="filter-bar">
      <input value={search} onChange={(event) => setSearch(event.target.value)} type="text" placeholder="What do you want to watch?" />
      <button type="button" onClick={searchCb}>SEARCH</button>
    </div>
  );
};

export default FilterBar;
