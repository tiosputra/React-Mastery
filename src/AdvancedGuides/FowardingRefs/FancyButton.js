import React, { forwardRef } from 'react';

const FancyButton = forwardRef((props, ref) => {
  return (
    <button className="FancyButton" onClick={handleClick}>
      {props.children}
    </button>
  );
});

function handleClick() {
  console.log('You like fancy button ya ?');
}

export default FancyButton;
