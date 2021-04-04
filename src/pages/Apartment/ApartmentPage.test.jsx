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

  it('renders apartments', () => {
    const params = { id: 'riverside' };

    render((
      <ApartmentPage params={params} />
    ));

    expect(screen.getByText('거주하고 싶은신 아파트를 선택해주세요')).toBeInTheDocument();

    expect(screen.getByRole('link', {
      name: '한강 뷰',
    })).toBeInTheDocument();
    expect(screen.getByRole('link', {
      name: '우수 상권',
    })).toBeInTheDocument();

    expect(screen.getByText('아크로리버파크')).toBeInTheDocument();
  });
});
