import React from 'react';

import { render, screen } from '@testing-library/react';

import { useSelector } from 'react-redux';

import given from 'given2';

import { initialUserField } from '../../fixtures/initials/initials';

import ProfileContainer from './ProfileContainer';

describe('ProfileContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      userFields: given.userFields,
    }));
  });

  context('with profile', () => {
    given('userFields', () => ({
      name: '신형탁',
      age: 29,
      salary: 5000,
      asset: 10000,
    }));

    it('renders profile page', () => {
      render(<ProfileContainer />);

      expect(screen.getByText('신형탁')).toBeInTheDocument();
      expect(screen.getByText('29')).toBeInTheDocument();
      expect(screen.getByText('5000')).toBeInTheDocument();
      expect(screen.getByText('10000')).toBeInTheDocument();
    });
  });

  context('without profile', () => {
    given('userFields', () => initialUserField);
    it('renders a link user to fill up profile form', () => {
      render(<ProfileContainer />);

      expect(screen.getByText('아직 정보를 입력하지 않으셨습니다.'));
      expect(screen.getByRole('link', {
        name: '내 정보 입력하러가기',
      })).toBeInTheDocument();
    });
  });
});
