import React from 'react';

import { render, screen } from '@testing-library/react';

import NewProfile from './NewProfile';

describe('NewProfile', () => {
  const handleSubmit = jest.fn();
  const onSubmit = jest.fn();
  const register = jest.fn();

  it('renders new profile form', () => {
    render((
      <NewProfile
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
      />
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
