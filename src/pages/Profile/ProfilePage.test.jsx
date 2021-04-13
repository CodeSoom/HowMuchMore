import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ProfilePage from './ProfilePage';

describe('ProfilePage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      userFields: {
        isNew: false,
        name: '신형탁',
        age: '29',
        monthlySavings: 5000,
        currentBalance: 10000,
      },
    }));
  });

  it('render profile page', () => {
    render((
      <MemoryRouter>
        <ProfilePage />
      </MemoryRouter>
    ));

    expect(screen.getByText('신형탁')).toBeInTheDocument();
    expect(screen.getByText(/29/)).toBeInTheDocument();
    expect(screen.getByText(/5,000/)).toBeInTheDocument();
    expect(screen.getByText(/10,000/)).toBeInTheDocument();
  });
});
