import React from "react";
import { FilmType } from "../../../../../mock";
import Film from "../film/film";

export default function FilmsList(props: any): JSX.Element {
  const films: FilmType[] = props.films;

  const filmsElements: JSX.Element[] = films.map(film => {
    return <Film film={film} />
  });

  return <div className="films-list__container">{filmsElements}</div>;
}