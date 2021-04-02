import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { render, screen } from '@testing-library/react';

import given from 'given2';

import { loadItem } from './services/storage';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/storage');

describe('App', () => {
  const dispatch = jest.fn();

  const profile = {
    name: '신형탁',
    age: 29,
    salary: 5000,
    asset: 10000,
  };

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      userFields: given.userFields,
    }));

    loadItem.mockImplementation(() => null);
  });

  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  context('with path /', () => {
    given('userFields', () => (profile));

    beforeEach(() => {
      loadItem.mockImplementation(() => (JSON.stringify(profile)));
    });

    it('renders the home page', () => {
      renderApp({ path: '/' });

      expect(screen.getByText('How Much More')).toBeInTheDocument();
    });
  });

  context('with path /profile/new', () => {
    given('userFields', () => (profile));

    it('renders new profile page', () => {
      renderApp({ path: '/profile/new' });

      expect(screen.getByLabelText(/이름/)).toBeInTheDocument();
      expect(screen.getByLabelText(/나이/)).toBeInTheDocument();
      expect(screen.getByLabelText(/연봉/)).toBeInTheDocument();
      expect(screen.getByLabelText(/자산/)).toBeInTheDocument();
      expect(screen.getByRole('button', {
        name: '저장',
      })).toBeInTheDocument();
    });
  });

  context('with path /profile', () => {
    it('renders profile page', () => {
      given('userFields', () => (profile));

      renderApp({ path: '/profile' });

      expect(screen.getByText('신형탁')).toBeInTheDocument();
      expect(screen.getByText('29')).toBeInTheDocument();
      expect(screen.getByText('5000')).toBeInTheDocument();
      expect(screen.getByText('10000')).toBeInTheDocument();
    });
  });

  context('with path /aparment', () => {
    it('renders apartment page', () => {
      renderApp({ path: '/apartment' });

      expect(screen.getByText('거주하고 싶은신 아파트를 선택해주세요')).toBeInTheDocument();
    });
  });
});
