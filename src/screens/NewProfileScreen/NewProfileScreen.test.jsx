import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { render, screen } from '@testing-library/react';

import NewProfilePage from './NewProfileScreen';

describe('NewProfilePage', () => {
  const profile = {
    name: 'tak',
    age: 29,
    salary: 5000,
    asset: 10000,
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
    expect(screen.getByLabelText(/연봉/)).toBeInTheDocument();
    expect(screen.getByLabelText(/자산/)).toBeInTheDocument();
    expect(screen.getByRole('button', {
      name: '저장',
    })).toBeInTheDocument();
  });
});
