import React from 'react';
import CategoryList from '../categorylist/category_list';
import './home.scss';
import MovieList from '../movielist/movie_list';

const Home = () => <div className="home">
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
    <MovieList />
</div>;

export default Home
