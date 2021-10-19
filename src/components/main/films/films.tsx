import React, { useState } from 'react';
import { films } from '../../../../mock';

export default function Films(): JSX.Element {
  if (!films) return <h2>There are no movies in our database</h2>

  const topRated = films.sort((film, nextFilm) => nextFilm.rating - film.rating).slice(0, 2);
  const mostCommented = films.sort((film, nextFilm) => nextFilm.comments.length - film.comments.length).slice(0, 2);

  function createFilmsList(films: any[]): JSX.Element[] {
    return films.map(film => {
      return (
        <article className="film-card">
          <h3 className="film-card__title">{film.name}</h3>
          <p className="film-card__rating">{film.rating}</p>
          <p className="film-card__info">
            <span className="film-card__year">{film.info.year}</span>
            <span className="film-card__duration">{film.info.duration}</span>
            <span className="film-card__genre">{film.info.genre}</span>
          </p>
          <img src={film.imgLink} alt={film.name + "'s poster"} className="film-card__poster" />
          <p className="film-card__description">{film.description}</p>
          <a className="film-card__comments">{film.comments.length}</a>
          <form className="film-card__controls">
            <button className="film-card__controls-item button film-card__controls-item--add-to-watchlist film-card__controls-item--active">Add to watchlist</button>
            <button className="film-card__controls-item button film-card__controls-item--mark-as-watched ">Mark as watched</button>
            <button className="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
          </form>
        </article>
      )
    });
  }

  const filmsList = createFilmsList(films);
  const previewFilmList = filmsList.slice(0, 5);
  const topRatedList = createFilmsList(topRated);
  const mostCommentedList = createFilmsList(mostCommented);

  let [currentFilmsList, setCurrentFilmsList] = useState(previewFilmList);
  let [buttonValue, setButtonValue] = useState(`Show more`);

  function changeListState(): void {
    if (buttonValue === `Show more`) {
      setCurrentFilmsList(filmsList);
      setButtonValue(`Hide`);
      return;
    }
    setCurrentFilmsList(previewFilmList);
    setButtonValue(`Show more`);
  }

  return (
    <section className="films">
      <section className="films-list">
        <h2 className="films-list__title visually-hidden">All movies. Upcoming</h2>

        <div className="films-list__container">
          {currentFilmsList}
        </div>

        <button className="films-list__show-more" onClick={changeListState}>{buttonValue}</button>
      </section>

      <section className="films-list--extra">
        <h2 className="films-list__title">Top rated</h2>

        <div className="films-list__container">
          {topRatedList}
        </div>
      </section>

      <section className="films-list--extra">
        <h2 className="films-list__title">Most commented</h2>

        <div className="films-list__container">
          {mostCommentedList}
        </div>
      </section>
    </section>
  )
}