import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { render, screen } from '@testing-library/react';

import given from 'given2';

import { loadItem } from './services/storage';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/storage');

describe('App', () => {
  const dispatch = jest.fn();

  const legacyprofile = {
    isNew: false,
    name: '신형탁',
    age: '29',
    salary: 5000,
    asset: 10000,
  };

  const profile = {
    isNew: false,
    name: '신형탁',
    age: '29',
    monthlySavings: 5000,
    currentBalance: 10000,
  };

  const apartments = [
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
  ];

  const apartment = {
    name: '아크로리버파크',
    date: '2021-03',
    district: '반포동',
    size: '129.92',
    price: 470000,
    lotNumber: 1,
  };

  const estimation = {
    price: '460000',
    year: '94',
    age: '123',
  };

  given('userFields', () => (profile));
  given('apartments', () => apartments);
  given('apartment', () => apartment);
  given('estimation', () => estimation);

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      userFields: given.userFields,
      apartments: given.apartments,
      apartment: given.apartment,
      estimation: given.estimation,
    }));

    loadItem.mockImplementation(() => null);
  });

  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  context('with path /', () => {
    beforeEach(() => {
      loadItem.mockImplementation(() => (JSON.stringify(profile)));
      loadItem.mockImplementation(() => (JSON.stringify(apartment)));
    });

    context('with legacy profile', () => {
      beforeEach(() => {
        loadItem.mockImplementation(() => (JSON.stringify(legacyprofile)));
      });

      it('excutes dispatch', () => {
        renderApp({ path: '/' });

        expect(dispatch).toBeCalled();
      });
    });

    it('renders the home page', () => {
      renderApp({ path: '/' });

      expect(screen.getByText('How Much More')).toBeInTheDocument();
    });
  });

  context('with path /profile/new', () => {
    it('renders new profile page', () => {
      renderApp({ path: '/profile/new' });

      expect(screen.getByLabelText(/이름/)).toBeInTheDocument();
      expect(screen.getByLabelText(/나이/)).toBeInTheDocument();
      expect(screen.getByLabelText(/저축/)).toBeInTheDocument();
      expect(screen.getByLabelText(/잔액/)).toBeInTheDocument();
      expect(screen.getByRole('button', {
        name: '저장',
      })).toBeInTheDocument();
    });
  });

  context('with path /profile', () => {
    it('renders profile page', () => {
      renderApp({ path: '/profile' });

      expect(screen.getByText('신형탁')).toBeInTheDocument();
      expect(screen.getByText('29')).toBeInTheDocument();
      expect(screen.getByText('5,000')).toBeInTheDocument();
      expect(screen.getByText('10,000')).toBeInTheDocument();
    });
  });

  context('with path /aparments', () => {
    it('renders apartment page', () => {
      renderApp({ path: '/apartments' });

      expect(screen.getByText('거주하고 싶은신 아파트를 선택해주세요')).toBeInTheDocument();
    });
  });

  context('with path /apartments/:id', () => {
    it('redners the apartment page', () => {
      renderApp({ path: '/apartments/riverside' });

      expect(screen.getByText('아크로리버파크')).toBeInTheDocument();
    });
  });

  context('with path /result', () => {
    it('renders the apartment result page', () => {
      renderApp({ path: '/result' });

      expect(screen.getByText('결과')).toBeInTheDocument();

      expect(screen.getByText('아크로리버파크')).toBeInTheDocument();
      expect(screen.getByText('129.92')).toBeInTheDocument();
      expect(screen.getByText('470,000')).toBeInTheDocument();
    });
  });

  context('with invalid path', () => {
    it('renders the not found page', () => {
      renderApp({ path: '/amazingtoyproject' });

      expect(screen.getByText('404 Not Found')).toBeInTheDocument();
    });
  });
});
