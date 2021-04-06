import React from 'react';

import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';

import given from 'given2';

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

  it('renders a link for user to check apartments', () => {
    renderHome();

    expect(screen.getByRole('link', {
      name: '거주하고 싶은 아파트 둘러보기',
    })).toBeInTheDocument();
  });

  it('calls handleClick upon clicking check apartments', () => {
    renderHome();

    fireEvent.click(screen.getByRole('link', {
      name: '거주하고 싶은 아파트 둘러보기',
    }));

    expect(handleClick).toBeCalledTimes(1);
  });
});
