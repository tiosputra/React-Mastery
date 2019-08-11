import React, { createRef } from 'react';

// Composition
import FancyBorder from './MainConcepts/Composition/FancyBorder';
import SplitPane from './MainConcepts/Composition/SplitPane';
import Dialog from './MainConcepts/Composition/Dialog';

// Error Boundaries
import ErrorBoundary from './AdvancedGuides/ErrorBoundaries/ErrorBoundary';
import BuggyCounter from './AdvancedGuides/ErrorBoundaries/BuggyCounter';

// Forwarding refs
import FancyButton from './AdvancedGuides/FowardingRefs/FancyButton';

// Ref and the dom
import CustomTextInput from './AdvancedGuides/RefAndTheDom/CustomTextInput';
import AutoFocusTextInput from './AdvancedGuides/RefAndTheDom/AutoFocusTextInput';
import FCustomTextInput from './AdvancedGuides/RefAndTheDom/FCustomTextInput';

function App() {
  return (
    <div>
      <hr />
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

      <hr />
      <h1>Error Boundaries</h1>
      <ErrorBoundary>
        <p>
          These two counters are inside the same error boundary. If one crashes,
          the error boundary will replace both of them.
        </p>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <hr />
      <p>
        These two counters are each inside of their own error boundary. So if
        one crashes, the other is not affected.
      </p>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <hr />
      <h1>Forwarding Refs</h1>
      <h5>Fancy Button</h5>
      <FancyButton ref={ref => createRef()}>Click Me Plz</FancyButton>
      <hr />
      <h1>Ref and The Dom</h1>
      <h5>Custom Text Input</h5>
      <CustomTextInput />
      <h5>Auto Focus Custom Text Input</h5>
      <AutoFocusTextInput />
      <h5>Function Custom Text Input</h5>
      <FCustomTextInput />
    </div>
  );
}

export default App;
