import * as React from 'react';
import Footer from '../footer/footer';

import { Header } from '../header/header'
import { Main } from '../main/main'
import { films } from '../../../mock';

export function App(): JSX.Element {
    return (
        <React.Fragment>
            <Header />
            <Main films={films} />
            <Footer films={films}/>
        </React.Fragment>
    )
}