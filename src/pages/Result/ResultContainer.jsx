import React, { useEffect, useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setEstimation, setUserFields, changeUserFields } from '../../redux/appSlice';

import { get, isExist } from '../../utils/utils';

import Result from './Result';

export default function ResultContainer({ onClick, goBack }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setEstimation());
  }, []);

  const profile = useSelector(get('userFields'));
  const apartment = useSelector(get('apartment'));
  const esitamtion = useSelector(get('estimation'));

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    if (isExist(profile)) {
      dispatch(setUserFields(profile));
    }

    onClick();
  });

  const handleChange = useCallback(({ name, value }) => {
    dispatch(changeUserFields({ name, value }));
  }, [dispatch]);

  return (
    <article>
      <Result
        profile={profile}
        apartment={apartment}
        estimation={esitamtion}
        onClick={onClick}
        onChange={handleChange}
        onSubmit={handleSubmit}
        goBack={goBack}
      />
    </article>
  );
}
