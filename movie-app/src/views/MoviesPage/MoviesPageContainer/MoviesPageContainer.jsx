import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MoviesPage from '../MoviesPage';
import Loader from '../../../components/Loader/Loader';
import { setAllMoviesTypesThunk } from '../../../redux/thunks/moviesThunks';

function MoviesPageContainer() {
  const {
    nowPlaying, topRated, popular, upcoming,
  } = useSelector((state) => state.movies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAllMoviesTypesThunk());
  },
  []);

  if (nowPlaying.length === 0
    || topRated.length === 0
    || popular.length === 0
    || upcoming.length === 0) return <Loader />;

  return (
    <MoviesPage nowPlaying={nowPlaying} topRated={topRated} popular={popular} upcoming={upcoming} />
  );
}

export default MoviesPageContainer;
