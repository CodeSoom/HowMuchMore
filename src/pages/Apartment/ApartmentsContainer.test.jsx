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
          지번: 1,
          아파트: '아크로리버파크',
          date: '2021-03',
          전용면적: '129.92',
          거래금액: '470,000',
        },
        {
          지번: 2,
          아파트: '서울',
          date: '2021-02',
          전용면적: '200.27',
          거래금액: '420,000',
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
