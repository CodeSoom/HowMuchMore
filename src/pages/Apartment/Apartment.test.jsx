import React from 'react';

import { render, screen } from '@testing-library/react';

import Apartment from './Apartment';

describe('Apartment', () => {
  const apartment = {
    name: '아크로리버파크',
    date: '2021-03',
    district: '반포동',
    size: '129.92',
    price: 470000,
    lotNumber: 1,
  };

  it('renders apartment', () => {
    render(<Apartment apartment={apartment} />);

    expect(screen.getByText('아크로리버파크')).toBeInTheDocument();
    expect(screen.getByText('반포동')).toBeInTheDocument();
    expect(screen.getByText('129.92')).toBeInTheDocument();
  });
});
