import React from 'react';
import MovieCard from './MovieCard';

const ListPage = (props) => {
    let arr_placeholder = props.movies
        let sorted_data = arr_placeholder.sort((a, b) => Date.parse(new Date(a.release_date)) - Date.parse(new Date(b.release_date)))        
        const movielist = sorted_data.reverse().map(movie  => {
            let poster_path
            movie.poster_path === null ? poster_path = require('../images/no-image.png') : poster_path = "https://image.tmdb.org/t/p/w185" + movie.poster_path            
            return <MovieCard key={movie.id} title={movie.title} description={movie.overview} poster={poster_path} rating={movie.vote_average} id={movie.id} selectedMovieHandler={props.selectedMovieHandler}/>
        })
        return (
            <div className="listpage" >
                { movielist }
            </div>
        )

}

export default ListPage;