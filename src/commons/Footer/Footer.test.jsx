import React from 'react';

import { render, screen } from '@testing-library/react';

import Footer from './Footer';

describe('Footer', () => {
  it('renders footer', () => {
    render(<Footer />);

    expect(screen.getByText(/All Rights/)).toBeInTheDocument();
  });
});
