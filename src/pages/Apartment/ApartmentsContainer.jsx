import React, { useEffect, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadApartments,
  setApartment,
  changeSizeUnit,
} from '../../redux/appSlice';

import { get } from '../../utils/utils';

import Apartments from './Apartments';

export default function ApartmentContainer({ apartmentCategory, onClick }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadApartments(apartmentCategory));
  }, [apartmentCategory]);

  const profile = useSelector(get('userFields'));
  const apartments = useSelector(get('apartments'));
  const isPyeong = useSelector(get('isPyeong'));

  const changeApartment = useCallback((apartment) => {
    dispatch(setApartment(apartment));
  }, [dispatch]);

  const switchSizeUnit = useCallback(() => {
    dispatch(changeSizeUnit());
  }, [dispatch]);

  return (
    <>
      <Apartments
        profile={profile}
        apartments={apartments}
        isPyeong={isPyeong}
        onClick={onClick}
        changeApartment={changeApartment}
        switchSizeUnit={switchSizeUnit}
      />
    </>
  );
}
