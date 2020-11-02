import * as React from 'react';
import Genre from '../../components/genre/Genre';
import { Genres } from '../../constants/genres';

const GenreList = () => (
  <>
    <Genre name={Genres.ALL} key={`genre-${Genres.ALL}`} />
    <Genre name={Genres.DOCUMENTARY} key={`genre-${Genres.DOCUMENTARY}`} />
    <Genre name={Genres.COMEDY} key={`genre-${Genres.COMEDY}`} />
    <Genre name={Genres.HORROR} key={`genre-${Genres.HORROR}`} />
    <Genre name={Genres.CRIME} key={`genre-${Genres.CRIME}`} />
    <Genre name={Genres.ADVENTURE} key={`genre-${Genres.ADVENTURE}`} />
  </>
);

export default GenreList;
