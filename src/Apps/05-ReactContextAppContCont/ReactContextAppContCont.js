import React from 'react';
import Header from './components/Header';
import { UserContextConsumer } from './UserContext';
import Settings from './components/Settings';
import './ReactContextAppContCont.css';

export default function ReactContextAppContCont() {
  return (
    <>
      <Header />
      <main>
        <UserContextConsumer>
          
          { /* Destructuring username from Provider's object-typed value */}
          {({ username}) => {
            return (
              <>
                <p>There is no new notification for {username.toUpperCase()}! 🎉</p>
                <br/>
                <Settings />
              </>
            );
          }}
          </UserContextConsumer>
        
      </main>
    </>
  );
}

// console.clear();
