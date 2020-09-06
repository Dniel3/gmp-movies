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
import { Categories } from './containers/categorylist/category_list';

ReactModal.setAppElement('#app');

const MOVIES: Movie[] = [
    {
        id: 'q1',
        title: 'Sonic',
        posterUrl: 'https://www.joblo.com/assets/images/joblo/posters/2019/11/SonicPoster.jpg',
        year: 2020,
        categories: Categories.ADVENTURE,
        overview: 'sonic in Green hills',
        rating: 5,
    },
    {
        id: 'q2',
        title: 'Sonic',
        posterUrl: 'https://www.joblo.com/assets/images/joblo/posters/2019/11/SonicPoster.jpg',
        year: 2020,
        categories: Categories.ADVENTURE,
        overview: 'sonic in Green hills',
        rating: 5,
    },
    {
        id: 'q3',
        title: 'Sonic',
        posterUrl: 'https://www.joblo.com/assets/images/joblo/posters/2019/11/SonicPoster.jpg',
        year: 2020,
        categories: Categories.ADVENTURE,
        overview: 'sonic in Green hills',
        rating: 5,
    },
    {
        id: 'q4',
        title: 'Sonic',
        posterUrl: 'https://www.joblo.com/assets/images/joblo/posters/2019/11/SonicPoster.jpg',
        year: 2020,
        categories: Categories.ADVENTURE,
        overview: 'sonic in Green hills',
        rating: 5,
    },
    {
        id: 'q5',
        title: 'Sonic',
        posterUrl: 'https://www.joblo.com/assets/images/joblo/posters/2019/11/SonicPoster.jpg',
        year: 2020,
        categories: Categories.ADVENTURE,
        overview: 'sonic in Green hills',
        rating: 5,
    },
    {
        id: 'q6',
        title: 'Sonic',
        posterUrl: 'https://www.joblo.com/assets/images/joblo/posters/2019/11/SonicPoster.jpg',
        year: 2020,
        categories: Categories.ADVENTURE,
        overview: 'sonic in Green hills',
        rating: 5,
    },
    {
        id: 'q7',
        title: 'Sonic',
        posterUrl: 'https://www.joblo.com/assets/images/joblo/posters/2019/11/SonicPoster.jpg',
        year: 2020,
        categories: Categories.ADVENTURE,
        overview: 'sonic in Green hills',
        rating: 5,
    },
    {
        id: 'q8',
        title: 'Sonic',
        posterUrl: 'https://www.joblo.com/assets/images/joblo/posters/2019/11/SonicPoster.jpg',
        year: 2020,
        categories: Categories.ADVENTURE,
        overview: 'sonic in Green hills',
        rating: 5,
    },
    {
        id: 'q9',
        title: 'Sonic',
        posterUrl: 'https://www.joblo.com/assets/images/joblo/posters/2019/11/SonicPoster.jpg',
        year: 2020,
        categories: Categories.ADVENTURE,
        overview: 'sonic in Green hills',
        rating: 5,
    },
];

interface AppState {
    movies: Movie[];
}

export interface SelectedMovie {
     movie: Movie|null; 
     setMovie: React.Dispatch<React.SetStateAction<Movie|null>>;
}

const App = () => {

    const [state, setState] = React.useState<AppState>({movies: []});
    const [movie, setMovie] = React.useState<Movie|null>(null);

    React.useEffect(() => {
        setState({movies: MOVIES});
    }, [state.movies]);

    return (<>
                <Header {...{movie, setMovie}} />
                <ErrorBoundary hasErrors={false}>
                    <Home movies={state.movies} setMovie={setMovie} />
                </ErrorBoundary>
                <Footer><Logo /></Footer>
            </>);
};

ReactDOM.render(
    <App />, document.getElementById('app')
);
