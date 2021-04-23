import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import { loadItem } from './services/storage';

import { setApartment, setUserFields, setPyeong } from './redux/appSlice';

import { colors, fontWeights } from './designSystem';

import { legacyKeys, newKeys } from './fixtures/keys';

import {
  HomePage,
  NewProfilePage,
  ApartmentPage,
  ResultPage,
  NotFoundPage,
} from './pages';

const Header = styled.header({
  minHeight: '5vh',
  width: '100%',
  position: 'fixed',
  top: '0',
  left: '0',
  padding: '0.2rem 1.5rem',

  color: colors.themeColor,

  backgroundColor: colors.superlightGray,
  opacity: '0.93',

  zIndex: '1',

  '& a': {
    fontStyle: 'oblique',
    fontWeight: fontWeights.bold,
  },
});

export default function App() {
  const dispatch = useDispatch();

  const profile = loadItem({
    key: 'profile',
    legacyKeys,
    newKeys,
  });

  const apartment = loadItem({ key: 'apartment' });

  const isPyeong = loadItem({ key: 'KEY_SHOWING_PYEONG' });

  if (profile) {
    dispatch(setUserFields(profile));
  }

  if (apartment) {
    dispatch(setApartment(apartment));
  }

  if (isPyeong) {
    dispatch(setPyeong(isPyeong));
  }

  return (
    <>
      <Header>
        <h1>
          <Link to="/">
            How Much More
          </Link>
        </h1>
      </Header>
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path={['/profile', '/profile/new']} component={NewProfilePage} />
          <Route exact path="/apartments" component={ApartmentPage} />
          <Route path="/apartments/:id" component={ApartmentPage} />
          <Route exact path="/result" component={ResultPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    </>
  );
}
