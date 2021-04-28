import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';

import given from 'given2';

import { initialUserField } from '../../fixtures/initials';

import NewProfileContainer from './NewProfileContainer';

describe('NewProfileContainer', () => {
  const dispatch = jest.fn();

  const handleClick = jest.fn();

  const profile = {
    isNew: false,
    name: 'tak',
    age: '29',
    monthlySavings: 5000,
    currentBalance: 10000,
  };

  const renderNewProfileContainer = () => render((
    <NewProfileContainer
      onClick={handleClick}
    />
  ));

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selecotr) => selecotr({
      userFields: given.profile,
    }));
  });

  context('with profile', () => {
    given('profile', () => (profile));

    it('listens to change events', () => {
      renderNewProfileContainer();

      fireEvent.input(screen.getByLabelText(/이름/), {
        target: {
          value: 'ashal',
        },
      });

      expect(dispatch).toBeCalledWith({
        type: 'applications/changeUserFields',
        payload: { name: 'name', value: 'ashal' },
      });
    });

    it('sets userField with new user profile', () => {
      renderNewProfileContainer();

      fireEvent.submit(screen.getByRole('button', {
        value: '저장',
      }));

      expect(dispatch).toBeCalledWith({
        type: 'applications/setUserFields',
        payload: profile,
      });
    });

    it('navigates user to result page', () => {
      renderNewProfileContainer();

      fireEvent.submit(screen.getByRole('button', {
        value: '저장',
      }));

      expect(handleClick).toBeCalledWith({ url: '/result' });
    });
  });

  context('without profile', () => {
    given('profile', () => (initialUserField));

    it('shows alternative button instead of submit button', () => {
      renderNewProfileContainer();

      expect(screen.getByText(/정보/)).toBeInTheDocument();
      expect(screen.getByText(/저장되지 않습니다/)).toBeInTheDocument();
    });
  });
});
