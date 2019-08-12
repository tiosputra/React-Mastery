import React from 'react';
import { Route, Link } from 'react-router-dom';

import ErrorBoundaries from './ErrorBoundaries';
import FowardingRefs from './FowardingRefs';
import RefAndTheDom from './RefAndTheDom';

export default function index({ match }) {
  return (
    <div>
      <hr />
      <ul>
        <li>
          <Link to={`${match.url}/error-boundaries`}>Error Boundaries</Link>
        </li>
        <li>
          <Link to={`${match.url}/fowarding-refs`}>Fowarding Refs</Link>
        </li>
        <li>
          <Link to={`${match.url}/refs-and-the-dom`}>Ref And The Dom</Link>
        </li>
      </ul>
      <hr />
      <div>
        <Route
          path={`${match.url}/error-boundaries`}
          component={ErrorBoundaries}
        />
        <Route path={`${match.url}/fowarding-refs`} component={FowardingRefs} />
        <Route
          path={`${match.url}/refs-and-the-dom`}
          component={RefAndTheDom}
        />

        <Route
          exact
          path={match.path}
          render={() => <h3>Please select a topic.</h3>}
        />
      </div>
    </div>
  );
}
