import React from 'react';

import { render, screen } from '@testing-library/react';

import ApartmentsContainer from './ApartmentsContainer';

describe('ApartmentsContainer', () => {
  it('renders Apartments', () => {
    render((
      <ApartmentsContainer apartmentCategory="riverside" />
    ));

    expect(screen.getByText('riverside')).toBeInTheDocument();
  });
});
