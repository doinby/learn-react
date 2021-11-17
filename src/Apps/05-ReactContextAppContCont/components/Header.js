import React from 'react';
import UserContext from '../UserContext';

export default function Header() {
    return (
      <UserContext.Consumer>
        {(username) => (
          <header>
            <h1>{`Welcome ${username}!`}</h1>
          </header>
        )}
      </UserContext.Consumer>
    );
}
