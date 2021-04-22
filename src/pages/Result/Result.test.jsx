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
    age: 29,
    monthlySavings: 5000,
    currentBalance: 10000,
  };

  const apartment = {
    name: '아크로리버파크',
    date: '2021-03',
    district: '반포동',
    size: '129.92',
    price: 470000,
    lotNumber: 1,
  };

  const estimation = {
    price: 460000,
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
      expect(screen.getByText(/470,000/)).toBeInTheDocument();
      expect(screen.getByText('2021-03')).toBeInTheDocument();
      expect(screen.getByText('반포동')).toBeInTheDocument();
      expect(screen.getByText('1')).toBeInTheDocument();
    });

    it('renders Esitmation', () => {
      renderResult();

      expect(screen.getByText(/460,000/)).toBeInTheDocument();
      expect(screen.getByText(/94/)).toBeInTheDocument();
      expect(screen.getByText(/123/)).toBeInTheDocument();
    });

    it('renders Share CopyToClipboard Button', () => {
      renderResult();

      expect(screen.getByLabelText('clipboard')).toBeInTheDocument();
    });
  });

  context('without profile', () => {
    given('profile', () => initialUserField);

    it('renders a link for user to enter their profile', () => {
      renderResult();
      expect(screen.getByText(/정보/)).toBeInTheDocument();

      expect(screen.getByRole('link', {
        name: /확인/,
      })).toBeInTheDocument();
    });

    it("calls handleClick upon Clicking '입력' button.", () => {
      renderResult();

      fireEvent.click(screen.getByRole('link', {
        name: /확인/,
      }));

      expect(handleClick).toBeCalledWith({ url: '/profile/new' });
    });
  });
});
