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
            currentPorgress: 0,
            userProgress: this.props.userProgress || 56,
            maxPorgress: this.props.maxPorgress || 125,
            show: true
        };
    }
  componentDidMount() {
    window.addEventListener("resize", ()=>{ this.refs.overlay.hide() })
  }
  render() {
    const popoverLeft = (
        <Popover title="Your Progress">
          <div className="popOverContainer">
            <div className="progressContent">
                <p className="progressLabel">Reached:</p>
                <div className="progress bg-success">
                    <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{'width': this.state.currentPorgress + '%'}}>
                        <Tooltip placement="bottom" className="in" id="tooltip-bottom">
                            {'$' + this.state.currentPorgress}
                        </Tooltip>
                    </div>
                </div>
                <div className="target">
                    <p>Target</p>
                    <p>{'$' + this.state.maxPorgress}</p>
                </div>
            </div>
            <footer>
                <p className="tooltipText" > <img src={Icon} className="infoIcon" alt="info icon"/>{"You need $" + (this.state.maxPorgress - this.state.userProgress) + ' more to reach your target'}</p>
            </footer>
          </div>
        </Popover>
      );
    return (
      <div>
        <OverlayTrigger ref="overlay" trigger="click" placement="top" rootClose overlay={popoverLeft} 
        onEntered={()=>{
            // Handle progress bar animation
            for (let i = 0; i <= this.state.maxPorgress; i++) {
                if (this.state.currentPorgress <= this.state.userProgress) {
                    this.setState({'currentPorgress': this.state.currentPorgress++})
                }
            }
        }}
        onExited={()=>{
            this.setState({'currentPorgress': 0})
        }}
        >
            <a href="#">My Progress</a>
        </OverlayTrigger>
      </div>
    );
  }
}

export default MyProgress;