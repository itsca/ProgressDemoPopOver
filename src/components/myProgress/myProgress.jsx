import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './myProgress.css';
import Icon from '../../assets/images/info-icon.png'

import {
  Overlay, 
  Tooltip, 
  Button,
  Popover,
  OverlayTrigger,
  ProgressBar
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
  render() {
    /*const popoverProgress = (
        <Popover
            id="popover-basic"
            placement="bottom"
        >
            50%
        </Popover>
      );*/
      const p = (
        <ProgressBar now={60} label="60">
        </ProgressBar>
      );
      /*const pp = (
        <ProgressBar now={1} children={[popoverProgress]} />
      );*/
    /*const target = ReactDOM.findDOMNode(p)
    console.log(target);*/
    
    const popoverLeft = (
        <Popover title="Your Progress">
          <div className="popOverContainer">
            <div className="progressContent">
                <p>Reached:</p>
                <div class="progress bg-success">
                    <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                    
                    </div>
                </div>
            </div>
            <footer>
                <p className="targetText" > <img src={Icon} className="infoIcon" alt="info icon"/>You need $69 more to reach your target</p>
            </footer>
          </div>
        </Popover>
      );
    return (
      <div>
        <OverlayTrigger trigger="click" placement="top" overlay={popoverLeft} onEntered={()=>{
            // Handle progress bar animation
        }}>
            <a href="#">My Progress</a>
        </OverlayTrigger>
      </div>
    );
  }
}

export default MyProgress;