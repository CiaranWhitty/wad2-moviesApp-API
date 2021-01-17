import express from 'express';

import genresModel from './genresModel'

const router = express.Router();

//genres instead of list?
router.get('/genre/movie/list', (req, res, next) => {
  genresModel.find().then(list => res.status(200).send(list)).catch(next);
});

export default router;