import React, {useState} from 'react';

export default function Toggle(props) {
  const [isOn, setOn] = useState(false);

  function toggle() {
    setOn((prevState) => {
      return !prevState;
    });
  }

  return <>{props.render(isOn, toggle)}</>;
}
