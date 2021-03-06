import React, { useState } from "react";
import Header from "../headerMovieList";
import MovieList from "../movieList";
import FilterControls from "../filterControls";

import {  } from 'semantic-ui-react'

const MovieListPageTemplate = ({ movies, title, action }) => {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genre = Number(genreFilter)
  
  let displayedMovies = movies
    .filter(m => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter(m => {
      return  genre > 0
        ? m.genre_ids.includes(Number(genreFilter))
        : true;
    });
    
  console.log("dm"+displayedMovies)

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <>
      
      <Header title={title} numMovies={displayedMovies.length} />
      
      <FilterControls onUserInput={handleChange} numMovies={displayedMovies.length}/>

          <MovieList
          action={action}
          movies={displayedMovies}
          // movies={movies}
          />
      
    </>
  );
};

export default MovieListPageTemplate ;