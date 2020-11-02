import * as React from 'react';
import './MoreMenu.scss';
import EditMovieDialog from '../moviedialogs/EditMovie';
import DeleteMovieDialog from '../moviedialogs/delete_movie';
import { Movie } from '../../model/movie';

interface MoreMenuProps {
  movie: Movie;
}

const MoreMenu = ({ movie }: MoreMenuProps) => (
  <>
    <div className="dropdown">
      <div className="container">
        <div />
        <div />
        <div />
      </div>
      <div className="dropdown-content">
        <EditMovieDialog movie={movie} />
        <DeleteMovieDialog movie={movie} />
      </div>
    </div>
  </>
);

export default MoreMenu;
