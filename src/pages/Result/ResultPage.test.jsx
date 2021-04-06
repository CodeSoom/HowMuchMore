import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { render, screen } from '@testing-library/react';

import ResultPage from './ResultPage';

describe('ResultPage', () => {
  const profile = {
    isNew: false,
    name: '신형탁',
    age: 29,
    salary: 5000,
    asset: 10000,
  };

  const apartment = {
    name: '아크로리버파크',
    date: '2021-03',
    district: '반포동',
    area: '129.92',
    price: '470,000',
    lotNumber: 1,
  };

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      apartment,
      userFields: profile,
    }));
  });

  it('renders result page', () => {
    render((
      <MemoryRouter>
        <ResultPage />
      </MemoryRouter>
    ));

    expect(screen.getByText('결과')).toBeInTheDocument();
  });
});
