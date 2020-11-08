import { createSelector } from 'reselect';
import { searchMovies } from './actions';
import { MovieState } from './model';

const selectMovies = (state: MovieState) => state.movies;

const selectClickedMovie = (state: MovieState) => state.selectedMovie;

//PATERN: use reselect library
export const moviesSelector = createSelector(state => state, selectMovies);
export const clickedMovieSelector = createSelector(state => state, selectClickedMovie);
