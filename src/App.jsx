import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { loadItem } from './services/storage';

import { setUserFields } from './redux/appSlice';

import {
  HomePage,
  ProfilePage,
  NewProfilePage,
  ApartmentPage,
  NotFoundPage,
} from './pages';

export default function App() {
  const dispatch = useDispatch();

  const profile = JSON.parse((loadItem('profile')));

  if (profile) {
    dispatch(setUserFields(profile));
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
          <Route exact path="/apartment" component={ApartmentPage} />
          <Route path="/apartment/:id" component={ApartmentPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>

    </>
  );
}
