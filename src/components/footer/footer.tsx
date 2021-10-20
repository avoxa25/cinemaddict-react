import React from 'react';
import { FilmType } from '../../../mock';

export default function Footer(props: {films: FilmType[]}): JSX.Element {
  const filmsCount = props.films.length;
  return (
    <footer className="footer">
      <section className="footer__logo logo logo--smaller">Cinemaddict</section>
      <section className="footer__statistics">
        <p>{filmsCount} movies inside</p>
      </section>
    </footer>
  )
}