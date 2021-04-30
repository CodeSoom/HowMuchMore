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
      name: /알아/,
    })).toBeInTheDocument();
  });

  it('calls handleClick upon clicking check apartments', () => {
    renderHome();

    fireEvent.click(screen.getByRole('link', {
      name: /알아/,
    }));

    expect(handleClick).toBeCalledTimes(1);
  });

  it('renders footer', () => {
    renderHome();

    expect(screen.getByText(/All Rights/)).toBeInTheDocument();
  });
});
