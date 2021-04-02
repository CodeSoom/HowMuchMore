import React from 'react';

import { render, screen } from '@testing-library/react';

import NotFoundScreen from './404';

describe('NotFoundPage', () => {
  it('renders 404 Not Found Screen', () => {
    render(<NotFoundScreen />);

    expect(screen.getByText('404 Not Found')).toBeInTheDocument();
  });
});
