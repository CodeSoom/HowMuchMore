import React from 'react';

import { render, screen } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import given from 'given2';

import { initialUserField } from '../../fixtures/initials';

import ResultContainer from './ResultContainer';

describe('ResultContainer', () => {
  const dispatch = jest.fn();

  const profile = {
    isNew: false,
    name: '신형탁',
    age: '29',
    monthlySavings: 5000,
    currentBalance: 10000,
  };

  const apartment = {
    name: '아크로리버파크',
    date: '2021-03',
    district: '반포동',
    size: '129.92',
    price: 470000,
    lotNumber: 1,
  };

  const estimation = {
    price: '460000',
    year: '94',
    age: '123',
  };

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      userFields: given.profile,
      apartment,
      estimation: given.estimation,
    }));
  });

  context('with profile', () => {
    given('profile', () => profile);
    given('estimation', () => estimation);

    it('renders result page', () => {
      render(<ResultContainer />);

      expect(screen.getByText('아크로리버파크')).toBeInTheDocument();
      expect(screen.getByText('129.92')).toBeInTheDocument();
      expect(screen.getByText('₩470,000')).toBeInTheDocument();
      expect(screen.getByText('2021-03')).toBeInTheDocument();
      expect(screen.getByText('반포동')).toBeInTheDocument();
      expect(screen.getByText('1')).toBeInTheDocument();

      expect(dispatch).toBeCalled();
    });
  });

  context('without profile', () => {
    given('profile', () => initialUserField);
    it('renders link for user to fill up the profile', () => {
      render(<ResultContainer />);

      expect(screen.getByText('정보를 아직 입력하지 않으셨습니다.')).toBeInTheDocument();

      expect(screen.getByRole('link', {
        name: '내 정보 입력 하러가기',
      })).toBeInTheDocument();
    });
  });
});
