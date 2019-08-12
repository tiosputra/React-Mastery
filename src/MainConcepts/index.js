import React from 'react';
import { Route, Link } from 'react-router-dom';

import Composition from './Composition';
import ThinkingInReact from './ThinkingInReact';

export default function index({ match }) {
  return (
    <div>
      <hr />
      <ul>
        <li>
          <Link to={`${match.url}/composition`}>Composition</Link>
        </li>
        <li>
          <Link to={`${match.url}/thinkininreact`}>Thinkin In React</Link>
        </li>
      </ul>
      <hr />
      <div>
        <Route path={`${match.url}/composition`} component={Composition} />
        <Route
          path={`${match.url}/thinkininreact`}
          component={ThinkingInReact}
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
