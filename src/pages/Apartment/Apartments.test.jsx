import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import Apartments from './Apartments';

describe('Apartments', () => {
  const handleClick = jest.fn();
  const changeApartment = jest.fn();

  const apartments = [
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
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('without apartments', () => {
    it('renders loading', () => {
      render(<Apartments apartments={[]} />);

      expect(screen.getByText('loading')).toBeInTheDocument();
    });
  });

  context('with apartments', () => {
    it('renders Apartment Page', () => {
      render(<Apartments apartments={apartments} />);

      expect(screen.getByText('아크로리버파크')).toBeInTheDocument();
      expect(screen.getByText('서울')).toBeInTheDocument();

      expect(screen.getAllByText('보기')).toHaveLength(2);
    });

    it("calls handleClick upon clicking '보기' button", () => {
      render(<Apartments
        apartments={apartments}
        onClick={handleClick}
        apartment={apartments[0]}
        changeApartment={changeApartment}
      />);

      fireEvent.click(screen.getAllByText('보기')[0]);

      expect(handleClick).toBeCalledWith({ url: '/result' });
    });
  });
});
