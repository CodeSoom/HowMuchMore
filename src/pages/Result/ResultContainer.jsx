import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setEstimation } from '../../redux/appSlice';

import { get } from '../../utils/utils';

import Result from './Result';

export default function ResultContainer({ onClick }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setEstimation());
  }, []);

  const profile = useSelector(get('userFields'));
  const apartment = useSelector(get('apartment'));
  const isPyeong = useSelector(get('isPyeong'));
  const esitamtion = useSelector(get('estimation'));

  return (
    <>
      <Result
        profile={profile}
        apartment={apartment}
        isPyeong={isPyeong}
        estimation={esitamtion}
        onClick={onClick}
      />
    </>
  );
}
