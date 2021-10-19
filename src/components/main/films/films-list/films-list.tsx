import React from "react";
import { FilmType } from "../../../../../mock";

export default function FilmsList(props: any): JSX.Element {
  const films: FilmType[] = props.films;

  const filmsElements: JSX.Element[] = films.map(film => {
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
        <a className="film-card__comments">{film.comments.length !== 1? film.comments.length + ' comments': film.comments.length + ' comment'}</a>
        <form className="film-card__controls">
          <button className="film-card__controls-item button film-card__controls-item--add-to-watchlist film-card__controls-item--active">Add to watchlist</button>
          <button className="film-card__controls-item button film-card__controls-item--mark-as-watched ">Mark as watched</button>
          <button className="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
        </form>
      </article>
    )
  });

  return <div className="films-list__container">{filmsElements}</div>;
}