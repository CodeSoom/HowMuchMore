import React, { useCallback } from 'react';

import { useHistory } from 'react-router-dom';

import ResultContainer from './ResultContainer';

export default function ResultPage() {
  const history = useHistory();

  const goBack = useCallback(() => {
    history.goBack();
  }, [history]);

  const handleClick = useCallback(({ url }) => {
    history.push(url);
  }, [history]);

  return (
    <section>
      <header>
        결과
      </header>
      <ResultContainer
        onClick={handleClick}
        goBack={goBack}
      />
    </section>
  );
}
