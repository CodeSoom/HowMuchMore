import React from 'react';

import { render, screen } from '@testing-library/react';

import { useSelector } from 'react-redux';

import given from 'given2';

import { initialUserField } from '../../fixtures/initials';

import HomeContainer from './HomeContainer';

describe('HomeContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      userFields: given.userFields,
    }));
  });

  context('without profile', () => {
    given('userFields', () => initialUserField);

    it('renders Home Page', () => {
      render(<HomeContainer />);

      expect(screen.getByText('내 정보 입력하러가기')).toBeInTheDocument();
    });
  });

  context('with profile', () => {
    given('userFields', () => ({
      name: '신형탁',
      age: '29',
      salary: 5000,
      asset: 10000,
    }));

    it('renders user name', () => {
      render(<HomeContainer />);
      expect(screen.getByText(/신형탁/)).toBeInTheDocument();
    });
  });
});
