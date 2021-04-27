import React from 'react';

import { Helmet } from 'react-helmet';

import useLink from '../../helpers/useLink';

import NewProfileContainer from './NewProfileContainer';

export default function NewProfilePage() {
  const { goTo } = useLink();

  return (
    <>
      <Helmet>
        <title>
          How Much More | Profile
        </title>
      </Helmet>
      <NewProfileContainer onClick={goTo} />
    </>
  );
}
