import React from 'react';

export default function Footer(props: any): JSX.Element {
  const totalFilms = props.totalFilms;
  return (
    <footer className="footer">
      <section className="footer__logo logo logo--smaller">Cinemaddict</section>
      <section className="footer__statistics">
        <p>{totalFilms} movies inside</p>
      </section>
    </footer>
  )
}