import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import NewProfilePage from './NewProfilePage';

export default function App() {
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
          <Route exact path="/profile/new" component={NewProfilePage} />
        </Switch>
      </main>

    </>
  );
}
