import * as React from 'react';

import { Header } from '../header/header'
import { Main } from '../main/main'

export function App(): JSX.Element {
    return (
        <React.Fragment>
            <Header />
            <Main />
        </React.Fragment>
    )
}