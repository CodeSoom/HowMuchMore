import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import given from 'given2';

import { initialUserField } from '../../fixtures/initials/initials';

import Profile from './Profile';

describe('Profile', () => {
  const profile = {
    name: '신형탁',
    age: '29',
    monthlySavings: '5000',
    currentBalance: '10000',
  };

  const handleClick = jest.fn();

  const renderProfile = () => render((
    <Profile
      profile={given.profile}
      onClickNewProfile={handleClick}
    />
  ));

  context('with profile', () => {
    given('profile', () => profile);

    it('renders Profile', () => {
      renderProfile();

      expect(screen.getByText('신형탁')).toBeInTheDocument();
      expect(screen.getByText('29')).toBeInTheDocument();
      expect(screen.getByText('5000')).toBeInTheDocument();
      expect(screen.getByText('10000')).toBeInTheDocument();
    });

    it('calls handleClick upon clicking edit', () => {
      renderProfile();

      fireEvent.click(screen.getByRole('link', {
        name: '수정',
      }));

      expect(handleClick).toBeCalled();
    });
  });

  context('without profile', () => {
    given('profile', () => initialUserField);

    it('renders message user has no profile yet', () => {
      renderProfile();

      expect(screen.getByText('아직 정보를 입력하지 않으셨습니다.')).toBeInTheDocument();
    });

    it('calls handleClick upon clicking new profile', () => {
      renderProfile();

      fireEvent.click(screen.getByRole('link', {
        name: '내 정보 입력하러가기',
      }));

      expect(handleClick).toBeCalled();
    });
  });
});
