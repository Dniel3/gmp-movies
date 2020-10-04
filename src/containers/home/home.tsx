import * as React from 'react';
import GenreList from '../genrelist/genre_list';
import './home.scss';
import MovieList, { Movie } from '../movielist/movie_list';
import { useDispatch } from 'react-redux';
import { orderMovies } from '../../redux/actions';
import { useHistory, useLocation } from 'react-router';

interface HomeProps {
    movies?: Movie[];
}

const Home = 
    ({movies}: HomeProps) => {
        const dispatch = useDispatch();

        const history = useHistory();

        const [orderChange, setOrderChange] = React.useState('');
    
        const location = useLocation();
        React.useEffect(() => {
            if(location.search.indexOf('orderBy') > 0) {
                const urlSearch = location.search.split('=')[1];
                setOrderChange(urlSearch);
                dispatch(orderMovies(urlSearch));
            }
        }, [location]);

        return <div className="home" style={ movies && movies.length ? {} : {height: '100%'}}>
                <div className="actions">
                    <div className="genres"><GenreList /></div>
                    <div className="sort">
                        <label htmlFor="movie">SORT BY: </label>
                        <select value={orderChange} 
                                onChange={(event) => {
                                    const order = event.target.value;
                                    dispatch(orderMovies(order));
                                    history.push({pathname: '/orderBy', search: `?order=${order}`});
                        }}>
                            <option value="" key="sort-none">SELECT</option>
                            <option value="release_date" key="sort-date">RELEASE DATE</option>
                            <option value="genres" key="sort-genre">GENRE</option>
                            <option value="vote_average" key="sort-rating">RATING</option>
                        </select>
                    </div>
                </div>
                {movies ? <MovieList movies={movies} /> : <div className="empty">Search Movies</div>}
            </div>;
    }

export default Home
