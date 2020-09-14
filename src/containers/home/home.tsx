import * as React from 'react';
import GenreList from '../genrelist/genre_list';
import './home.scss';
import MovieList, { Movie } from '../movielist/movie_list';

interface HomeProps {
    movies: Movie[];
}

const Home = 
    (props: HomeProps) => 
        <div className="home">
            <div className="actions">
                <div className="genres"><GenreList /></div>
                <div className="sort">
                    <label htmlFor="movie">SORT BY: </label>
                    <select name="movie">
                        <option value="date" key="sort-date">RELEASE DATE</option>
                        <option value="genre" key="sort-genre">GENRE</option>
                        <option value="rating" key="sort-rating">RATING</option>
                    </select>
                </div>
            </div>
            <MovieList movies={props.movies} />
        </div>;

export default Home
