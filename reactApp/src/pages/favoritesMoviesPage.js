import React, {useContext} from "react";
import PageTemplate from '../components/templateMovieListPage'
import AddReviewButton from '../components/buttons/addReview'
import { MoviesContext } from '../contexts/moviesContext';

const FavoriteMoviesPage = props => {
  const context = useContext(MoviesContext);
  const favorites = context.movies.filter( m => m.favorite )
  
  return (
    <PageTemplate
    title={"Favorite Movies"}
    movies={favorites}
    action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default FavoriteMoviesPage;