import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import LinkURL from './LinkURL';

describe('LinkURL', () => {
  window.prompt = jest.fn();

  beforeEach(() => {
    window.prompt.mockClear();
  });

  it('shows copy-to-cliboard button', () => {
    render(<LinkURL />);

    expect(screen.getByLabelText('clipboard')).toBeInTheDocument();
  });

  it("shows 'copied' text once user has clicked", () => {
    render(<LinkURL />);

    fireEvent.click(screen.getByLabelText('clipboard'));

    expect(window.prompt).toBeCalled();
  });
});
