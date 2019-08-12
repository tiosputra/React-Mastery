import React from 'react';

import CustomTextInput from './CustomTextInput';
import AutoFocusTextInput from './AutoFocusTextInput';
import FCustomTextInput from './FCustomTextInput';

export default function index() {
  return (
    <div>
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
