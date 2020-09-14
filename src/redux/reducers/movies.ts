import { MovieState } from "../store";
import { MovieAction, MoviesActions } from "../actions";

export const INITIAL_STATE: MovieState = {
    loading: false,
    movies: [],
    selectedMovie: null,
    error: '',
};

const moviesReducer = (state: MovieState = INITIAL_STATE, action: MovieAction) => {
    switch(action.type) {
        case MoviesActions.CREATE: {
            return {...state, ...action.payload, loading: false,};
        }
        case MoviesActions.DELETE: {
            return {};
        }
        case MoviesActions.UPDATE: {
            return {};
        }
        case MoviesActions.SORT: {
            return {};
        }
        case MoviesActions.FILTER: {
            return {};
        }
        case MoviesActions.LIST: {
            return {...state, ...action.payload, loading: false,};
        }
        case MoviesActions.LOADING: {
            return {...state, loading: true};
        }
        case MoviesActions.ERROR: {
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        }
        case MoviesActions.SELECTED: {
            return {...state, ...action.payload};
        }
        default:
            return state; 
    };  
};

export default moviesReducer;