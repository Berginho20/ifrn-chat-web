import React from 'react';

export const AppInput = props => (
  <div>
    <label>{props.label}</label>
    <input type={props.type} title={props.title} />
  </div>
);