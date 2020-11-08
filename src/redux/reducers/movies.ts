import { MovieAction, MoviesActions } from '../actions';
import { MovieState } from '../model';

export const INITIAL_STATE: MovieState = {
  loading: false,
  movies: [],
  selectedMovie: null,
  error: '',
};

//PATERN: Add immutability
const moviesReducer =
  (state: MovieState = INITIAL_STATE, action: MovieAction): Readonly<MovieState> => {
    switch (action.type) {
      case MoviesActions.LIST: {
        return { ...state, ...action.payload, loading: false } as Readonly<MovieState>;
      }
      case MoviesActions.LOADING: {
        return { ...state, loading: true } as Readonly<MovieState>;
      }
      case MoviesActions.ERROR: {
        return {
          ...state,
          error: action.payload,
          loading: false,
        } as Readonly<MovieState>;
      }
      case MoviesActions.SELECTED: {
        return { ...state, ...action.payload } as Readonly<MovieState>;
      }
      default: return state as Readonly<MovieState>;
    }
  };

export default moviesReducer;
