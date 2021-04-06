import React from 'react';

import { useSelector } from 'react-redux';

import { get } from '../../utils/utils';

import Result from './Result';

export default function ResultContainer({ onClick, goBack }) {
  const profile = useSelector(get('userFields'));
  const apartment = useSelector(get('apartment'));

  return (
    <article>
      <Result
        profile={profile}
        apartment={apartment}
        onClick={onClick}
        goBack={goBack}
      />
    </article>
  );
}
