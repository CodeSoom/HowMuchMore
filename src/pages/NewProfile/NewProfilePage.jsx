import React from 'react';

import useLink from '../../helpers/useLink';

import NewProfileContainer from './NewProfileContainer';

export default function NewProfilePage() {
  const { goTo } = useLink();

  return (
    <NewProfileContainer onClick={goTo} />
  );
}
