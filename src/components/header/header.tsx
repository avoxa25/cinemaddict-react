import * as React from 'react';

import { Profile } from './profile/profile'

export function Header(): JSX.Element {
  return (
    <header className="header">
      <h1 className="header__logo logo">Cinemaddict</h1>
      <Profile />
    </header>
  )
}

