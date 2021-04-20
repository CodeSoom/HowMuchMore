import React from 'react';

import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import given from 'given2';

import NewProfileContainer from './NewProfileContainer';

describe('NewProfileContainer', () => {
  const handleClick = jest.fn();
  const dispatch = jest.fn();

  const newUser = {
    isNew: true,
    name: '',
    age: '',
    monthlySavings: '',
    currentBalance: '',
  };

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

  given('profile', () => (profile));

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selecotr) => selecotr({
      userFields: given.profile,
    }));
  });

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

  context('when user is not new', () => {
    it('navigates user to apartment page', () => {
      renderNewProfileContainer();

      fireEvent.submit(screen.getByRole('button', {
        value: '저장',
      }));

      expect(handleClick).toBeCalledWith({ url: '/result' });
    });
  });

  context('when user is new', () => {
    given('profile', () => (newUser));

    it('navigates user to apartment page', () => {
      renderNewProfileContainer();

      fireEvent.submit(screen.getByRole('button', {
        value: '저장',
      }));

      expect(handleClick).toBeCalledWith({ url: '/apartments/riverside' });
    });
  });
});
