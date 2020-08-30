import * as React from 'react';
import CategoryList from '../categorylist/category_list';
import './home.scss';
import MovieList, { MovieProps } from '../movielist/movie_list';

interface HomeProps {
    movies: MovieProps[];
}

const Home = 
    (props: HomeProps) => 
        <div className="home">
            <div className="actions">
                <div className="categories"><CategoryList /></div>
                <div className="sort">
                    <label htmlFor="movie">SORT BY: </label>
                    <select name="movie" id="cars">
                        <option value="date" key="sort-date">RELEASE DATE</option>
                        <option value="title" key="sort-title">TITLE</option>
                        <option value="author" key="sort-author">AUTHOR</option>
                    </select>
                </div>
            </div>
            <MovieList movies={props.movies} />
        </div>;

export default Home
