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

    expect(screen.getByText('꿈꾸는 삶을 살기 위해 얼마나 많은 돈을 더 벌어야 될까요?')).toBeInTheDocument();
  });
});
