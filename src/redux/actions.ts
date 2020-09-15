import { Movie } from "../containers/movielist/movie_list";
import { ThunkAction } from "redux-thunk";
import { ActionCreator } from "redux";
import { MOVIES_API_ROOT_URL } from "../movies_api";

export enum MoviesActions {
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

export interface MovieAction {
    type: MoviesActions;
    payload: {};
}

export const listMovies = (movies: Movie[]): MovieAction => ({
    type: MoviesActions.LIST,
    payload: {movies},
});

export const selectMovie = (selectedMovie: Movie|null): MovieAction => ({
    type: MoviesActions.SELECTED,
    payload: {selectedMovie},
});

export const startLoading = (loading = true) => ({type: MoviesActions.LOADING, payload: {loading}});

export const error = (error: string) => ({type: MoviesActions.ERROR, payload: {error}});

export const fetchMovies: ActionCreator<ThunkAction<Promise<MovieAction>, Movie[], unknown, MovieAction>> = () => {
    return async (dispatch) => {
        dispatch(startLoading());
        const response = await fetch(MOVIES_API_ROOT_URL).then(result => result.json());
        return dispatch(listMovies(response.data));
    };
}

export const deleteMovie: ActionCreator<ThunkAction<Promise<MovieAction>, Movie[], unknown, MovieAction>> = (movieId: number) => {
    return async (dispatch) => {
        dispatch(startLoading());
        const deleteRequest = new Request(`${MOVIES_API_ROOT_URL}/${movieId}`, {method: 'DELETE'});
        await fetch(deleteRequest).then(result => result.json());
        return dispatch(fetchMovies());
    };
}

export const createMovie: ActionCreator<ThunkAction<Promise<MovieAction>, Movie[], unknown, MovieAction>> = (movie: Partial<Movie>) => {
    return async (dispatch) => {
        dispatch(startLoading());
        const createRequest = new Request(`${MOVIES_API_ROOT_URL}`, 
                {
                    method: 'POST', 
                    body: JSON.stringify(movie),                    
                    headers: {'Content-Type': 'application/json'},
        });
        console.log(createRequest);
        const response = await fetch(createRequest).then(result => result.json());
        console.log(response);
        return dispatch(fetchMovies());
    };
}

export const editMovie: ActionCreator<ThunkAction<Promise<MovieAction>, Movie[], unknown, MovieAction>> = (movie: Movie) => {
    return async (dispatch) => {
        dispatch(startLoading());
        const createRequest = new Request(`${MOVIES_API_ROOT_URL}`, 
                { 
                    method: 'PUT', 
                    body: JSON.stringify(movie),  
                    headers: {'Content-Type': 'application/json'},
            });
        console.log(createRequest);

        const response = await fetch(createRequest).then(result => result.json());
        console.log(response);

        return dispatch(fetchMovies());
    };
}
