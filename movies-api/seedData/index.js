import userModel from '../api/users/userModel';
import movieModel from '../api/movies/movieModel';
import genresModel from '../api/genres/genresModel';
import {movies} from './movies.js';
import {genres} from './genres.js';
import {upcoming} from './upcoming';
import {nowPlaying} from './nowPlaying';

const users = [
  {
    'username': 'user1',
    'password': 'test1',
    // 'favourites': [],
  },
  {
    'username': 'user2',
    'password': 'test2',
  },
];

// deletes all user documents in collection and inserts test data
export async function loadUsers() {
  console.log('load user Data');
    try {
      await userModel.deleteMany();
      await users.forEach(user => userModel.create(user));
      console.info(`(users): ${users.length} users were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load user Data: ${err}`);
    }
  }

// deletes all movies documents in collection and inserts test data
export async function loadMovies() {
  console.log('load Movies data');
  console.log(movies.length);
  try {
    await movieModel.deleteMany();
    await movieModel.collection.insertMany(movies);
    console.info(`(movies): ${movies.length} Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

export async function loadGenres() {
  console.log('load Genres data');
  console.log(genres.length);
  try {
    await genresModel.deleteMany();
    await genresModel.collection.insertMany(genres);
    console.info(`(genres): ${genres.length} genres were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load genres Data: ${err}`);
  }
}

export async function loadUpcomingMovies() {
  console.log('load UpcomingMovies data');
  console.log(upcoming.length);
  try {
    await movieModel.deleteMany();
    await movieModel.collection.insertMany(upcoming);
    console.info(`(upcoming): ${upcoming.length} Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load upcoming movie Data: ${err}`);
  }
}

export async function loadNowPlayingMovies() {
  console.log('load NowPlayingMovies data');
  console.log(nowPlaying.length);
  try {
    await movieModel.deleteMany();
    await movieModel.collection.insertMany(nowPlaying);
    console.info(`(nowPlaying): ${nowPlaying.length} Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load nowPlaying movie Data: ${err}`);
  }
}