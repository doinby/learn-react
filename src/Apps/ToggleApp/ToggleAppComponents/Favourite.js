import React from 'react';
import Toggler from './components/Toggler';

export default function Favourite(props) {
  return (
    <Toggler
      render={(isOn, toggle) => {
        return (
          <div className='toggle-favourite'>
            <h2>Click 💚 to favourite</h2>
            <div className='favourite-btn' onClick={toggle}>
              {isOn ? '💚' : '🤍'}
            </div>
          </div>
        );
      }}
    />
  );
}
