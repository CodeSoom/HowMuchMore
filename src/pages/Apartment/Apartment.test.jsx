import React from 'react';

import { render, screen } from '@testing-library/react';

import Apartment from './Apartment';

describe('Apartment', () => {
  const apartments = [
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
