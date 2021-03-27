import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  context('with path /', () => {
    it('renders the home page', () => {
      renderApp({ path: '/' });

      expect(screen.getByText('How Much More')).toBeInTheDocument();
    });
  });

  context('with path /profile/new', () => {
    it('renders new profile page', () => {
      renderApp({ path: '/profile/new' });

      expect(screen.getByLabelText(/나이/)).toBeInTheDocument();
      expect(screen.getByLabelText(/연봉/)).toBeInTheDocument();
      expect(screen.getByLabelText(/자산/)).toBeInTheDocument();
      expect(screen.getByRole('button', {
        name: '저장',
      })).toBeInTheDocument();
    });
  });
});
