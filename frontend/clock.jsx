import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date(),
    };

    this.tick = this.tick.bind(this);
  }

  render() {
    const time = this.state.time;
    return (
      <div className="clock">
        <div className="time">
          <span>Time:</span>
          <span>{`${this.zeroPad(time.getHours())}:${this.zeroPad(time.getMinutes())}:${this.zeroPad(time.getSeconds())}`}</span>
        </div>
        <div className="date">
          <span>Date:</span>
          <span>{`${time.getFullYear()}-${this.zeroPad(time.getMonth() + 1)}-${this.zeroPad(time.getDate())}`}</span>
        </div>
      </div>
    );
  }

  zeroPad(num) {
    if (num<10) {
      return `0${num}`;
    }
    return num;
  }

  tick() {
    this.setState({time: new Date()});
  }

  componentDidMount() {
    this.ticker = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.ticker);
  }
}

export default Clock;
