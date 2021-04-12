import React from 'react';

import { render, screen } from '@testing-library/react';

import User from './User';

describe('User', () => {
  it('renders User', () => {
    const profile = {
      isNew: false,
      name: '신형탁',
      age: '29',
      monthlySavings: 5000,
      currentBalance: 10000,
    };

    render(<User
      profile={profile}
    />);

    expect(screen.getByText('신형탁')).toBeInTheDocument();
    expect(screen.getByText('29')).toBeInTheDocument();
    expect(screen.getByText('5,000 원')).toBeInTheDocument();
    expect(screen.getByText('10,000 원')).toBeInTheDocument();
  });
});
