import React from 'react';

import useLink from '../../helpers/useLink';

import ResultContainer from './ResultContainer';

export default function ResultPage() {
  const { goTo, goBack } = useLink();

  return (
    <section>
      <header>
        결과
      </header>
      <ResultContainer
        onClick={goTo}
        goBack={goBack}
      />
    </section>
  );
}
