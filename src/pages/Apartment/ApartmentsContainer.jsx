import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadApartments } from '../../redux/appSlice';

import { get } from '../../utils/utils';

import Apartment from './Apartment';

export default function Apartments({ apartmentCategory }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadApartments(apartmentCategory));
  }, [apartmentCategory]);

  const apartments = useSelector(get('apartments'));

  return (
    <section>
      {apartmentCategory}
      <Apartment apartments={apartments} />
    </section>
  );
}
