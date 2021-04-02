import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { loadItem } from './services/storage';

import { setUserFields } from './redux/appSlice';

import {
  HomeScreen,
  MyPageScreen,
  NewProfileScreen,
  ApartmentScreen,
  NotFoundScreen,
} from './screens';

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
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/profile" component={MyPageScreen} />
          <Route exact path="/profile/new" component={NewProfileScreen} />
          <Route exact path="/apartment" component={ApartmentScreen} />
          <Route path="/apartment/:id" component={ApartmentScreen} />
          <Route component={NotFoundScreen} />
        </Switch>
      </main>

    </>
  );
}
