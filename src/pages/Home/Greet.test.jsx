import React from 'react';

import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';

import given from 'given2';

import { initialUserField } from '../../fixtures/initials';

import Greet from './Greet';

describe('Greet', () => {
  const handleClick = jest.fn();

  const profile = {
    isNew: false,
    name: '신형탁',
    age: 29,
    salary: 5000,
    asset: 10000,
  };

  const renderGreet = () => render((
    <Greet
      profile={given.profile}
      onClick={handleClick}
    />
  ));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('without profile', () => {
    given('profile', () => initialUserField);

    it('renders a link for user to fill up to form', () => {
      renderGreet();

      expect(screen.getByText('내 정보 입력하러가기')).toBeInTheDocument();
    });

    it('calls handleClick upon clicking new profile', () => {
      renderGreet();

      fireEvent.click(screen.getByRole('link', {
        name: '내 정보 입력하러가기',
      }));

      expect(handleClick).toBeCalledTimes(1);
    });
  });

  context('with profile', () => {
    given('profile', () => (profile));

    it('renders user name', () => {
      renderGreet();

      expect(screen.getByText(/신형탁/)).toBeInTheDocument();

      expect(screen.getByRole('link', {
        name: '내 정보 확인하러가기',
      })).toBeInTheDocument();
    });

    it('calls handleClick upon clicking check my profile', () => {
      renderGreet();

      fireEvent.click(screen.getByRole('link', {
        name: '내 정보 확인하러가기',
      }));

      expect(handleClick).toBeCalledTimes(1);
    });
  });
});
