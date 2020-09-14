import * as React from 'react';
import './genre.scss';
import { GenreProps } from '../../containers/genrelist/genre_list';

const Genre = (props: GenreProps) => 
    <p className="genre">{props.name}</p>; 

export default Genre
