import React from 'react';

import { render, screen } from '@testing-library/react';

import Estimation from './Estimation';

describe('Estimation', () => {
  const estimation = {
    price: 460000,
    year: '94',
    age: '123',
  };

  it('renders Estimation', () => {
    render(<Estimation estimation={estimation} />);

    expect(screen.getByText(/460,000/)).toBeInTheDocument();
    expect(screen.getByText(/94/)).toBeInTheDocument();
    expect(screen.getByText(/123/)).toBeInTheDocument();
  });
});
