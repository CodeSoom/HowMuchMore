import React from 'react';

import { render, screen } from '@testing-library/react';

import SocialMediaButton from './SocialMediaButtons';

describe('SocialMedaiButtons', () => {
  it('renders Social Media Button for share usage', () => {
    render(<SocialMediaButton />);

    expect(screen.getByLabelText('facebook')).toBeTruthy();
    expect(screen.getByLabelText('twitter')).toBeTruthy();
  });
});
