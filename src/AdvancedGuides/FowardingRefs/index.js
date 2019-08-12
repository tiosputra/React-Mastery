import React, { createRef } from 'react';

import FancyButton from './FancyButton';

export default function index() {
  return (
    <div>
      <h1>Forwarding Refs</h1>
      <h5>Fancy Button</h5>
      <FancyButton ref={ref => createRef()}>Click Me Plz</FancyButton>
    </div>
  );
}
