import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import MainConcept from './MainConcepts';
import AdvancedGuides from './AdvancedGuides';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/main-concept">Main Concepts</Link>
          </li>
          <li>
            <Link to="/advanced-guides">Advanced Guides</Link>
          </li>
        </ul>
      </div>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/main-concept" component={MainConcept} />
        <Route path="/advanced-guides" component={AdvancedGuides} />
      </div>
    </Router>
  );
}

function Home() {
  return <h1>Understand react by implementing react documentation</h1>;
}

export default App;
