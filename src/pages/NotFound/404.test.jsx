import React from 'react';

import { render, screen } from '@testing-library/react';

import NotFoundPage from './404';

describe('NotFoundPage', () => {
  it('renders 404 Not Found Page', () => {
    render(<NotFoundPage />);

    expect(screen.getByText('404 Not Found')).toBeInTheDocument();
  });
});
