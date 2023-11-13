
import React from 'react';

function NameInput(props) {
  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={props.name} onChange={props.onChange} />
    </div>
  );
}

export default NameInput;
