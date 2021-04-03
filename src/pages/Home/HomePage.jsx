import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import HomeContainer from './HomeContainer';

export default function HomePage() {
  const history = useHistory();

  const handleClick = useCallback(({ url }) => {
    history.push(url);
  }, [history]);

  return (
    <HomeContainer onClick={handleClick} />
  );
}
