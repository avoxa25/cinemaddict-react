

import * as React from 'react';

export function Profile(): JSX.Element {
    return (
        <section className="header__profile profile">
            <p className="profile__rating">Movie Buff</p>
            <img className="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35" />
        </section>
    )
}
