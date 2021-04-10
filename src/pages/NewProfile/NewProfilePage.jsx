import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import NewProfileContainer from './NewProfileContainer';

export default function NewProfilePage() {
  const history = useHistory();

  const handleClick = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <NewProfileContainer onClick={handleClick} />
  );
}
