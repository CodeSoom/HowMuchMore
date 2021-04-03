import React from 'react';

import { useSelector } from 'react-redux';

import { get } from '../../utils/utils';

import MyPage from './Profile';

export default function ProfileContainer({ onClickNewProfile }) {
  const profile = useSelector(get('userFields'));

  return (
    <MyPage
      profile={profile}
      onClickNewProfile={onClickNewProfile}
    />
  );
}
