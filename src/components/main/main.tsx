import * as React from 'react';
import Films from './films/films';
import Header from './header/header';

export function Main(): JSX.Element {
    return (
        <main className="main">
            <Header />

            <ul className="sort">
                <li><a href="#" className="sort__button sort__button--active">Sort by default</a></li>
                <li><a href="#" className="sort__button">Sort by date</a></li>
                <li><a href="#" className="sort__button">Sort by rating</a></li>
            </ul>

            <Films />
        </main>
    )
}