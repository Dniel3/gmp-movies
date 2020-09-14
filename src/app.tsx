import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactModal from 'react-modal';

import Footer from './components/footer/footer';
import Logo from './components/logo/logo';
import Header from './containers/header/header';
import Home from './containers/home/home';
import ErrorBoundary from './error_boundary';
import { Movie } from './containers/movielist/movie_list';

import './app.scss';
import { Provider, useDispatch } from 'react-redux';
import store, { useTypedSelector } from './redux/store';
import { fetchMovies } from './redux/actions';

ReactModal.setAppElement('#app');

export interface SelectedMovie {
     movie: Movie|null; 
     setMovie: React.Dispatch<React.SetStateAction<Movie|null>>;
}

const App = () => {
    const dispatch = useDispatch();

    const movies = useTypedSelector(state => state.movies);

    React.useEffect(() => {
        dispatch(fetchMovies());
    }, []);

    return (<>
                <Header />
                <ErrorBoundary hasErrors={false}>
                    <Home movies={...movies} />
                </ErrorBoundary>
                <Footer><Logo /></Footer>
            </>);
};

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('app')
);
store.subscribe(() => {console.log(store.getState())});
