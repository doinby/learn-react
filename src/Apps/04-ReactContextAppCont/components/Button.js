import React from 'react';

export default function Button(props) {
  const { display, theme, onCLick } = props;
  return (
    <button className={`${theme}-theme`} onClick={onCLick}>
      {display}
    </button>
  );
}
