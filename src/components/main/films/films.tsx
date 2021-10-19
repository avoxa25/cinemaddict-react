import React, {useState} from 'react';
import { films } from '../../../../mock';

export default function Films(): JSX.Element {
  if (!films) return <h2>There are no movies in our database</h2>

  const filmsList: JSX.Element[] = films.map(film => {
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
  const previewFilmList = filmsList.slice(0, 5);
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
          <article className="film-card">
            <h3 className="film-card__title">The Man with the Golden Arm</h3>
            <p className="film-card__rating">9.0</p>
            <p className="film-card__info">
              <span className="film-card__year">1955</span>
              <span className="film-card__duration">1h 59m</span>
              <span className="film-card__genre">Drama</span>
            </p>
            <img src="./images/posters/the-man-with-the-golden-arm.jpg" alt="" className="film-card__poster" />
            <p className="film-card__description">Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…</p>
            <a className="film-card__comments">18 comments</a>
            <form className="film-card__controls">
              <button className="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
              <button className="film-card__controls-item button film-card__controls-item--mark-as-watched  film-card__controls-item--active">Mark as watched</button>
              <button className="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
            </form>
          </article>

          <article className="film-card">
            <h3 className="film-card__title">The Great Flamarion</h3>
            <p className="film-card__rating">8.9</p>
            <p className="film-card__info">
              <span className="film-card__year">1945</span>
              <span className="film-card__duration">1h 18m</span>
              <span className="film-card__genre">Mystery</span>
            </p>
            <img src="./images/posters/the-great-flamarion.jpg" alt="" className="film-card__poster" />
            <p className="film-card__description">The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events leading up to it in flashback.The Grea…</p>
            <a className="film-card__comments">12 comments</a>
            <form className="film-card__controls">
              <button className="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
              <button className="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
              <button className="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
            </form>
          </article>
        </div>
      </section>

      <section className="films-list--extra">
        <h2 className="films-list__title">Most commented</h2>

        <div className="films-list__container">
          <article className="film-card">
            <h3 className="film-card__title">Santa Claus Conquers the Martians</h3>
            <p className="film-card__rating">2.3</p>
            <p className="film-card__info">
              <span className="film-card__year">1964</span>
              <span className="film-card__duration">1h 21m</span>
              <span className="film-card__genre">Comedy</span>
            </p>
            <img src="./images/posters/santa-claus-conquers-the-martians.jpg" alt="" className="film-card__poster" />
            <p className="film-card__description">The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Marti…</p>
            <a className="film-card__comments">465 comments</a>
            <form className="film-card__controls">
              <button className="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
              <button className="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
              <button className="film-card__controls-item button film-card__controls-item--favorite film-card__controls-item--active">Mark as favorite</button>
            </form>
          </article>

          <article className="film-card">
            <h3 className="film-card__title">Made for Each Other</h3>
            <p className="film-card__rating">5.8</p>
            <p className="film-card__info">
              <span className="film-card__year">1939</span>
              <span className="film-card__duration">1h 32m</span>
              <span className="film-card__genre">Comedy</span>
            </p>
            <img src="./images/posters/made-for-each-other.png" alt="" className="film-card__poster" />
            <p className="film-card__description">John Mason (James Stewart) is a young, somewhat timid attorney in New York City.He has been doing his job well, and he has a chance of bei…</p>
            <a className="film-card__comments">56 comments</a>
            <form className="film-card__controls">
              <button className="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
              <button className="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
              <button className="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
            </form>
          </article>
        </div>
      </section>
    </section>
  )
}