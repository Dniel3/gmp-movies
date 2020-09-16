import * as React from 'react';
import './genre.scss';
import { GenreProps, Genres } from '../../containers/genrelist/genre_list';
import { useDispatch } from 'react-redux';
import { filterMovies } from '../../redux/actions';

const Genre = (props: GenreProps) => {
    const dispatch = useDispatch();

    return <div onClick={() => dispatch(filterMovies(props.name === Genres.ALL ? '' : props.name))} 
            className="genre">
        {props.name.toUpperCase()}
    </div>; 
}

export default Genre
