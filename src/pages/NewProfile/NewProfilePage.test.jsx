import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { render, screen } from '@testing-library/react';

import NewProfilePage from './NewProfilePage';

describe('NewProfile Page', () => {
  const profile = {
    isNew: false,
    name: 'tak',
    age: '29',
    monthlySavings: '5000',
    currentBalance: '10000',
  };

  beforeEach(() => {
    useSelector.mockImplementation((selecotr) => selecotr({
      userFields: profile,
    }));
  });

  it('renders New Profile Page', () => {
    render((
      <MemoryRouter>
        <NewProfilePage />
      </MemoryRouter>
    ));

    expect(screen.getByLabelText(/이름/)).toBeInTheDocument();
    expect(screen.getByLabelText(/나이/)).toBeInTheDocument();
    expect(screen.getByLabelText(/저축/)).toBeInTheDocument();
    expect(screen.getByLabelText(/잔액/)).toBeInTheDocument();
    expect(screen.getByRole('button', {
      name: '저장',
    })).toBeInTheDocument();
  });
});
