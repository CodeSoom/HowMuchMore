import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import HomeContainer from './HomeContainer';

describe('HomeContainer', () => {
  const handleClick = jest.fn();

  it('navgiates user to apartment page', () => {
    render((
      <HomeContainer onClick={handleClick} />
    ));

    fireEvent.click(screen.getByRole('link', {
      name: /알아/,
    }));

    expect(handleClick).toBeCalledWith({ url: '/apartments/riverside' });
  });
});
