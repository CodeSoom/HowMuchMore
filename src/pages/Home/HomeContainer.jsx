import React from 'react';

import Home from './Home';

export default function HomeContainer({ onClick }) {
  return (
    <Home
      onClick={onClick}
    />
  );
}
