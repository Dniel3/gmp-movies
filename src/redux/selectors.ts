import { MovieState } from './model';

export const getMovies = (state: MovieState) => state.movies;

export const getSelectedMovie = (state: MovieState) => state.selectedMovie;
