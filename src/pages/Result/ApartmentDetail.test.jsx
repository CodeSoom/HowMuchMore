import React from 'react';

import { render, screen } from '@testing-library/react';

import ApartmentDetail from './ApartmentDetail';

describe('ApartmentDetail', () => {
  const apartment = {
    name: '아크로리버파크',
    date: '2021-03',
    district: '반포동',
    size: '129.92',
    pyeong: '39',
    price: 470000,
    lotNumber: 1,
  };

  context('when isPyeong false', () => {
    it('renders apartment details with size unit square metre', () => {
      render((
        <ApartmentDetail
          apartment={apartment}
          isPyeong={false}
        />));

      expect(screen.getByText('아크로리버파크')).toBeInTheDocument();
      expect(screen.getByText('반포동')).toBeInTheDocument();
      expect(screen.getByText(/129.92/)).toBeInTheDocument();
    });
  });

  context('when isPyeong true', () => {
    it('renders apartment details with size unit pyeong', () => {
      render((
        <ApartmentDetail
          apartment={apartment}
          isPyeong
        />));

      expect(screen.getByText('아크로리버파크')).toBeInTheDocument();
      expect(screen.getByText('반포동')).toBeInTheDocument();
      expect(screen.getByText(/39 평/)).toBeInTheDocument();
    });
  });

  it('renders price of apartment per pyeong', () => {
    render((
      <ApartmentDetail
        apartment={apartment}
        isPyeong
      />
    ));

    expect(screen.getByText(/1억 2,051만/));
  });
});
