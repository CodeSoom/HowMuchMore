import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import LinkField from './LinkField';

describe('LinkField', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders Link', () => {
    render((
      <LinkField
        url="/profile/new"
        title="내 정보 입력하러가기"
        onClick={handleClick}
      />
    ));

    expect(screen.getByRole('link', {
      name: '내 정보 입력하러가기',
    })).toBeInTheDocument();
  });

  it('calls handleClick upon clicking link', () => {
    render((
      <LinkField
        url="/apartment"
        title="거주하고 싶은 아파트 둘러보기"
        onClick={handleClick}
      />
    ));

    fireEvent.click(screen.getByRole('link', {
      name: '거주하고 싶은 아파트 둘러보기',
    }));

    expect(handleClick).toBeCalledWith({ url: '/apartment' });
  });
});
