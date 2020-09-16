import * as React from 'react';
import './filter_bar.scss';
import { useDispatch } from 'react-redux';
import { searchMovies } from '../../redux/actions';

const FilterBar = () => {
    const [search, setSearch] = React.useState('');
    const dispatch = useDispatch();

    return <div className="filter-bar">
        <input value={search} onChange={(event) => setSearch(event.target.value)} type="text" placeholder="What do you want to watch?"/>
        <button onClick={() => dispatch(searchMovies(search))}>SEARCH</button>
    </div>;
}

export default FilterBar
