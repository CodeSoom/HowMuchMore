import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import { loadItem } from './services/storage';

import { setApartment, setUserFields } from './redux/appSlice';

import { colors } from './designSystem';

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
  position: 'sticky',
  top: '0',

  backgroundColor: colors.white,
  opacity: '0.88',

  zIndex: '1',
});

export default function App() {
  const dispatch = useDispatch();

  const profile = loadItem({
    key: 'profile',
    legacyKeys,
    newKeys,
  });

  const apartment = loadItem({ key: 'apartment' });

  if (profile) {
    dispatch(setUserFields(profile));
  }

  if (apartment) {
    dispatch(setApartment(apartment));
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
