import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";

import PublicPage  from "../pages/publicPage";
import Movies   from "../pages/movies";
import Profile  from "../pages/profile";
import HomePage from "../pages/homePage";

import LoginPage from "../pages/loginPage";
import SignUpPage from "../pages/signUpPage";
import PrivateRoute from "../routes/privateRoute";

import AuthProvider from "../contexts/authContext";
import MovieProvider from "../contexts/moviesContext";

import SiteHeader from "../components/siteHeader";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>

        <SiteHeader />
        
          <MovieProvider>
            <Switch>
              <Route path="/public" component={PublicPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={SignUpPage} />,
              <Route exact path="/" component={HomePage} />
              <PrivateRoute path="/movies" component={Movies} />
              <PrivateRoute path="/profile" component={Profile} />
              <Redirect from="*" to="/" />
            </Switch>
          </MovieProvider>

      </AuthProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
