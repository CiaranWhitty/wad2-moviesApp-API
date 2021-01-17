import express from 'express';

import {
  getMovies, getMovie, getMovieReviews, getGenres
} from '../tmdb-api';

import genresModel from './genresModel'

const router = express.Router();

// router.get('/genres/list', (req, res, next) => {
//   getGenres()
//   .then(list => res.status(200).send(list))
//   .catch((error) => next(error));
// });

//genres instead of list?
router.get('/genres/list', (req, res, next) => {
  genresModel.find().then(list => res.status(200).send(list)).catch(next);
});

export default router;