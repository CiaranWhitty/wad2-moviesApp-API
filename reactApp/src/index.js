import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Movies   from "./pages/movies";
import Upcoming   from "./pages/upcoming";
import NowPlaying   from "./pages/nowPlaying";
import Profile  from "./pages/profile";
import HomePage from "./pages/homePage";
import WatchListMoviesPage from './pages/watchListMoviesPage'
import FavoriteMoviesPage from './pages/favoritesMoviesPage'  


import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import PrivateRoute from "./routes/privateRoute";

import AuthProvider from "./contexts/authContext";
import MovieProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";

import SiteHeader from "./components/siteHeader";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>

        <SiteHeader />

          <MovieProvider>
          <GenresContextProvider> 

            <Switch>
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={SignUpPage} />
              <Route exact path="/" component={HomePage} />
              
              <PrivateRoute path="/movies" component={Movies} />
              <PrivateRoute exact path="/u/" component={HomePage} />
              <PrivateRoute exact path="/u/movies" component={Movies} />
              <PrivateRoute exact path="/u/upcoming" component={Upcoming} />
              <PrivateRoute exact path="/u/nowplaying" component={NowPlaying} />
              <PrivateRoute exact path="/u/movies/favorites" component={FavoriteMoviesPage} />
              <PrivateRoute exact path="/u/movies/watchlist" component={WatchListMoviesPage} />
              <PrivateRoute exact path="/u/profile" component={Profile} />

              <Redirect from="*" to="/" />
            </Switch>
            </GenresContextProvider>

          </MovieProvider>

      </AuthProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
