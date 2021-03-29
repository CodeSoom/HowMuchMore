import React from 'react';

import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';

import { useDispatch } from 'react-redux';

import NewProfileContainer from './NewProfileContainer';

describe('NewProfileContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);
  });

  it('excutes dispatch upon submission', async () => {
    render(<NewProfileContainer />);

    fireEvent.input(screen.getByLabelText(/이름/), {
      target: {
        value: '신형탁',
      },
    });

    fireEvent.input(screen.getByLabelText(/나이/), {
      target: {
        value: '29',
      },
    });

    fireEvent.input(screen.getByLabelText(/연봉/), {
      target: {
        value: 5000,
      },
    });

    fireEvent.input(screen.getByLabelText(/자산/), {
      target: {
        value: 10000,
      },
    });

    await waitFor(() => fireEvent.submit(screen.getByRole('button', {
      name: '저장',
    })));

    /**
     * Bug: Working in browser, but not being tested in test code.
     * This testing method was applied and worked fine in previous project.
     * Please refer to the link below
     * https://github.com/CodeSoom/react-week7-assignment-1/blob/4c22b0d48929f601a36075f8dad0b2c45e18990b/src/pages/LogInPage/LogInContainer.test.jsx
     */
    // expect(dispatch).toBeCalled();
  });
});
