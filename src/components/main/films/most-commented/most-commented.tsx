import React from "react";
import { FilmType } from "../../../../../mock";
import FilmsList from "../films-list/films-list";

export default function MostCommented(props: { films: FilmType[] }): JSX.Element {
  const films = props.films.sort((film, nextFilm) => nextFilm.comments.length - film.comments.length).slice(0, 2);
  return (
    <section className="films-list--extra">
      <h2 className="films-list__title">Most commented</h2>
      <FilmsList films={films} />
    </section>
  )
};
