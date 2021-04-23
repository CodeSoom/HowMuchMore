import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import given from 'given2';

import ApartmentsContainer from './ApartmentsContainer';

describe('ApartmentsContainer', () => {
  const dispatch = jest.fn();

  const handleClick = jest.fn();

  const newUser = {
    isNew: true,
    name: '',
    age: '',
    monthlySavings: '',
    currentBalance: '',
  };

  const profile = {
    isNew: false,
    name: 'tak',
    age: '29',
    monthlySavings: 5000,
    currentBalance: 10000,
  };

  function renderApartmentContainer() {
    return render((
      <ApartmentsContainer
        apartmentCategory="riverside"
        onClick={handleClick}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      userFields: given.profile,
      apartments: [
        {
          name: '아크로리버파크',
          date: '2021-03',
          size: '129.92',
          price: 470000,
          lotNumber: 1,
        },
        {
          name: '서울',
          date: '2021-02',
          size: '200.27',
          price: '420,000',
          lotNumber: 2,
        },
      ],
      isPyeong: false,
    }));
  });

  it('renders Apartment Page', () => {
    renderApartmentContainer();

    expect(screen.getByText('아크로리버파크')).toBeInTheDocument();
    expect(screen.getByText('서울')).toBeInTheDocument();
  });

  it('executes diaptch setApartment', () => {
    renderApartmentContainer();

    fireEvent.click(screen.getAllByText(/구매/)[0]);

    expect(dispatch).toBeCalledWith({
      type: 'applications/setApartment',
      payload: {
        name: '아크로리버파크',
        date: '2021-03',
        size: '129.92',
        price: 470000,
        lotNumber: 1,
      },
    });
  });

  it('executes dispatch changeSizeUnit on clicking Switch Size Unit Button', () => {
    renderApartmentContainer();

    fireEvent.click(screen.getByRole('button', {
      name: /전환/,
    }));

    expect(dispatch).toBeCalledWith({
      type: 'applications/changeSizeUnit',
    });
  });

  context('without profile', () => {
    given('profile', () => (newUser));

    it('navigates user to profile page', () => {
      renderApartmentContainer();

      fireEvent.click(screen.getAllByText(/구매/)[0]);

      expect(handleClick).toBeCalledWith({ url: '/profile' });
    });
  });

  context('with profile', () => {
    given('profile', () => (profile));

    it('navigates user to profile page', () => {
      renderApartmentContainer();

      fireEvent.click(screen.getAllByText(/구매/)[0]);

      expect(handleClick).toBeCalledWith({ url: '/result' });
    });
  });
});
