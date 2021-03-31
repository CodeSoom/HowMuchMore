import React from 'react';

import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';

import NewProfile from './NewProfile';

describe('NewProfile', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  const profile = {
    name: 'tak',
    age: 29,
    salary: 5000,
    asset: 10000,
  };

  const renderNewProfile = ({
    name,
    age,
    salary,
    asset,
  }) => render((
    <NewProfile
      onChange={handleChange}
      onSubmit={handleClick}
      profile={{
        name,
        age,
        salary,
        asset,
      }}
    />
  ));

  it('renders values of fields', () => {
    renderNewProfile(profile);

    expect(screen.getByLabelText(/이름/).value).toBe('tak');
    expect(screen.getByLabelText(/나이/).value).toBe('29');
    expect(screen.getByLabelText(/연봉/).value).toBe('5000');
    expect(screen.getByLabelText(/자산/).value).toBe('10000');
  });

  it('calls handleClick upon clicking submit button', () => {
    renderNewProfile(profile);

    fireEvent.submit(screen.getByRole('button', {
      value: '저장',
    }));

    expect(handleClick).toBeCalled();
  });
});
