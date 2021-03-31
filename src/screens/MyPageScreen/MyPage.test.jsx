import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import given from 'given2';

import { initialUserField } from '../../fixtures/initials/initials';

import MyPage from './MyPage';

describe('MyPage', () => {
  const profile = {
    name: '신형탁',
    age: 29,
    salary: 5000,
    asset: 10000,
  };

  const handleClick = jest.fn();

  const renderMyPage = () => render((
    <MyPage
      profile={given.profile}
      onClickNewProfile={handleClick}
    />
  ));

  it('renders MyPage', () => {
    given('profile', () => profile);
    renderMyPage();

    expect(screen.getByText('신형탁')).toBeInTheDocument();
    expect(screen.getByText('29')).toBeInTheDocument();
    expect(screen.getByText('5000')).toBeInTheDocument();
    expect(screen.getByText('10000')).toBeInTheDocument();
  });

  it('calls handleClick upon clicking new profile', () => {
    given('profile', () => initialUserField);

    renderMyPage();

    fireEvent.click(screen.getByRole('link', {
      name: '내 정보 입력하러가기',
    }));

    expect(handleClick).toBeCalled();
  });
});
