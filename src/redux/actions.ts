import { ThunkAction } from 'redux-thunk';
import { ActionCreator } from 'redux';
import { MOVIES_API_ROOT_URL } from '../movies_api';
import { Movie } from '../model/movie';

export enum MoviesActions {
  UNKNOWN = 'movies/unknown',
  LOADING = 'movies/loading',
  ERROR = 'movies/error',
  LIST = 'movies/list',
  CREATE = 'movies/create',
  UPDATE = 'movies/update',
  DELETE = 'movies/delete',
  FILTER = 'movies/filter',
  SORT = 'movies/filter',
  SELECTED = 'movies/selected',
}

type MovieAsynAction =
  ActionCreator<ThunkAction<Promise<MovieAction>, Movie[], unknown, MovieAction>>;

export interface MovieAction {
  type: MoviesActions;
  payload: {};
}

export const listMovies = (movies: Movie[]): MovieAction => ({
  type: MoviesActions.LIST,
  payload: { movies },
});

export const selectMovie = (selectedMovie: Movie | null): MovieAction => ({
  type: MoviesActions.SELECTED,
  payload: { selectedMovie },
});

export const startLoading = () => ({ type: MoviesActions.LOADING, payload: { loading: true } });

export const error = (error: string) => ({ type: MoviesActions.ERROR, payload: { error } });

export const fetchMovies:
  MovieAsynAction = () => async (dispatch) => {
    dispatch(startLoading());
    const response = await fetch(MOVIES_API_ROOT_URL)
      .then((result) => result.json());
    return dispatch(listMovies(response.data));
  };

export const deleteMovie:
  MovieAsynAction = (movieId: number) => async (dispatch) => {
    dispatch(startLoading());
    const deleteRequest = new Request(`${MOVIES_API_ROOT_URL}/${movieId}`, { method: 'DELETE' });
    await fetch(deleteRequest);
    return dispatch(fetchMovies());
  };

export const createMovie:
  MovieAsynAction = (movie: Partial<Movie>) => async (dispatch) => {
    dispatch(startLoading());
    const createRequest = new Request(`${MOVIES_API_ROOT_URL}`,
      {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: { 'Content-Type': 'application/json' },
      });
    await fetch(createRequest);
    return dispatch(fetchMovies());
  };

export const editMovie:
  MovieAsynAction = (movie: Movie) => async (dispatch) => {
    dispatch(startLoading());
    const editRequest = new Request(`${MOVIES_API_ROOT_URL}`,
      {
        method: 'PUT',
        body: JSON.stringify(movie),
        headers: { 'Content-Type': 'application/json' },
      });
    await fetch(editRequest);
    return dispatch(fetchMovies());
  };

export const filterMovies:
  MovieAsynAction = (filter: string) => async (dispatch) => {
    dispatch(startLoading());
    const response = await fetch(`${MOVIES_API_ROOT_URL}?filter=${filter}`)
      .then((result) => result.json());
    return dispatch(listMovies(response.data));
  };

export const orderMovies:
  MovieAsynAction = (orderBy: string) => async (dispatch) => {
    dispatch(startLoading());
    const response = await fetch(`${MOVIES_API_ROOT_URL}?sortBy=${orderBy}&sortOrder=desc`)
      .then((result) => result.json());
    return dispatch(listMovies(response.data));
  };

export const searchMovies:
  MovieAsynAction = (searchBy: string) => async (dispatch) => {
    dispatch(startLoading());
    const response = await fetch(`${MOVIES_API_ROOT_URL}?search=${searchBy}&searchBy=title`)
      .then((result) => result.json());
    return dispatch(listMovies(response.data));
  };
