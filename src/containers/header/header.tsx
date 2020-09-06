import * as React from 'react';
import FilterBar from '../../components/filterbar/filter_bar'
import Logo  from '../../components/logo/logo';
import './header.scss';
import AddMovieDialog from '../../components/moviedialogs/add_movie';
import { SelectedMovie } from '../../app';

const Header = ({movie, setMovie}: SelectedMovie) => {

    if(movie) {
        return <div className="header">
            <div className="row-1">
                <Logo/>
                <button onClick={() =>setMovie(null)}>Search</button>
            </div>
            <div className="movie-details">
                <img src={movie.posterUrl} alt={movie.title}/>
                <div>
                    <div className="title-rate">
                        {movie.title}<span>{movie.rating}</span>
                    </div>
                    <div className="year-duration">{movie.year}</div>
                    <div className="overview">{movie.overview}</div>
                </div>

            </div>
        </div>;
    }

    return <div className="header">
        <div className="row-1">
            <Logo/>
            <AddMovieDialog />
        </div>
        <div className="row-2">FIND YOUR MOVIE</div>
        <FilterBar />
    </div>;
};

export default Header