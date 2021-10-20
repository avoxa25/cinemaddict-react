import React, { useState } from 'react';
import { FilmType } from '../../../mock';
import Films from './films/films';
import Header from './header/header';

export function Main(props: { films: FilmType[] }): JSX.Element {
    let films = props.films;

    const [isByDefault, sortByDefault] = useState(true);
    const [isByDate, sortByDate] = useState(false);
    const [isByRating, sortByRating] = useState(false);
    const stateSetters = [
        sortByDefault,
        sortByDate,
        sortByRating
    ]

    function sort(type: string, callback: Function): void {
        switch(type) {
            case `default`:
                films = props.films;
                break;
            case `date`:
                films.sort((film, nextFilm) => nextFilm.info.year - film.info.year);
                break;
            case `rating`:
                films.sort((film, nextFilm) => nextFilm.rating - film.rating);
                break;
        }
        stateSetters.forEach(setter => callback === setter ? setter(true) : setter(false));
    }

    return (
        <main className="main">
            <Header />

            <ul className="sort">
                <li><a
                    href="#"
                    className={"sort__button" + (isByDefault ? " sort__button--active" : "")}
                    onClick={() => sort(`default`, sortByDefault)}>
                    Sort by default
                </a>
                </li>
                <li><a href="#"
                    className={"sort__button" + (isByDate ? " sort__button--active" : "")}
                    onClick={() => sort(`date`, sortByDate)}>
                    Sort by date
                </a>
                </li>
                <li><a href="#"
                    className={"sort__button" + (isByRating ? " sort__button--active" : "")}
                    onClick={() => sort(`rating`, sortByRating)}>
                    Sort by rating
                </a>
                </li>
            </ul>

            <Films films={films}/>
        </main>
    )
}