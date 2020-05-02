// @flow

import React from 'react';

type Props = {
  style: {...}, 
  ...
};

export function Chatbox(props: Props) {

  return <div style={props.style}>This is the chatbox</div>;
};

