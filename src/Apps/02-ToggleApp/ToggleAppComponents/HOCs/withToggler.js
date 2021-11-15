import React, {useState} from 'react';

function Toggler(props) {
  const [isOn, setOn] = useState(false);

  function toggle() {
    setOn((prevState) => {
      return !prevState;
    });
  }

  // This variable could be named anything
  const Component = props.component;
  // props.component is the props that was passed down
  // from line 22

  // Returning a new component with extra abilities
  return <Component on={isOn} toggle={toggle} {...props} />;
}

export function withToggler(component) {
  return function (props) {
    return <Toggler component={component} {...props} />;
  };
}
