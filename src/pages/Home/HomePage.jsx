import React from 'react';

import useLink from '../../helpers/useLink';

import HomeContainer from './HomeContainer';

export default function HomePage() {
  const { goTo } = useLink();

  return (
    <HomeContainer onClick={goTo} />
  );
}
