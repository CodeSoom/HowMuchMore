import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { render, screen } from '@testing-library/react';

import { initialUserField } from '../../fixtures/initials';

import HomePage from './HomePage';

describe('HomePage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      userFields: initialUserField,
    }));
  });

  it('renders Home Page', () => {
    render((
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    ));

    expect(screen.getByText(/삶/)).toBeInTheDocument();
  });
});
