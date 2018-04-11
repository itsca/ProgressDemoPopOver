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
  getTarget() {
    console.log(ReactDOM.findDOMNode(this.target));
    
    return ReactDOM.findDOMNode(this.target);
  }
  handleToggle() {
      console.log('Clicked');
      
    this.setState({ show: !this.state.show });
  }
  render() {
      console.log(OverlayTrigger);
      
    const overlayProps = {
        container: this,
        target: this.getTarget,
        show: true
    };
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