import React from 'react';
import {withToggler} from './HOCs/withToggler';

function Favourite(props) {
  return (
    <div className='toggle-favourite'>
      <h2>Click 💚 to favourite</h2>
      <div className='favourite-btn' onClick={props.toggle}>
        {props.on ? '💚' : '🤍'}
      </div>
    </div>
  );
}

const superFavouriteComponent = withToggler(Favourite);
export default superFavouriteComponent;
