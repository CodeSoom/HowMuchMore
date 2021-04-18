import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setEstimation } from '../../redux/appSlice';

import { get } from '../../utils/utils';

import Result from './Result';

export default function ResultContainer({ onClick, goBack }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setEstimation());
  }, []);

  const profile = useSelector(get('userFields'));
  const apartment = useSelector(get('apartment'));
  const esitamtion = useSelector(get('estimation'));

  return (
    <>
      <Result
        profile={profile}
        apartment={apartment}
        estimation={esitamtion}
        onClick={onClick}
        goBack={goBack}
      />
    </>
  );
}
