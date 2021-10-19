import React, { useState } from 'react';
import { films } from '../../../../mock';
import FilmsList from './films-list/films-list';
import TopRated from './top-rated/top-rated';

export default function Films(): JSX.Element {
  if (!films) return <h2>There are no movies in our database</h2>



  const filmsList = films;
  const previewFilmList = films.slice(0, 5);
  // const topRatedList = createFilmsList(topRated);
  // const mostCommentedList = createFilmsList(mostCommented);
  // const topRated = films.sort((film, nextFilm) => nextFilm.rating - film.rating).slice(0, 2);
  // const mostCommented = films.sort((film, nextFilm) => nextFilm.comments.length - film.comments.length).slice(0, 2);

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
          <FilmsList films={currentFilmsList} />
        <button className="films-list__show-more" onClick={changeListState}>{buttonValue}</button>
      </section>

      <section className="films-list--extra">
        <h2 className="films-list__title">Top rated</h2>
          <TopRated films={filmsList} />
      </section>

      <section className="films-list--extra">
        <h2 className="films-list__title">Most commented</h2>

        <div className="films-list__container">
        </div>
      </section>
    </section>
  )
}