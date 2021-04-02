import React from 'react';

import { render, screen } from '@testing-library/react';

import ApartmentScreen from './ApartmentScreen';

describe('ApartmentScreen', () => {
  it('renders Apartment Screen', () => {
    render(<ApartmentScreen />);

    expect(screen.getByText('거주하고 싶은신 아파트를 선택해주세요')).toBeInTheDocument();
  });
});
