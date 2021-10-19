import * as React from 'react';
import Footer from '../footer/footer';

import { Header } from '../header/header'
import { Main } from '../main/main'

export function App(): JSX.Element {
    return (
        <React.Fragment>
            <Header />
            <Main />
            <Footer totalFilms="300"/>
        </React.Fragment>
    )
}