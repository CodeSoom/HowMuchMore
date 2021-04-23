import React from 'react';

import { render, screen } from '@testing-library/react';

import Estimation from './Estimation';

describe('Estimation', () => {
  const profile = {
    isNew: false,
    name: '신형탁',
    age: 29,
    monthlySavings: 5000,
    currentBalance: 10000,
  };

  const estimation = {
    price: 460000,
    year: '94',
    age: '123',
  };

  it('renders Estimation', () => {
    render((
      <Estimation
        profile={profile}
        estimation={estimation}
      />));

    expect(screen.getByText(/46억/)).toBeInTheDocument();
    expect(screen.getByText(/94/)).toBeInTheDocument();
    expect(screen.getByText(/123/)).toBeInTheDocument();
  });
});
