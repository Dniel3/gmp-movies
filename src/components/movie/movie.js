import React from 'react';
import propTypes from 'prop-types';
import './movie.scss';

const Movie = (props) => <div className="movie">
    <div className="poster"><img src={props.posterUrl} alt={props.title}/></div>
    <div className="description">
        <div className="row-1">
            <div>{props.title}</div>
            <div className="year">{props.year}</div>
        </div>
        <div className="row-2">{props.categories.join(', ')}</div>
    </div>
</div>;

Movie.propTypes = {
    title: propTypes.string.isRequired,
    posterUrl: propTypes.string.isRequired,
    categories: propTypes.array,
    year: propTypes.number.isRequired,
};

export default Movie
