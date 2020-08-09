import React from 'react';
import FilterBar from '../../components/filterbar/filter_bar'
import Logo  from '../../components/logo/logo';
import './header.scss';

const Header = () => <div className="header">
    <div className="row-1">
        <Logo/>
        <button>+ ADD MOVIE</button>
    </div>
    <div className="row-2">FIND YOUR MOVIE</div>
    <FilterBar />
</div>;

export default Header