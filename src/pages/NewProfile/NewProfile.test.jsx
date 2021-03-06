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
    monthlySavings: 5000,
    currentBalance: 10000,
  };

  const newPorifle = {
    isNew: true,
    name: 'tak',
    age: '29',
    monthlySavings: 5000,
    currentBalance: 10000,
  };

  const renderNewProfile = ({
    isNew,
    name,
    age,
    monthlySavings,
    currentBalance,
  }) => render((
    <NewProfile
      onChange={handleChange}
      onSubmit={handleClick}
      profile={{
        isNew,
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
    expect(screen.getByLabelText(/잔고/).value).toBe('10000');
  });

  it('calls handleClick upon clicking submit button', () => {
    renderNewProfile(profile);

    fireEvent.submit(screen.getByRole('button', {
      value: '저장',
    }));

    expect(handleClick).toBeCalled();
  });

  it('renders price in Korean', () => {
    renderNewProfile(profile);

    expect(screen.getByText('5,000만 원')).toBeInTheDocument();
    expect(screen.getByText('1억 원')).toBeInTheDocument();
  });

  context('with new profile', () => {
    it("renders message '이번 한번만 저장하시면 됩니다.'", () => {
      renderNewProfile(newPorifle);

      expect(screen.getByText(/한번만/)).toBeInTheDocument();
    });
  });
});
