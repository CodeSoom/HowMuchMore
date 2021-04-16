import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import LinkField from './LinkField';

describe('LinkField', () => {
  const handleClick = jest.fn();
  const changeApartment = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context("with '내 정보 입력하러가기' title", () => {
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
  });

  context("with '거주하고 싶은 아파트 둘러보기' title", () => {
    it('calls handleClick upon clicking link', () => {
      render((
        <LinkField
          url="/apartments"
          title="거주하고 싶은 아파트 둘러보기"
          onClick={handleClick}
        />
      ));

      fireEvent.click(screen.getByRole('link', {
        name: '거주하고 싶은 아파트 둘러보기',
      }));

      expect(handleClick).toBeCalledWith({ url: '/apartments' });
    });
  });

  context("with '보기' title", () => {
    render((
      <LinkField
        url="/apartments"
        title="보기"
        onClick={handleClick}
        apartment={{
          name: '아크로리버파크',
          date: '2021-03',
          size: '129.92',
          price: 470000,
          lotNumber: 1,
        }}
        changeApartment={changeApartment}
      />
    ));

    fireEvent.click(screen.getByRole('link', {
      name: '보기',
    }));

    expect(handleClick).toBeCalled();
    expect(changeApartment).toBeCalled();
  });
});
