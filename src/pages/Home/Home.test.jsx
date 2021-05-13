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

  it('renders links of apartments', () => {
    renderHome();

    expect(screen.getByRole('link', {
      name: /한강 뷰/,
    })).toBeInTheDocument();
    expect(screen.getByRole('link', {
      name: /오션 뷰/,
    })).toBeInTheDocument();
  });

  it('calls handleClick upon clicking check apartments', () => {
    renderHome();

    fireEvent.click(screen.getByRole('link', {
      name: /한강 뷰/,
    }));

    expect(handleClick).toBeCalledWith({ url: '/apartments/riverside' });
  });

  it('renders footer', () => {
    renderHome();

    expect(screen.getByText(/All Rights/)).toBeInTheDocument();
  });
});
