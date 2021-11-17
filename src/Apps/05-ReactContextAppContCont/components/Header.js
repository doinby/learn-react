import React from 'react';
import { UserContextConsumer } from '../UserContext';

export default function Header() {
    return (
      <UserContextConsumer>
        
        {/* Destructuring username from Provider's object-typed value */}
        {({username}) => (
          <header>
            <h1>{`Welcome back, ${username}!`}</h1>
          </header>
        )}
      </UserContextConsumer>
    );
}
