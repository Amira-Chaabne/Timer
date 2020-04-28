import React, { Component } from "react";
import "./timer.css";

class Timer extends Component {
  state = {
    time: 0,
    hour: 0,
    min: 0,
    sec: 0,
  };

  timeConvert = () => {
    var num = this.state.time;
    this.setState({ hour: Math.floor(num / 3600) });
    this.setState({ min: Math.floor((num % 3600) / 60) });
    this.setState({ sec: num % 60 });
  };
  resertTime = () => {
    var num = this.state.time;
    this.setState({ hour: 0, min: 0, sec: 0 });
  };
  render() {
    return (
      <div className="timer">
        <h1>Time Conversion Calculator</h1>
        <input
          type="text"
          id="time"
          placeholder="Put a number of seconds"
          onChange={(e) => this.setState({ time: e.target.value })}
        />
        <button type="button" onClick={this.timeConvert}>
          Convert
        </button>
        <br />
        <span>
          <h1>hour:{this.state.hour}</h1>
          <h1>min:{this.state.min}</h1>

          <h1>sec:{this.state.sec}</h1>
        </span>
        <button type="button" onClick={this.resertTime}>
          Reset
        </button>
      </div>
    );
  }
}
export default Timer;
