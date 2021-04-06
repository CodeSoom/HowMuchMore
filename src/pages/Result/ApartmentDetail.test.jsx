import React from 'react';

import { render, screen } from '@testing-library/react';

import ApartmentDetail from './ApartmentDetail';

describe('ApartmentDetail', () => {
  const apartment = {
    name: '아크로리버파크',
    date: '2021-03',
    district: '반포동',
    area: '129.92',
    price: '470,000',
    lotNumber: 1,
  };

  it('renders apartment details', () => {
    render(<ApartmentDetail apartment={apartment} />);

    expect(screen.getByText('아크로리버파크')).toBeInTheDocument();
    expect(screen.getByText('129.92')).toBeInTheDocument();
    expect(screen.getByText('470,000')).toBeInTheDocument();
    expect(screen.getByText('2021-03')).toBeInTheDocument();
    expect(screen.getByText('반포동')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
