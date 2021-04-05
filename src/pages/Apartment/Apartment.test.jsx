import React from 'react';

import { render, screen } from '@testing-library/react';

import Apartment from './Apartment';

describe('Apartment', () => {
  const apartments = [
    {
      name: '아크로리버파크',
      date: '2021-03',
      area: '129.92',
      price: '470,000',
      lotNumber: 1,
    },
    {
      name: '서울',
      date: '2021-02',
      area: '200.27',
      price: '420,000',
      lotNumber: 2,
    },
  ];

  context('without apartments', () => {
    it('renders loading', () => {
      render(<Apartment apartments={[]} />);

      expect(screen.getByText('loading')).toBeInTheDocument();
    });
  });

  context('with apartments', () => {
    it('renders Apartment Page', () => {
      render(<Apartment apartments={apartments} />);

      expect(screen.getByText('아크로리버파크')).toBeInTheDocument();
      expect(screen.getByText('서울')).toBeInTheDocument();
    });
  });
});
