import React from 'react';

import { Helmet } from 'react-helmet';

import useLink from '../../helpers/useLink';

import HomeContainer from './HomeContainer';

export default function HomePage() {
  const { goTo } = useLink();

  return (
    <>
      <Helmet>
        <title>
          How Much More | Face The Reality
        </title>
      </Helmet>
      <HomeContainer onClick={goTo} />
    </>
  );
}
