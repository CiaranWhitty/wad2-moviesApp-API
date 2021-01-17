import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import AddToFavoritesButton from '../components/buttons/addToFavorites'
import { MoviesContext } from '../contexts/moviesContext';

const DiscoverMoviesPage = () => {
  const context = useContext(MoviesContext);
  
  const movies = context.movies.filter((m) => {
    return !("favorite" in m);
  });

  console.log("m: "+ movies);

  {context.movies.map(movie => { return <>{movie.id},{movie.title}<br /></> })}
  
  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddToFavoritesButton movie={movie} />;
      }}
    />
  );
};

export default DiscoverMoviesPage;