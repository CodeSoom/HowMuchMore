import React from 'react';

import useLink from '../../helpers/useLink';

import NewProfileContainer from './NewProfileContainer';

export default function NewProfilePage() {
  const { goBack } = useLink();

  return (
    <NewProfileContainer onClick={goBack} />
  );
}
