import React, { createRef } from 'react';

function FCustomTextInput() {
  const ref = createRef();

  function handleClick() {
    ref.current.focus();
  }

  return (
    <div>
      <input type="text" ref={ref} />

      <input type="button" value="Click to Focus" onClick={handleClick} />
    </div>
  );
}

export default FCustomTextInput;
