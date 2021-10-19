import React from "react";
import { FilmType } from "../../../../../mock";
import FilmsList from "../films-list/films-list";

export default function TopRated(props: { films: FilmType[] }): JSX.Element {
  const films: FilmType[] = props.films.sort((film, nextFilm) => nextFilm.rating - film.rating).slice(0, 2);
  return (
    <section className="films-list--extra">
      <h2 className="films-list__title">Top rated</h2>
      <FilmsList films={films} />
    </section>
  )
};
