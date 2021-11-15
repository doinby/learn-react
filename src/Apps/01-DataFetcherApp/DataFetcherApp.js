import React from 'react';
import Fetcher from './Fetcher';

export default function DataFetcherApp() {
  const url = 'https://swapi.dev/api/people/1/';

  return (
    <>
      <Fetcher
        url={url}
        render={({loading, data}) => {
          return <p>{loading ? 'Loading...' : JSON.stringify(data)}</p>;
        }}
      />
    </>
  );
}
