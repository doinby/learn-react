/* eslint-disable no-unused-vars */
import React from 'react';
import {withToggler} from './HOCs/withToggler';

function Menu(props) {
  return (
    <div className='toggle-menu'>
      <button onClick={props.toggle}>
        {!props.on ? 'Hide Menu' : 'Show Menu'}
      </button>
      <nav style={{display: !props.on ? 'flex' : 'none'}}>
        <h2>Signed in as Coder123</h2>
        <a href='https://'>Your Profile</a>
        <a href='https://'>Your Repositories</a>
        <a href='https://'>Your Stars</a>
        <a href='https://'>Your Gists</a>
      </nav>
    </div>
  );
}

const superMenuComponent = withToggler(Menu);
export default superMenuComponent;
