import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import NewProfilePage from './NewProfileScreen';

describe('NewProfilePage', () => {
  it('renders New Profile Page', () => {
    render((
      <MemoryRouter>
        <NewProfilePage />
      </MemoryRouter>
    ));
  });
});
