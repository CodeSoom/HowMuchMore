import React from 'react';

import { useSelector } from 'react-redux';

import { get } from '../../utils/utils';

import Home from './Home';

export default function HomeContainer({ onClick }) {
  const profile = useSelector(get('userFields'));

  return (
    <Home
      profile={profile}
      onClick={onClick}
    />
  );
}
