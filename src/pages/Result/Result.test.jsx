import React from 'react';

import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';

import given from 'given2';

import { initialUserField } from '../../fixtures/initials';

import Result from './Result';

describe('Result', () => {
  const handleClick = jest.fn();
  const goBack = jest.fn();

  const profile = {
    isNew: false,
    name: '신형탁',
    age: '29',
    monthlySavings: '5000',
    currentBalance: '10000',
  };

  const apartment = {
    name: '아크로리버파크',
    date: '2021-03',
    district: '반포동',
    size: '129.92',
    price: '470,000',
    lotNumber: 1,
  };

  const estimation = {
    price: '460000',
    year: '94',
    age: '123',
  };

  function renderResult() {
    return render((
      <Result
        profile={given.profile}
        apartment={apartment}
        estimation={estimation}
        onClick={handleClick}
        goBack={goBack}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('with profile', () => {
    given('profile', () => profile);

    it('renders Result', () => {
      renderResult();

      expect(screen.getByText('아크로리버파크')).toBeInTheDocument();
      expect(screen.getByText('129.92')).toBeInTheDocument();
      expect(screen.getByText('470,000')).toBeInTheDocument();
      expect(screen.getByText('2021-03')).toBeInTheDocument();
      expect(screen.getByText('반포동')).toBeInTheDocument();
      expect(screen.getByText('1')).toBeInTheDocument();
    });

    it('redners Profile', () => {
      renderResult();

      expect(screen.getByText('신형탁')).toBeInTheDocument();
      expect(screen.getByText('29')).toBeInTheDocument();
      expect(screen.getByText('5000')).toBeInTheDocument();
      expect(screen.getByText('10000')).toBeInTheDocument();
    });

    it('renders Esitmation', () => {
      renderResult();

      expect(screen.getByText('460000')).toBeInTheDocument();
      expect(screen.getByText('94')).toBeInTheDocument();
      expect(screen.getByText('123')).toBeInTheDocument();
    });

    it("calls handleClick upon clicking '뒤로가기'", () => {
      renderResult();

      fireEvent.click(screen.getByRole('link', {
        name: '뒤로가기',
      }));

      expect(goBack).toBeCalledWith({ url: '/apartments' });
    });
  });

  context('without profile', () => {
    given('profile', () => initialUserField);

    it('renders a link for user to enter their profile', () => {
      renderResult();
      expect(screen.getByText('정보를 아직 입력하지 않으셨습니다.')).toBeInTheDocument();

      expect(screen.getByRole('link', {
        name: '내 정보 입력 하러가기',
      })).toBeInTheDocument();
    });

    it("calls handleClick upon Clicking '입력' button.", () => {
      renderResult();

      fireEvent.click(screen.getByRole('link', {
        name: '내 정보 입력 하러가기',
      }));

      expect(handleClick).toBeCalledWith({ url: '/profile/new' });
    });
  });
});
