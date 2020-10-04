import * as React from 'react';
import './genre.scss';
import { GenreProps, Genres } from '../../containers/genrelist/genre_list';
import { useDispatch } from 'react-redux';
import { filterMovies } from '../../redux/actions';
import { useHistory, useLocation } from 'react-router';

const Genre = (props: GenreProps) => {
    const dispatch = useDispatch();

    const history = useHistory();

    const location = useLocation();
    React.useEffect(() => {
        if(location.search.indexOf('filter') > 0) {
            dispatch(filterMovies(location.search.split('=')[1]));
        }
    }, [location]);

    return <div onClick={() => {
                const genres = props.name === Genres.ALL ? '' : props.name;
                dispatch(filterMovies(genres));

                history.push({pathname: '/filter', search: `?filter=${genres}`});
            }} 
            className="genre">
        {props.name.toUpperCase()}
    </div>; 
}

export default Genre
