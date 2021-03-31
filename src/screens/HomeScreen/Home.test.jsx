import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import given from 'given2';

import { initialUserField } from '../../fixtures/initials';

import Home from './Home';

describe('Home', () => {
  const handleClick = jest.fn();

  const renderHome = () => render((
    <Home
      profile={given.profile}
      onClick={handleClick}
    />
  ));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('without profile', () => {
    given('profile', () => initialUserField);

    it('renders Home Page', () => {
      renderHome();

      expect(screen.getByText('내 정보 입력하러가기')).toBeInTheDocument();
    });

    it('calls handleClick upon clicking new profile', () => {
      renderHome();

      fireEvent.click(screen.getByRole('link', {
        name: '내 정보 입력하러가기',
      }));

      expect(handleClick).toBeCalledTimes(1);
    });
  });

  context('with profile', () => {
    given('profile', () => ({
      name: '신형탁',
      age: 29,
      salary: 5000,
      asset: 10000,
    }));

    it('renders user name', () => {
      renderHome();
      expect(screen.getByText(/신형탁/)).toBeInTheDocument();
      expect(screen.getByText('내 정보 확인하러가기')).toBeInTheDocument();
    });

    it('calls handleClick upon clicking check my profile', () => {
      renderHome();

      fireEvent.click(screen.getByRole('link', {
        name: '내 정보 확인하러가기',
      }));

      expect(handleClick).toBeCalledTimes(1);
    });
  });
});
