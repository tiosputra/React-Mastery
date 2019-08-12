import React from 'react';

import FancyBorder from './FancyBorder';
import Dialog from './Dialog';
import SplitPane from './SplitPane';

export default function index() {
  return (
    <div>
      <h1>Composition</h1>
      <FancyBorder color="blue">
        <h1 className="Dialog-title">Welcome</h1>
        <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
      </FancyBorder>

      <SplitPane left={<h1>Left Pane</h1>} right={<h1>Right Pane</h1>} />

      <Dialog
        title="Welcome"
        message="Thank you for visiting our spacecraft!"
      />
    </div>
  );
}
