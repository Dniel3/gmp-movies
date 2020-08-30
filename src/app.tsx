import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactModal from 'react-modal';

import Footer from './components/footer/footer';
import Logo from './components/logo/logo';
import Header from './containers/header/header';
import Home from './containers/home/home';
import ErrorBoundary from './error_boundary';
import { MovieProps } from './containers/movielist/movie_list';

import './app.scss';
import { Categories } from './containers/categorylist/category_list';

ReactModal.setAppElement('#app');

const MOVIES: MovieProps[] = [
    {
        id: 'q1',
        title: 'Sonic',
        posterUrl: 'https://www.joblo.com/assets/images/joblo/posters/2019/11/SonicPoster.jpg',
        year: 2020,
        categories: Categories.ADVENTURE,
        overview: 'sonic in Green hills',
    },
    {
        id: 'q2',
        title: 'Sonic',
        posterUrl: 'https://www.joblo.com/assets/images/joblo/posters/2019/11/SonicPoster.jpg',
        year: 2020,
        categories: Categories.ADVENTURE,
        overview: 'sonic in Green hills',
    },
    {
        id: 'q3',
        title: 'Sonic',
        posterUrl: 'https://www.joblo.com/assets/images/joblo/posters/2019/11/SonicPoster.jpg',
        year: 2020,
        categories: Categories.ADVENTURE,
        overview: 'sonic in Green hills',
    },
    {
        id: 'q4',
        title: 'Sonic',
        posterUrl: 'https://www.joblo.com/assets/images/joblo/posters/2019/11/SonicPoster.jpg',
        year: 2020,
        categories: Categories.ADVENTURE,
        overview: 'sonic in Green hills',
    },
    {
        id: 'q5',
        title: 'Sonic',
        posterUrl: 'https://www.joblo.com/assets/images/joblo/posters/2019/11/SonicPoster.jpg',
        year: 2020,
        categories: Categories.ADVENTURE,
        overview: 'sonic in Green hills',
    },
    {
        id: 'q6',
        title: 'Sonic',
        posterUrl: 'https://www.joblo.com/assets/images/joblo/posters/2019/11/SonicPoster.jpg',
        year: 2020,
        categories: Categories.ADVENTURE,
        overview: 'sonic in Green hills',
    },
    {
        id: 'q7',
        title: 'Sonic',
        posterUrl: 'https://www.joblo.com/assets/images/joblo/posters/2019/11/SonicPoster.jpg',
        year: 2020,
        categories: Categories.ADVENTURE,
        overview: 'sonic in Green hills',
    },
    {
        id: 'q8',
        title: 'Sonic',
        posterUrl: 'https://www.joblo.com/assets/images/joblo/posters/2019/11/SonicPoster.jpg',
        year: 2020,
        categories: Categories.ADVENTURE,
        overview: 'sonic in Green hills',
    },
    {
        id: 'q9',
        title: 'Sonic',
        posterUrl: 'https://www.joblo.com/assets/images/joblo/posters/2019/11/SonicPoster.jpg',
        year: 2020,
        categories: Categories.ADVENTURE,
        overview: 'sonic in Green hills',
    },
];

interface AppState {
    movies: MovieProps[];
}

class App extends React.Component<{}, AppState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            movies: [],
        };
    }

    componentDidMount() {
        this.setState({movies: MOVIES,});
    }

    render() {
        return (<>
                    <Header />
                    <ErrorBoundary hasErrors={false}>
                        <Home movies={this.state.movies} />
                    </ErrorBoundary>
                    <Footer><Logo /></Footer>
                </>);
    }
}

ReactDOM.render(
    <App />, document.getElementById('app')
);
