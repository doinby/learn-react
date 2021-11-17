import React from 'react';

export default function Button(props) {
  const { display, theme } = props;
  return (
    <button className={`${theme}-theme`}>
      {display}
    </button>
  );
}
