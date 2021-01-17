import express from 'express';
import {
  getMovies, getMovie, getMovieReviews, getGenres
} from '../tmdb-api';
import movieModel from './movieModel'

const router = express.Router();

router.get('/', (req, res, next) => {
  movieModel.find().then(movies => res.status(200).send(movies)).catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  movieModel.findByMovieDBId(id).then(movie => res.status(200).send(movie)).catch(next);
});

router.get('/:id/reviews', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovieReviews(id)
  .then(reviews => res.status(200).send(reviews))
  .catch((error) => next(error));
});

// router.get('/genres/list', (req, res, next) => {
//   getGenres()
//   .then(list => res.status(200).send(list))
//   .catch((error) => next(error));
// });

//genres instead of list?
router.get('/genres/list', (req, res, next) => {
  movieModel.find().then(list => res.status(200).send(list)).catch(next);
});

export default router;