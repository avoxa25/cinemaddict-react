import React, { useState } from 'react';
import { FilmType } from '../../../../mock';
import FilmsList from './films-list/films-list';
import MostCommented from './most-commented/most-commented';
import TopRated from './top-rated/top-rated';

export default function Films(props: {films: FilmType[]}): JSX.Element {
  const films = props.films;
  if (!films) return <h2>There are no movies in our database</h2>

  const filmsList = films;
  const previewFilmList = films.slice(0, 5);

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
      <TopRated films={filmsList} />
      <MostCommented films={filmsList} />
    </section>
  )
}