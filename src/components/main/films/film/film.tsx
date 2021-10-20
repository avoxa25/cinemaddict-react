import React, { useState } from "react";
import { FilmType } from "../../../../../mock";

export default function Film(props: { film: FilmType }): JSX.Element {
  const film = props.film;

  const [inWatchlist, setStateInWatchlist] = useState(film.inWatchlist);
  const [isWatched, setStateIsWatched] = useState(film.isWatched);
  const [isFavorite, setStateIsFavorite] = useState(film.isFavorite);

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
      <a className="film-card__comments">{film.comments.length !== 1 ? film.comments.length + ' comments' : film.comments.length + ' comment'}</a>
      <form className="film-card__controls">
        <button
          className={"film-card__controls-item button film-card__controls-item--add-to-watchlist" + (inWatchlist ? " film-card__controls-item--active" : "")}
          onClick={() => setStateInWatchlist(!inWatchlist)}
        >Add to watchlist</button>
        <button
          className={"film-card__controls-item button film-card__controls-item--mark-as-watched" + (isWatched ? " film-card__controls-item--active" : "")}
          onClick={() => setStateIsWatched(!isWatched)}
        >Mark as watched</button>
        <button
          className={"film-card__controls-item button film-card__controls-item--favorite" + (isFavorite ? " film-card__controls-item--active" : "")}
          onClick={() => setStateIsFavorite(!isFavorite)}
        >Mark as favorite</button>
      </form>
    </article>
  )
};
