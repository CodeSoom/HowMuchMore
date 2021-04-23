import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import given from 'given2';

import { initialUserField } from '../../fixtures/initials';

import ResultContainer from './ResultContainer';

describe('ResultContainer', () => {
  const dispatch = jest.fn();

  const handleClick = jest.fn();

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

  function renderResultContainer() {
    return render((
      <ResultContainer onClick={handleClick} />
    ));
  }

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

    it('executes dispatch setEstimation on loading Result Page', () => {
      renderResultContainer();

      expect(dispatch).toBeCalledWith({
        type: 'applications/setEstimation',
      });
    });

    it('navigates User to apartment page when clicking go back button', () => {
      renderResultContainer();

      fireEvent.click(screen.getByRole('link', {
        name: /뒤로/,
      }));

      expect(handleClick).toBeCalledWith({ url: '/apartments/riverside' });
    });
  });

  context('without profile', () => {
    given('profile', () => initialUserField);

    it('renders link for user to fill up the profile', () => {
      renderResultContainer();

      expect(screen.getByText(/정보/)).toBeInTheDocument();

      expect(screen.getByRole('link', {
        name: /확인/,
      })).toBeInTheDocument();
    });
  });
});
