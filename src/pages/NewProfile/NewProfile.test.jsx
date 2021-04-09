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
    isNew: false,
    name: 'tak',
    age: '29',
    monthlySavings: '5000',
    currentBalance: '10000',
  };

  const renderNewProfile = ({
    name,
    age,
    monthlySavings,
    currentBalance,
  }) => render((
    <NewProfile
      onChange={handleChange}
      onSubmit={handleClick}
      profile={{
        name,
        age,
        monthlySavings,
        currentBalance,
      }}
    />
  ));

  it('renders values of fields', () => {
    renderNewProfile(profile);

    expect(screen.getByLabelText(/이름/).value).toBe('tak');
    expect(screen.getByLabelText(/나이/).value).toBe('29');
    expect(screen.getByLabelText(/저축/).value).toBe('5000');
    expect(screen.getByLabelText(/잔액/).value).toBe('10000');
  });

  it('calls handleClick upon clicking submit button', () => {
    renderNewProfile(profile);

    fireEvent.submit(screen.getByRole('button', {
      value: '저장',
    }));

    expect(handleClick).toBeCalled();
  });
});
