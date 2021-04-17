import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadApartments, setApartment } from '../../redux/appSlice';

import { get } from '../../utils/utils';

import Apartments from './Apartments';

export default function ApartmentContainer({ apartmentCategory, onClick }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadApartments(apartmentCategory));
  }, [apartmentCategory]);

  const apartments = useSelector(get('apartments'));

  function changeApartment(apartment) {
    dispatch(setApartment(apartment));
  }

  return (
    <>
      <Apartments
        apartments={apartments}
        onClick={onClick}
        changeApartment={changeApartment}
      />
    </>
  );
}
