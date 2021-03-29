import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import { useSelector } from 'react-redux';

import MyPage from './MyPageScreen';

describe('MyPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      userFields: {
        name: '신형탁',
        age: '29',
        salary: 5000,
        asset: 10000,
      },
    }));
  });

  it('render user profile page', () => {
    render((
      <MemoryRouter>
        <MyPage />
      </MemoryRouter>
    ));

    expect(screen.getByText('신형탁')).toBeInTheDocument();
    expect(screen.getByText('29')).toBeInTheDocument();
    expect(screen.getByText('5000')).toBeInTheDocument();
    expect(screen.getByText('10000')).toBeInTheDocument();
  });
});
