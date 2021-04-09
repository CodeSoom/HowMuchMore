import React from 'react';

import { render, screen } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ApartmentsContainer from './ApartmentsContainer';

describe('ApartmentsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      apartments: [
        {
          name: '아크로리버파크',
          date: '2021-03',
          size: '129.92',
          price: '470,000',
          lotNumber: 1,
        },
        {
          name: '서울',
          date: '2021-02',
          size: '200.27',
          price: '420,000',
          lotNumber: 2,
        },
      ],
    }));
  });

  it('renders Apartment Page', () => {
    render((
      <ApartmentsContainer apartmentCategory="riverside" />
    ));

    expect(screen.getByText('아크로리버파크')).toBeInTheDocument();
    expect(screen.getByText('서울')).toBeInTheDocument();

    expect(dispatch).toBeCalled();
  });
});
