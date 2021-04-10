import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { loadItem } from './services/storage';

import { processObject } from './utils/utils';

import { setApartment, setUserFields } from './redux/appSlice';

import {
  HomePage,
  ProfilePage,
  NewProfilePage,
  ApartmentPage,
  ResultPage,
  NotFoundPage,
} from './pages';

export default function App() {
  const dispatch = useDispatch();

  const profile = JSON.parse((loadItem('profile')));
  const apartment = JSON.parse((loadItem('apartment')));

  if (profile && profile.salary) {
    dispatch(setUserFields(processObject({
      object: profile,
      legacyKeys: ['salary', 'asset'],
      newKeys: ['monthlySavings', 'currentBalance'],
    })));
  }

  if (profile) {
    dispatch(setUserFields(profile));
  }

  if (apartment) {
    dispatch(setApartment(apartment));
  }

  return (
    <>
      <header>
        <h1>
          <Link to="/">
            How Much More
          </Link>
        </h1>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route path="/profile/new" component={NewProfilePage} />
          <Route exact path="/apartments" component={ApartmentPage} />
          <Route path="/apartments/:id" component={ApartmentPage} />
          <Route exact path="/result" component={ResultPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>

    </>
  );
}
