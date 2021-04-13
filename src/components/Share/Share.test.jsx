import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import Share from './Share';

describe('Share', () => {
  window.prompt = jest.fn();

  beforeEach(() => {
    window.prompt.mockClear();
  });

  it('shows copy-to-cliboard button', () => {
    render(<Share />);

    expect(screen.getByText('Copy URL')).toBeInTheDocument();
  });

  it("shows 'copied' text once user has clicked", () => {
    render(<Share />);

    fireEvent.click(screen.getByRole('button', {
      name: 'Copy URL',
    }));

    expect(window.prompt).toBeCalled();
  });
});
