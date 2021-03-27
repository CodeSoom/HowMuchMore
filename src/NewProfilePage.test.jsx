import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import NewProfilePage from './NewProfilePage';

describe('NewProfilePage', () => {
  it('renders New Profile Page', () => {
    render((
      <MemoryRouter>
        <NewProfilePage />
      </MemoryRouter>
    ));
  });
});
