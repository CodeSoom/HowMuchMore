import { useCallback } from 'react';

import { useHistory } from 'react-router-dom';

export default function useLink() {
  const history = useHistory();

  const goTo = useCallback(({ url }) => {
    history.push(url);
  }, [history]);

  const goBack = useCallback(() => {
    history.goBack();
  }, [history]);

  return { goTo, goBack };
}
