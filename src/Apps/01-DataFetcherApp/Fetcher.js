/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';

export default function Fetcher(props) {
  const [state, setState] = useState({
    loading: false,
    data: null,
  });

  useEffect(() => {
    setState({loading: true});
    fetch(props.url)
      .then((response) => response.json())
      .then((data) => {
        setState({data: data, loadig: false});
      });
  }, []);

  return <>{props.render(state)}</>;
}

console.clear();
