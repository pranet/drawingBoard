// @flow

import React from 'react';
import {Canvas} from "./Canvas"
import {Chatbox} from "./Chatbox"
import './styles.css';

type Props = {
  ...
};

type State = {||};

export class Game extends React.Component<Props, State> {
  render() {
    return (
      <div className="game">
        <Canvas/>
        <Chatbox style={{backgroundColor: 'red'}}/>
      </div>
    );
  } 
}
