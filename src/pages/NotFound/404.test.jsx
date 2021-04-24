import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import NotFoundPage from './404';

describe('NotFoundPage', () => {
  it('renders 404 Not Found Page', () => {
    render((
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    ));

    expect(screen.getByText(/404/)).toBeInTheDocument();
  });
});
