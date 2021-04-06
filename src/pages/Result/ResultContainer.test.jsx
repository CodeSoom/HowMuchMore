import React from 'react';

import { render, screen } from '@testing-library/react';

import { useSelector } from 'react-redux';

import given from 'given2';

import { initialUserField } from '../../fixtures/initials';

import ResultContainer from './ResultContainer';

describe('ResultContainer', () => {
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
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      userFields: given.profile,
      apartment,
    }));
  });

  context('with profile', () => {
    given('profile', () => profile);

    it('renders result page', () => {
      render(<ResultContainer />);

      expect(screen.getByText('아크로리버파크')).toBeInTheDocument();
      expect(screen.getByText('129.92')).toBeInTheDocument();
      expect(screen.getByText('470,000')).toBeInTheDocument();
      expect(screen.getByText('2021-03')).toBeInTheDocument();
      expect(screen.getByText('반포동')).toBeInTheDocument();
      expect(screen.getByText('1')).toBeInTheDocument();
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
