import React from 'react';
import Movie from '../../components/movie/movie';
import './movie_list.scss';

const MOVIES = [
    {
        title: 'Sonic',
        posterUrl: 'https://www.joblo.com/assets/images/joblo/posters/2019/11/SonicPoster.jpg',
        year: 2020,
        categories: ['animation', 'action', 'live action'],
    },
    {
        title: 'Sonic',
        posterUrl: 'https://www.joblo.com/assets/images/joblo/posters/2019/11/SonicPoster.jpg',
        year: 2020,
        categories: ['animation', 'action', 'live action'],
    },
    {
        title: 'Sonic',
        posterUrl: 'https://www.joblo.com/assets/images/joblo/posters/2019/11/SonicPoster.jpg',
        year: 2020,
        categories: ['animation', 'action', 'live action'],
    },
    {
        title: 'Sonic',
        posterUrl: 'https://www.joblo.com/assets/images/joblo/posters/2019/11/SonicPoster.jpg',
        year: 2020,
        categories: ['animation', 'action', 'live action'],
    },
    {
        title: 'Sonic',
        posterUrl: 'https://www.joblo.com/assets/images/joblo/posters/2019/11/SonicPoster.jpg',
        year: 2020,
        categories: ['animation', 'action', 'live action'],
    },
    {
        title: 'Sonic',
        posterUrl: 'https://www.joblo.com/assets/images/joblo/posters/2019/11/SonicPoster.jpg',
        year: 2020,
        categories: ['animation', 'action', 'live action'],
    },
    {
        title: 'Sonic',
        posterUrl: 'https://www.joblo.com/assets/images/joblo/posters/2019/11/SonicPoster.jpg',
        year: 2020,
        categories: ['animation', 'action', 'live action'],
    },
    {
        title: 'Sonic',
        posterUrl: 'https://www.joblo.com/assets/images/joblo/posters/2019/11/SonicPoster.jpg',
        year: 2020,
        categories: ['animation', 'action', 'live action'],
    },
    {
        title: 'Sonic',
        posterUrl: 'https://www.joblo.com/assets/images/joblo/posters/2019/11/SonicPoster.jpg',
        year: 2020,
        categories: ['animation', 'action', 'live action'],
    },
];

const MovieList = () => <>
    <p>{MOVIES.length} movies found</p>
    <div className="movies">{
        MOVIES.map((movie, index) => 
            (<Movie title={movie.title} 
                posterUrl={movie.posterUrl} 
                year={movie.year} 
                categories={movie.categories} 
                key={`${movie.title}-movie-${index}`}/>))
    }</div>
</>;

export default MovieList