import React from 'react';

import { render, screen } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ApartmentPage from './ApartmentPage';

describe('ApartmentPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      apartments: [
        {
          name: '아크로리버파크',
          date: '2021-03',
          size: '129.92',
          price: 470000,
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

  it('renders apartments', () => {
    const params = { id: 'riverside' };

    render((
      <ApartmentPage params={params} />
    ));

    expect(screen.getByText('거주하고 싶은신 아파트를 선택해주세요')).toBeInTheDocument();

    expect(screen.getByRole('link', {
      name: /한강 뷰/,
    })).toBeInTheDocument();
    expect(screen.getByRole('link', {
      name: /상권/,
    })).toBeInTheDocument();

    expect(screen.getByText('아크로리버파크')).toBeInTheDocument();
  });
});
