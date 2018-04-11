import React, { Component } from 'react';
import './myProgress.css';

import {
  Overlay, 
  Tooltip, 
  Button
} from 'react-bootstrap'

class MyProgress extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: true
        };
    }
  handleMyProgressClicked() {
    console.log('myprogressclicked'); 
  }
  /*getTarget() {
    return ReactDOM.findDOMNode(this.target);
  }*/
  render() {
    return (
      <div>
        <a href="#">My Progress</a>
        <Overlay show={this.state.show} placement="left">
          <Tooltip id="overload-left">Tooltip overload!</Tooltip>
        </Overlay>
      </div>
    );
  }
}

export default MyProgress;