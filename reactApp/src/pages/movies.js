import React from 'react';
import { useContext} from 'react';
import { MoviesContext } from '../contexts/moviesContext';

const Movies = () => {
    const context = useContext(MoviesContext);
    return <>
        <h2>Movies Data </h2>
        <div>
            {context.movies.map(movie => { return <>{movie.id},{movie.title}<br /></> })}
        </div>
    </>
}

export default Movies;
