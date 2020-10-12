import React from 'react';
import './button.css'; 

function Button(props) {
  return (
    <>
      <button onClick={props.handleClick}>{props.title}</button>
    </>
  
  );
}

export default Button;
