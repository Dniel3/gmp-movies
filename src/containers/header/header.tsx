import * as React from 'react';
import FilterBar from '../../components/filterbar/filter_bar'
import Logo  from '../../components/logo/logo';
import './header.scss';
import { AddMovieDialog } from '../../components/moviedialogs/add_movie';

const Header = () => <div className="header">
    <div className="row-1">
        <Logo/>
        <AddMovieDialog />
    </div>
    <div className="row-2">FIND YOUR MOVIE</div>
    <FilterBar />
</div>;

export default Header