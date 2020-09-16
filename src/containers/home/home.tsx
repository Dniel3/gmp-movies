import * as React from 'react';
import GenreList from '../genrelist/genre_list';
import './home.scss';
import MovieList, { Movie } from '../movielist/movie_list';
import { useDispatch } from 'react-redux';
import { orderMovies } from '../../redux/actions';

interface HomeProps {
    movies: Movie[];
}

const Home = 
    (props: HomeProps) => {
        const dispatch = useDispatch();
        
        return <div className="home">
                <div className="actions">
                    <div className="genres"><GenreList /></div>
                    <div className="sort">
                        <label htmlFor="movie">SORT BY: </label>
                        <select onChange={(event) => dispatch(orderMovies(event.target.value))}>
                            <option value="" key="sort-none">SELECT</option>
                            <option value="release_date" key="sort-date">RELEASE DATE</option>
                            <option value="genres" key="sort-genre">GENRE</option>
                            <option value="vote_average" key="sort-rating">RATING</option>
                        </select>
                    </div>
                </div>
                <MovieList movies={props.movies} />
            </div>;
    }

export default Home
