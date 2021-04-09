import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { render, screen } from '@testing-library/react';

import ResultPage from './ResultPage';

describe('ResultPage', () => {
  const dispatch = jest.fn();

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
    size: '129.92',
    price: '470,000',
    lotNumber: 1,
  };

  const estimation = {
    price: 460000,
    year: 94,
    age: 123,
  };

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      userFields: profile,
      apartment,
      estimation,
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
