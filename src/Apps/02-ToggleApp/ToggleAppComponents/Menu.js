/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
// import {withToggler} from './HOCs/withToggler';
import Toggler from './components/Toggler';

export default function Menu() {
  return (
    <Toggler
      render={(isOn, toggle) => {
        return (
          <div className='toggle-menu'>
            <button onClick={toggle}>
              {!isOn ? 'Hide Menu' : 'Show Menu'}
            </button>
            <nav style={{display: `${!isOn ? 'flex' : 'none'}`}}>
              <h2>Signed in as user123</h2>
              <a href='https://'>Yout Profile</a>
              <a href='https://'>Yout Repositories</a>
              <a href='https://'>Yout Stars</a>
              <a href='https://'>Yout Gists</a>
            </nav>
          </div>
        );
      }}
    />
  );
}

// const superMenuComponent = withToggler(Menu);
// export default superMenuComponent;
