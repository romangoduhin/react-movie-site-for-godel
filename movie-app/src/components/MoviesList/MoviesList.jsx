import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './MoviesList.module.scss';
import MoviePoster from '../MoviePoster';
import Loader from '../Loader';

function MoviesList({ title, path, movies }) {
  if (movies.length === 0) return <Loader />;

  return (
    <div className={style.wrapper}>
      <header className={style.categoryTitle}>
        <div className={style.title}>{title}</div>

        <span>category</span>
      </header>

      <main className={style.moviesList}>
        {movies.slice(0, 5).map((movie) => <MoviePoster key={movie.id} movie={movie} />)}
      </main>

      <footer className={style.buttonBlock}>
        <NavLink to={path}>
          <button type="button">More</button>
        </NavLink>
      </footer>
    </div>
  );
}

MoviesList.defaultProps = {
  title: '',
  path: '',
  movies: [],
};

MoviesList.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })),
};

export default MoviesList;
