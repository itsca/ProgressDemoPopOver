import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './myProgress.css';

import {
  Overlay, 
  Tooltip, 
  Button,
  Popover,
  OverlayTrigger
} from 'react-bootstrap'

class MyProgress extends Component {
    constructor(props, context) {
        super(props, context);
        this.getTarget = this.getTarget.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            show: false
        };
    }
  handleMyProgressClicked() {
    console.log('myprogressclicked'); 
  }
  render() {
    const popoverLeft = (
        <Popover id="popover-positioned-left" title="Popover left">
          <strong>Holy guacamole!</strong> Check this info.
        </Popover>
      );
    return (
      <div>
        <OverlayTrigger trigger="click" placement="right" overlay={popoverLeft} onEntered={()=>{
            // Handle progress bar animation
        }}>
            <a href="#">My Progress</a>
        </OverlayTrigger>
      </div>
    );
  }
}

export default MyProgress;