import React from 'react';

import { Helmet } from 'react-helmet';

import useLink from '../../helpers/useLink';

import { colors, fontWeights } from '../../designSystem';

import ResultContainer from './ResultContainer';

export default function ResultPage() {
  const { goTo } = useLink();

  return (
    <>
      <Helmet>
        <title>
          How Much More | Result
        </title>
      </Helmet>
      <h2 style={{
        marginBottom: '1rem',
        padding: '.25rem 0',

        color: colors.themeColor,
        fontSize: '1.22rem',
        fontWeight: fontWeights.bold,
      }}
      >
        선택하신 아파트는
        <br />
        바로...
      </h2>
      <ResultContainer
        onClick={goTo}
      />
    </>
  );
}
