import * as React from 'react';
import FilterBar from '../../components/filterbar/filter_bar'
import Logo  from '../../components/logo/logo';
import './header.scss';
import AddMovieDialog from '../../components/moviedialogs/add_movie';
import { SelectedMovie } from '../../app';
import { useTypedSelector } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { selectMovie } from '../../redux/actions';

const Header = () => {
    const dispatch = useDispatch();
    const movie = useTypedSelector(state => state.selectedMovie);

    if(movie) {
        return <div className="header">
            <div className="row-1">
                <Logo/>
                <button onClick={() => dispatch(selectMovie(null))}>Search</button>
            </div>
            <div className="movie-details">
                <img src={movie.poster_path} alt={movie.title}/>
                <div>
                    <div className="title-rate">
                        {movie.title}<span>{movie.vote_average}</span>
                    </div>
                    <div className="overview">{movie.tagline}</div>
                    <div className="year-duration">{movie.release_date.substring(0, 4)}</div>
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