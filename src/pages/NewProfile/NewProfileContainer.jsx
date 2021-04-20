import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { changeUserFields, setUserFields } from '../../redux/appSlice';

import { get, isExist } from '../../utils/utils';

import NewProfile from './NewProfile';

export default function NewProfileContainer({ onClick }) {
  const dispatch = useDispatch();

  const profile = useSelector(get('userFields'));

  const handleChange = useCallback(({ name, value }) => {
    dispatch(changeUserFields({ name, value }));
  }, [dispatch]);

  const handleClick = useCallback((event) => {
    event.preventDefault();

    if (profile.isNew || isExist(profile)) {
      dispatch(setUserFields(profile));
    }

    onClick({
      url: profile?.isNew ? '/apartments/riverside' : '/result',
    });
  });

  return (
    <NewProfile
      onChange={handleChange}
      onSubmit={handleClick}
      profile={profile}
    />
  );
}
