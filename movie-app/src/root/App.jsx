import React from 'react';
import './App.scss';
import { Redirect, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AuthPage from '../views/AuthPage';
import NavBar from '../components/NavBar';
import fire from '../lib/Firebase/fire';
import { setAuthUserData } from '../redux/actions/authActions';
import MoviesPageContainer from "../views/MoviesPage/MoviesPageContainer";
import CategoryMoviesPageContainer from "../views/CategoryMoviesPage/CategoryMoviesPageContainer";
import MovieIndexPageContainer from "../views/MovieIndexPage/MovieIndexPageContainer";


function App() {
  const dispatch = useDispatch();

  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch(setAuthUserData(user.uid, user.email));
    }
  });

  return (
    <BrowserRouter>
      <NavBar />

      <Route exact path="/">
        <Redirect to="/movies" />
      </Route>

      <Route exact path="/movies" render={() => <MoviesPageContainer />} />

      <Route exact path="/movies/category/:path" render={() => <CategoryMoviesPageContainer />} />

      <Route exact path="/movies/:movieId" render={() => <MovieIndexPageContainer />} />

      <Route path="/login" render={() => <AuthPage path="login" />} />

      <Route path="/signup" render={() => <AuthPage path="signup" />} />
    </BrowserRouter>
  );
}

export default App;
