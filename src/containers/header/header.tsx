import * as React from 'react';
import FilterBar from '../../components/filterbar/filter_bar'
import Logo from '../../components/logo/logo';
import './header.scss';
import AddMovieDialog from '../../components/moviedialogs/add_movie';
import { useTypedSelector } from '../../redux/store';
import MovieDetails from '../../components/moviedetails/movie_details';
import { Link } from 'react-router-dom';

const Header = () => {
    const movie = useTypedSelector(state => state.selectedMovie);

    if(movie) return <MovieDetails {...movie} />;

    return <div className="header">
        <div className="row-1">
            <Link to="/"><Logo/></Link>
            <AddMovieDialog />
        </div>
        <div className="row-2">FIND YOUR MOVIE</div>
        <FilterBar />
    </div>;
};

export default Header
