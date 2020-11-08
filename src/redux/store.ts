import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import moviesReducer from './reducers/movies';
import { MovieState } from './model';

export interface MovieStore {
    movies: MovieState;
}

export default createStore(moviesReducer, applyMiddleware(thunkMiddleware));
