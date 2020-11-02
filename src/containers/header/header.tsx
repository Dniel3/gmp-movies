import * as React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import AddMovieDialog from '../../components/moviedialogs/AddMovie';
import { useTypedSelector } from '../../redux/store';
import MovieDetails from '../../components/moviedetails/MovieDetails';
import FilterBar from '../../components/filterbar/FilterBar';
import Logo from '../../components/logo/Logo';

const Header = () => {
  const movie = useTypedSelector((state) => state.selectedMovie);

  if (movie) return <MovieDetails movie={movie} />;

  return (
    <div className="header">
      <div className="row-1">
        <Link to="/"><Logo /></Link>
        <AddMovieDialog />
      </div>
      <div className="row-2">FIND YOUR MOVIE</div>
      <FilterBar />
    </div>
  );
};

export default Header;
