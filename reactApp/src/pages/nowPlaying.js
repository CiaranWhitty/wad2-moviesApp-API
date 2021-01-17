import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import AddToFavoritesButton from '../components/buttons/addToFavorites'
import { MoviesContext } from '../contexts/moviesContext';

const NowPlayingMoviesPage = () => {
  const context = useContext(MoviesContext);
  
  const now_playing = context.now_playing.filter((m) => {
    return !("load-now_playing" in m);
  });

  return (
    <>
    {context.now_playing.map(movie => { return <>{movie.id},{movie.title}<br /></> })}
    </>

  );
};

export default NowPlayingMoviesPage;